// Parse Gemini transport without guessing packet IDs, versions, hashes, or approval data.
export function parseGeminiResponse(input) {
  let raw=String(input||'').replace(/^\uFEFF/,'').trim();
  if(!raw)throw new Error('请先粘贴 Gemini 返回的 JSON，或选择返回的 .json 文件。');
  const fenced=raw.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/i);
  if(fenced)raw=fenced[1].trim();
  let data;
  try{data=JSON.parse(raw);}catch{
    throw new Error('JSON 格式不完整或有语法错误。请复制 Gemini 的完整 JSON；不要包含 JSON 前后的解释文字。单独的 ```json 代码块可以直接粘贴。');
  }
  if(!data||typeof data!=='object'||Array.isArray(data))throw new Error('返回结果必须是带 packetId 和 questions 的 JSON 对象。请让 Gemini 按任务包里的 result-template.json 返回，不能只返回题目数组。');
  const missing=['schemaVersion','kind','packetId','questions'].filter(key=>!(key in data));
  if(missing.length)throw new Error(`返回 JSON 缺少字段：${missing.join('、')}。请让 Gemini 按原任务包的 result-template.json 补全，保留原 packetId、版本和哈希，不要自行编造。`);
  if(data.schemaVersion!==1)throw new Error('schemaVersion 必须为数字 1，请按 result-template.json 返回。');
  const diagnostic=data.kind==='analog-bibles-gemini-diagnosis';
  if(!diagnostic&&data.kind!=='analog-bibles-gemini-result')throw new Error('kind 不匹配：诊断/独立复核应为 analog-bibles-gemini-diagnosis，修订应为 analog-bibles-gemini-result。请按下载包内的 result-template.json 返回。');
  if(diagnostic&&!['diagnosis','verification'].includes(data.mode))throw new Error('诊断结果的 mode 必须与原任务包一致：diagnosis 或 verification。请保留 result-template.json 中的原值。');
  if(typeof data.packetId!=='string'||!data.packetId.trim())throw new Error('缺少有效 packetId。请从原任务包模板保留任务编号，不要填写题号或自行生成。');
  if(!Array.isArray(data.questions)||!data.questions.length||data.questions.length>10)throw new Error('questions 必须包含 1–10 道题；请按原模板返回完整题目对象。');
  for(let i=0;i<data.questions.length;i++){
    const q=data.questions[i],label=`第 ${i+1} 个题目对象`;
    if(!q||typeof q!=='object'||Array.isArray(q))throw new Error(`${label}格式不正确。`);
    const keys=['qid','baseVersion','sourceHashes',...(diagnostic?['diagnosis']:['files','findings'])];
    const missing=keys.filter(key=>!(key in q));
    if(missing.length)throw new Error(`${label}缺少：${missing.join('、')}。请按 result-template.json 补全；版本和哈希必须保留任务包原值。`);
    if(typeof q.qid!=='string'||!Number.isInteger(q.baseVersion)||q.baseVersion<0||!q.sourceHashes||typeof q.sourceHashes!=='object'||Array.isArray(q.sourceHashes))throw new Error(`${label}的 qid、baseVersion 或 sourceHashes 格式错误，请保留原模板值。`);
  }
  return {data,raw:JSON.stringify(data),diagnostic};
}
