import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeLeadIns,solutionQuality} from './public/workbench-quality.js';
import {validateFiles,affectedFiles} from './workbench-model.mjs';
import {validateSvg} from './workbench-svg.mjs';
import {diffBlocks} from './public/workbench-diff.js';
import {database,assets,request,completeFixture} from './test-workbench-db.mjs';
import {workbench} from './workbench.mjs';
export const testSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><title>TEST ONLY</title><desc>Artificial curve for software testing, not a validated answer.</desc><path d="M 20 10 L 20 180 L 280 180" fill="none" stroke="black"/><path d="M 20 180 L 280 20" fill="none" stroke="blue"/><text x="260" y="195">V</text><text x="5" y="15">I</text></svg>';
test('lead-in correction changes paragraph labels and preserves prose, numbers, formulae and code',()=>{
  const text='**思路。** 采用模型。\n\n**结论**. 结果为 $I=1.2$。\n\n这是一个完整思路。\n\n```\n**思路。** 保留\n```';
  assert.equal(normalizeLeadIns(text),'**思路：** 采用模型。\n\n**结论：** 结果为 $I=1.2$。\n\n这是一个完整思路。\n\n```\n**思路。** 保留\n```');
});
test('actual referenced bilingual answer plots required; input circuit or a table cannot satisfy plotting',()=>{
  const src={id:'R011',hashes:{'figure-01.png':'hash'},files:{'instruction.md':'Sketch current and gm as a function of Vx.'}};
  const md={'golden_solution.md':'## Reference answer\nText and table.\n## Grading notes\nNotes','golden_solution.zh.md':'答案','detailed_solution.zh.md':'**思路。** 模型'};
  assert.equal(solutionQuality(src,md).issues.filter(i=>i.code==='REQUIRED_DRAWING_MISSING').length,2);
  const candidate={...md,'detailed_solution.zh.md':'**思路：** 模型\n\n![曲线](/q/R011/solution-test.zh.svg)','detailed_solution.md':'![Curve](/q/R011/solution-test.svg)','solution-test.svg':testSvg,'solution-test.zh.svg':testSvg};
  assert.equal(solutionQuality(src,candidate).issues.length,0);assert.doesNotThrow(()=>validateFiles(candidate,src));
  delete candidate['solution-test.zh.svg'];assert.ok(solutionQuality(src,candidate).issues.some(i=>i.code==='MISSING_PLOT_FILE'));
});
test('SVG rejects scripts, events, foreignObject, links, unsafe styles, malformed XML and unknown references',()=>{
  assert.doesNotThrow(()=>validateSvg(testSvg));
  for(const bad of [testSvg.replace('<path','<script>alert(1)</script><path'),testSvg.replace('<path','<foreignObject/><path'),testSvg.replace('<path','<image href="https://evil.test/x"/><path'),testSvg.replace('<path','<path onload="alert(1)"'),testSvg.replace('stroke="blue"','style="stroke:blue"'),testSvg.replace('stroke="blue"','stroke="url(https://evil.test/x)"'),testSvg.replace('stroke="blue"','stroke="url(#missing)"'),testSvg.replace('</svg>',''), '<!DOCTYPE svg [<!ENTITY x "test">]>'+testSvg])assert.throws(()=>validateSvg(bad));
});
test('rendered diff groups changed Markdown blocks with complete display equations and hidden unchanged context',()=>{
  const before='### Step\n\nUnchanged.\n\n$$\nI=1\n\nV=2\n$$\n\nLast.';
  const after=before.replace('I=1','I=3');
  const changes=diffBlocks(before,after).filter(g=>g.kind==='change');
  assert.equal(changes.length,1);assert.equal(changes[0].before,'$$\nI=1\n\nV=2\n$$');assert.equal(changes[0].after,'$$\nI=3\n\nV=2\n$$');
});
test('a changed answer plot joins the entire solution review scope',()=>{
  const src={files:{'golden_solution.md':'a','golden_solution.zh.md':'b','detailed_solution.md':'c','detailed_solution.zh.md':'d','solution-test.svg':testSvg}};
  const files={...src.files,'solution-test.svg':testSvg.replace('blue','red')};assert.deepEqual(affectedFiles(src,files),Object.keys(files).sort());
});
test('approval rejects missing plots and lead-in punctuation; accepts reviewed real SVG candidates',async t=>{
  const db=database(':memory:');t.after(()=>db.close());const env={DB:db,ASSETS:assets()};
  const call=(route,value)=>workbench(request('/api/workbench'+route,value),env,async()=>({email:'fixture@example.invalid',sub:'fixture'}));
  let state=await(await call('/questions/R011')).json();const original=Object.fromEntries(Object.entries(state.source.files).filter(([n])=>n.endsWith('.md')&&!n.startsWith('instruction')));
  const send=async(action,files=state.revision?.payload.files||original,extra={})=>{const r=await call('/questions/R011',{version:state.revision?.version||0,requestId:crypto.randomUUID(),sourceHashes:state.source.hashes,files,note:'Software test fixture',action,...extra});if(r.ok)state=await(await call('/questions/R011')).json();return r;};
  await send('save');await send('ready');
  let result=await send('approve',undefined,{scopeFiles:Object.keys(state.scope.hashes),confirm:'APPROVE ENTIRE QUESTION'});assert.equal(result.status,409);assert.match((await result.json()).error,/题目要求画图/);
  const fixed=completeFixture(state.source,original);fixed['detailed_solution.zh.md']='**思路。** 这里只是测试。\n\n'+fixed['detailed_solution.zh.md'];
  await send('save',fixed);await send('ready');
  result=await send('approve',undefined,{scopeFiles:Object.keys(state.scope.hashes),confirm:'APPROVE ENTIRE QUESTION'});assert.equal(result.status,409);assert.match((await result.json()).error,/引导语后应使用冒号/);
  fixed['detailed_solution.zh.md']=normalizeLeadIns(fixed['detailed_solution.zh.md']);await send('save',fixed);await send('ready');
  for(const name of Object.keys(state.scope.hashes))assert.equal((await send('review',undefined,{reviewFile:name,reviewHash:state.scope.hashes[name],fingerprint:state.scope.fingerprint})).status,201);
  assert.equal((await send('approve',undefined,{scopeFiles:Object.keys(state.scope.hashes),confirm:'APPROVE ENTIRE QUESTION'})).status,201);
});
