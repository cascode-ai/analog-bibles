export const answerPlot = /^solution-[a-z0-9][a-z0-9-]*(?:\.zh)?\.svg$/;
export const answerMarkdown = /^(golden_solution|detailed_solution)(\.zh)?\.md$/;
const labels='思路|解题思路|核心思路|解题方法|方法|模型|分析|推导|计算|验证|结论|要点|解';
// Only short paragraph lead-ins; never rewrite sentences, formulae, or fenced code.
export function normalizeLeadIns(text){
  let fenced=false;
  return text.split('\n').map(line=>{
    if(/^\s*(```|~~~)/.test(line)){fenced=!fenced;return line;}
    if(fenced)return line;
    return line.replace(new RegExp(`^(\\s*(?:[-*+]\\s+|\\d+[.)]\\s+)?)(\\*\\*|__)?(${labels})([。．.：:])(?:\\2)?(?=\\s|$)`),(_,prefix,mark,label)=>`${prefix}${mark||''}${label}：${mark||''}`)
      .replace(new RegExp(`^(\\s*(?:[-*+]\\s+|\\d+[.)]\\s+)?)(\\*\\*|__)(${labels})\\2[。．.:：]\\s*`),(_,prefix,mark,label)=>`${prefix}${mark}${label}：${mark} `);
  }).join('\n');
}
export function drawingRequired(src){
  return /\b(?:sketch|plot|draw|graph)\b|绘制|画出|作出.{0,8}(?:图|曲线|波形)|作图/.test((src.files['instruction.md']||'').toLowerCase()+'\n'+(src.files['instruction.zh.md']||''));
}
export function imageReferences(markdown){
  return [...markdown.matchAll(/!\[[^\]]*\]\(\s*<?([^\s)>]+)>?(?:\s+["'][^\n]*["'])?\s*\)/g)].map(m=>m[1]);
}
export function solutionQuality(src,files){
  const issues=[],requiresDrawing=drawingRequired(src),plots=Object.keys(files).filter(n=>answerPlot.test(n));
  for(const [name,text] of Object.entries(files)){
    if(name.endsWith('.zh.md')&&normalizeLeadIns(text)!==text)issues.push({code:'LEAD_IN_PUNCTUATION',file:name,message:`${name}：思路、方法、结论等引导语后应使用冒号。`});
    if(!answerMarkdown.test(name))continue;
    for(const ref of imageReferences(text)){
      const name=ref.replace(new RegExp(`^/q/${src.id}/`),'').replace(/^\.\//,'');
      if(answerPlot.test(name)&&!(name in files)&&!(name in src.hashes))issues.push({code:'MISSING_PLOT_FILE',file:name,message:`图像引用缺少文件：${name}`});
    }
  }
  if(requiresDrawing){
    for(const lang of ['en','zh']){
      const names=lang==='zh'?['golden_solution.zh.md','detailed_solution.zh.md']:['golden_solution.md','detailed_solution.md'];
      const refs=names.flatMap(n=>imageReferences(files[n]||''));
      const present=refs.some(ref=>{
        const name=ref.replace(new RegExp(`^/q/${src.id}/`),'').replace(/^\.\//,'');
        return answerPlot.test(name)&&(name in files||name in src.hashes)&&(lang==='zh'?name.endsWith('.zh.svg'):!name.endsWith('.zh.svg'));
      });
      if(!present)issues.push({code:'REQUIRED_DRAWING_MISSING',file:names[1],message:`题目要求画图，但${lang==='zh'?'中文':'英文'}答案没有引用实际的 solution-*.svg 答案图；原始电路图和文字描述不能代替作图。`});
    }
  }
  return {requiresDrawing,plots,issues};
}
