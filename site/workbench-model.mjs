import { answerPlot, solutionQuality } from './public/workbench-quality.js';
import { validateSvg } from './workbench-svg.mjs';
export const editable = /^(?:(golden_solution|detailed_solution)(\.zh)?\.md|solution-[a-z0-9][a-z0-9-]*(?:\.zh)?\.svg)$/;
export const fail = (status, message) => { throw Object.assign(new Error(message), { status }); };
export const canonical = value => JSON.stringify(value, (_, v) => v && typeof v === 'object' && !Array.isArray(v)
  ? Object.fromEntries(Object.keys(v).sort().map(k => [k, v[k]])) : v);
export const same = (a, b) => canonical(a) === canonical(b);
export const digest = async value => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))].map(b => b.toString(16).padStart(2, '0')).join('');
export const candidateFiles = src => Object.fromEntries(Object.entries(src.files).filter(([n]) => editable.test(n)));
export function validateFiles(files, src) {
  if (!files || typeof files !== 'object' || Array.isArray(files) || Object.keys(files).some(n=>!editable.test(n)) || Object.keys(candidateFiles(src)).some(n=>!(n in files))) fail(400, 'Only solution Markdown and solution-*.svg can be added; existing solution files cannot be removed');
  for (const value of Object.values(files)) if (typeof value !== 'string' || !value.trim() || value.length > 150000) fail(400, 'Invalid candidate Markdown');
  if (!/^## Reference answer\s*$/mi.test(files['golden_solution.md']) || !/^## Grading notes\s*$/mi.test(files['golden_solution.md'])) fail(400, 'Preserve Reference answer and Grading notes headings');
  for(const [name,text] of Object.entries(files))if(answerPlot.test(name)){try{validateSvg(text);}catch(e){fail(400,`${name}：${e.message}`);}}
}
export async function candidateScope(src, files) {
  const hashes = { ...src.hashes };
  for (const [name, text] of Object.entries(files)) hashes[name] = await digest(text);
  return { hashes, fingerprint: await digest(canonical(hashes)), requiredFiles: affectedFiles(src,files),quality:solutionQuality(src,files) };
}
export function affectedFiles(src, files) {
  const names=Object.keys(files), changed=names.filter(n=>files[n]!==src.files[n]), required=new Set(changed);
  if(changed.some(n=>n.startsWith('golden_solution'))) { required.add('golden_solution.md'); required.add('golden_solution.zh.md'); }
  if(changed.some(n=>n.startsWith('detailed_solution'))) { required.add('detailed_solution.md'); required.add('detailed_solution.zh.md'); }
  if(changed.some(n=>answerPlot.test(n)))for(const n of names)required.add(n);
  return [...required].filter(n=>names.includes(n)).sort();
}
export function fullyReviewedFiles(receipts, scope, files) {
  return files.every(name => receipts?.[name]?.hash===scope.hashes[name] && receipts[name].fingerprint===scope.fingerprint);
}
export function fullyReviewed(receipts, scope) {
  return Object.keys(scope.hashes).every(name => receipts?.[name]?.hash === scope.hashes[name] && receipts[name].fingerprint === scope.fingerprint);
}
// These are literal signals, never a claim that the mathematics is correct.
export function changeSignals(src,files){
  const changedFiles=Object.keys(files).filter(n=>files[n]!==src.files[n]);
  const math=s=>(s.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g)||[]).map(x=>x.replace(/\s+/g,'')).sort();
  const numbers=s=>(s.match(/\b\d+(?:\.\d+)?\b/g)||[]).sort();
  const formulaFiles=changedFiles.filter(n=>!same(math(src.files[n]||''),math(files[n])));
  const numberFiles=changedFiles.filter(n=>!same(numbers(src.files[n]||''),numbers(files[n])));
  const referenceChanged=changedFiles.some(n=>n.startsWith('golden_solution')&&!same((src.files[n]||'').split(/^## (?:Grading notes|评分说明)\s*$/mi)[0],files[n].split(/^## (?:Grading notes|评分说明)\s*$/mi)[0]));
  return {changedFiles,addedFiles:changedFiles.filter(n=>!(n in src.files)),formulaFiles,numberFiles,referenceChanged};
}
export function validateDiagnosis(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(400, 'Diagnosis must be an object');
  const allowed = new Set(['risk','disposition','confidence','claimsChanged','missingSteps','focus','checks','summary']);
  if (Object.keys(value).some(k => !allowed.has(k))) fail(400, 'Unknown diagnosis field');
  if (!['LOW','MEDIUM','HIGH','BLOCKED'].includes(value.risk) || !['KEEP','PATCH','REVIEW','BLOCK'].includes(value.disposition)) fail(400, 'Diagnosis risk or disposition is invalid');
  if (!Number.isFinite(value.confidence) || value.confidence < 0 || value.confidence > 1) fail(400, 'Diagnosis confidence must be between 0 and 1');
  if (typeof value.claimsChanged !== 'boolean' || !Array.isArray(value.missingSteps) || !Array.isArray(value.focus) || !Array.isArray(value.checks) || typeof value.summary !== 'string') fail(400, 'Incomplete diagnosis');
  for (const list of [value.missingSteps,value.focus,value.checks]) {if(list.length>30)fail(400,'Diagnosis list is too long');for (const item of list) if (typeof item !== 'string' || item.length > 1000) fail(400, 'Diagnosis item is too long');}
  if (!value.summary.trim() || value.summary.length > 5000) fail(400, 'Diagnosis needs a substantive summary');
  return value;
}
export function triageMetrics(src, files, diagnosis = null) {
  const names = Object.keys(files);
  const changed = names.filter(n => files?.[n] !== src.files[n]);
  const lineChanges = changed.reduce((total,n) => {
    const a=String(src.files[n]||'').split('\n'), b=String(files?.[n]||'').split('\n');
    let sameHead=0; while(sameHead<a.length&&sameHead<b.length&&a[sameHead]===b[sameHead])sameHead++;
    let sameTail=0; while(sameTail<a.length-sameHead&&sameTail<b.length-sameHead&&a.at(-1-sameTail)===b.at(-1-sameTail))sameTail++;
    return total + Math.max(a.length-sameHead-sameTail,0) + Math.max(b.length-sameHead-sameTail,0);
  },0);
  const detailed = ['detailed_solution.md','detailed_solution.zh.md'].every(n => String(files?.[n]||'').trim().length > 40);
  const hasGrading = /## Grading notes\s*$/mi.test(files?.['golden_solution.md']||'') || /## 评分说明\s*$/mi.test(files?.['golden_solution.zh.md']||'');
  const fallback = changed.length ? '候选内容有修改，优先检查新增段落与公式。' : '当前仍是仓库原版，等待诊断轮分流。';
  return {quality:solutionQuality(src,files),signals:changeSignals(src,files),changedFiles:changed, changedFileCount:changed.length, changedLineEstimate:lineChanges, hasDetailed:detailed, hasGrading, diagnosis:diagnosis||null, focus:diagnosis?.focus||[], risk:diagnosis?.risk||'UNASSESSED', disposition:diagnosis?.disposition||'UNASSESSED', confidence:diagnosis?.confidence??0, summary:diagnosis?.summary||fallback};
}
