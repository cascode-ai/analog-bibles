// Local Codex handoff: prepare editable files -> check -> submit to pending inbox.
// Never writes formal exercise directories, applies candidates, or executes Git.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {editable,validateFiles} from './workbench-model.mjs';
import {solutionQuality} from './public/workbench-quality.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const workRoot=path.join(root,'.wrangler/codex-work');
export function localOrigin(value='http://127.0.0.1:8787'){
  const url=new URL(value);
  if(url.protocol!=='http:'||!['127.0.0.1','localhost','[::1]'].includes(url.hostname)||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw new Error('Codex 交接只允许本机 HTTP 回环地址，禁止向外部地址发送管理员凭据。');
  return url.origin;
}
export async function localClient(origin){
  origin=localOrigin(origin);
  const admin=JSON.parse(await fs.readFile(path.join(root,'.wrangler/workbench-admin.json'),'utf8'));
  const headers={origin,'content-type':'application/json','x-workbench-request':'1'};
  const login=await fetch(origin+'/api/workbench/local-login',{method:'POST',headers,body:JSON.stringify({key:admin.key}),redirect:'error',signal:AbortSignal.timeout(20000)});
  if(!login.ok)throw new Error(`本地登录失败 (${login.status})，请先运行 npm run workbench:dev。`);
  const cookie=login.headers.get('set-cookie')?.split(';')[0];if(!cookie)throw new Error('本地登录没有返回会话');
  return async(route,value)=>{
    const response=await fetch(origin+'/api/workbench'+route,{method:value===undefined?'GET':'POST',headers:{...headers,cookie},body:value===undefined?undefined:JSON.stringify(value),redirect:'error',signal:AbortSignal.timeout(30000)});
    let data;try{data=await response.json();}catch{throw new Error('本地工作台响应无效，请重启后重试。');}
    if(!response.ok)throw new Error(data.error||`HTTP ${response.status}`);return data;
  };
}
const inside=(base,target)=>target===base||target.startsWith(base+path.sep);
async function safeTaskDirectory(value){
  const realRoot=await fs.realpath(workRoot),dir=await fs.realpath(path.resolve(root,value));
  if(!inside(realRoot,dir)||dir===realRoot)throw new Error('任务目录必须位于 .wrangler/codex-work 下');
  return dir;
}
async function readRegular(filename){const info=await fs.lstat(filename);if(!info.isFile()||info.isSymbolicLink())throw new Error('任务文件必须为普通文件，不能是符号链接：'+path.basename(filename));if(info.size>1000000)throw new Error('任务文件过大：'+path.basename(filename));return fs.readFile(filename,'utf8');}
function validIds(value){const ids=value?.split(',').map(x=>x.trim()).filter(Boolean);if(ids?.some(x=>!/^[-A-Za-z0-9]{1,32}$/.test(x)))throw new Error('题号格式不正确');return ids;}
const instructions=`# Codex 本地答案审核任务

先读取 task.json、各题 source 原题/原图、candidate 当前候选以及当前仓库 SOLUTION_STYLE.md。只编辑本任务目录中的候选和 findings；不要修改正式习题、Git 分支/提交/暂存、生产配置或数据库。不要创建 PR、Push、Merge 或 Deploy。不要把管理员 key 打印或发到模型/远程服务。

任务按题串行完成，每完成一题就 check 和 submit；不要等十题全部完成再交接。revision 模式直接编辑 <题号>/candidate 下的 Markdown/SVG，填写 <题号>/findings.md。不要手写长 JSON，不要更改 task.json 的 packetId、版本或源哈希。diagnosis/verification 模式只填写 <题号>/diagnosis.json，不改候选。

保留已有正确内容，补足关键步骤、模型、工作区、参数、公式、单位和评分依据。禁止把“先代入再逐行算术”当作详细解答：只展示能支持结论的关键代入和中间量，简单四则运算合并。禁止空泛、重复、冗长的语言解释；每段都要说明依据或物理含义。禁止引入题目未需要的奇怪符号、缩写、变量和临时命名；新符号必须立即定义并确有必要。中英文结论、条件、公式和图像应一致。不确定项记入 findings，不能编造已验证结果。

题目要求画图时必须生成实际双语 solution-*.svg/.zh.svg，并在对应 Markdown 使用 /q/<题号>/solution-*.svg 引用。原始电路图、文字、表格、脚本、占位符都不能代替答案图。图由推导函数产生，参数未指定时注明示例参数/适用范围，标出轴、单位、关键点和工作区。SVG 仅静态元素，含 xmlns、viewBox、title、desc，禁止 style、脚本、事件、外链、动画和 foreignObject。可在任务目录使用离线绘图脚本，但最终候选只能交接允许的 Markdown/SVG。

中文段首引导语必须写 **思路：**、**方法：**、**结论：**，不能用句号；其他完整句子正常用句号。

每题完成后从仓库根目录执行下方 check 和 submit 命令。check 只验证文件结构/安全/缺图/格式，不证明技术正确；你仍须实际复算关键结果并检查图像。submit 只发送到待审接收箱，不应用、不批准。失败时修复明确错误；版本过期应重新 prepare，不手改版本或哈希。最终报告题号、接收箱 id、修改要点和需人工关注的问题即可。
`;
export async function runCodexWork(args){
  const command=args.shift();const options={};
  while(args.length){const key=args.shift();if(!key.startsWith('--')||!args.length)throw new Error('选项格式：--name value');options[key.slice(2)]=args.shift();}
  if(!['prepare','check','submit'].includes(command))throw new Error('用法：npm run workbench:codex -- prepare --batch pilot-razavi-11 --ids R013,R014 --mode revision；check/submit --task <任务目录> --ids R013');
  if(Object.keys(options).some(k=>!['batch','ids','mode','task','origin'].includes(k)))throw new Error('未知选项');
  const origin=localOrigin(options.origin),ids=validIds(options.ids);
  if(command==='prepare'){
    if(!options.batch)throw new Error('prepare 需要 --batch');
    const api=await localClient(origin),packet=await api('/codex/packet',{batchId:options.batch,mode:options.mode||'revision',...(ids?{ids}:{})});
    await fs.mkdir(workRoot,{recursive:true});const realRoot=await fs.realpath(workRoot);
    const dir=path.join(realRoot,`${packet.createdAt.replace(/[:.]/g,'-')}-${packet.packetId}`);await fs.mkdir(dir);
    await fs.writeFile(path.join(dir,'task.json'),JSON.stringify(packet,null,2),{flag:'wx'});
    const relative=path.relative(root,dir).replaceAll('\\','/');
    const tasks=packet.questions.map(q=>`npm run workbench:codex -- check --task ${relative} --ids ${q.qid}\nnpm run workbench:codex -- submit --task ${relative} --ids ${q.qid}`).join('\n\n');
    await fs.writeFile(path.join(dir,'TASK.md'),instructions+'\n'+tasks+'\n',{flag:'wx'});
    for(const q of packet.questions){
      const qdir=path.join(dir,q.qid);await fs.mkdir(path.join(qdir,'source'),{recursive:true});await fs.mkdir(path.join(qdir,'candidate'));
      for(const [name,text] of Object.entries(q.sourceFiles)){if(name.includes('/')||name.includes('\\')||name.includes('..'))throw new Error('源文件路径无效');await fs.writeFile(path.join(qdir,'source',name),text,{flag:'wx'});}
      for(const [name,text] of Object.entries(q.files)){if(!editable.test(name))throw new Error('候选文件路径无效');await fs.writeFile(path.join(qdir,'candidate',name),text,{flag:'wx'});}
      for(const name of q.assets){
        const dest=path.resolve(qdir,'source',name);if(!inside(path.join(qdir,'source'),dest)||name.includes('\\'))throw new Error('素材路径无效');
        const response=await fetch(origin+`/q/${q.qid}/`+name.split('/').map(encodeURIComponent).join('/'),{redirect:'error',signal:AbortSignal.timeout(20000)});if(!response.ok)throw new Error('素材下载失败：'+q.qid+'/'+name);
        const bytes=new Uint8Array(await response.arrayBuffer());if(createHash('sha256').update(bytes).digest('hex')!==q.sourceHashes[name])throw new Error('素材哈希不符：'+q.qid+'/'+name);
        await fs.mkdir(path.dirname(dest),{recursive:true});await fs.writeFile(dest,bytes,{flag:'wx'});
      }
      await fs.writeFile(path.join(qdir,'findings.md'),'');
      await fs.writeFile(path.join(qdir,'diagnosis.json'),JSON.stringify({risk:'BLOCKED',disposition:'BLOCK',confidence:0,claimsChanged:false,missingSteps:[],focus:[],checks:[],summary:''},null,2));
    }
    console.log(JSON.stringify({taskDirectory:relative,instructions:relative+'/TASK.md',mode:packet.mode,ids:packet.questions.map(q=>q.qid)},null,2));return;
  }
  if(!options.task)throw new Error('check/submit 需要 --task');
  const dir=await safeTaskDirectory(options.task),packet=JSON.parse(await readRegular(path.join(dir,'task.json')));
  if(!['revision','diagnosis','verification'].includes(packet.mode)||!Array.isArray(packet.questions))throw new Error('任务元数据无效');
  if(ids?.some(id=>!packet.questions.some(q=>q.qid===id)))throw new Error('所选题不属于这个任务');
  const selected=packet.questions.filter(q=>!ids||ids.includes(q.qid));if(!selected.length)throw new Error('没有题目');
  const api=command==='submit'?await localClient(origin):null;let failures=0;
  for(const q of selected){try{
    if(!/^[-A-Za-z0-9]{1,32}$/.test(q.qid))throw new Error('任务题号无效');
    const qdir=await fs.realpath(path.join(dir,q.qid));if(!inside(dir,qdir))throw new Error('题目目录不能链接到任务之外');
    let item={qid:q.qid,baseVersion:q.baseVersion,sourceHashes:q.sourceHashes};let issues=[];
    if(packet.mode==='revision'){
      const candidateDir=await fs.realpath(path.join(qdir,'candidate'));if(!inside(qdir,candidateDir))throw new Error('候选目录不能链接到题目之外');
      const files={};for(const name of await fs.readdir(candidateDir)){if(!editable.test(name))throw new Error('候选目录只允许答案 Markdown/SVG，移出：'+name);files[name]=await readRegular(path.join(candidateDir,name));}
      const src={id:q.qid,files:q.sourceFiles,hashes:q.sourceHashes};validateFiles(files,src);issues=solutionQuality(src,files).issues;
      const findings=await readRegular(path.join(qdir,'findings.md'));if(!findings.trim())throw new Error('请填写 findings.md 的验证依据及不确定项');
      item={...item,files,findings};
    }else item.diagnosis=JSON.parse(await readRegular(path.join(qdir,'diagnosis.json')));
    if(command==='check'){
      if(packet.mode!=='revision'){const {validateDiagnosis}=await import('./workbench-model.mjs');validateDiagnosis(item.diagnosis);}
      console.log(JSON.stringify({qid:q.qid,valid:!issues.length,issues}));if(issues.length)failures++;continue;
    }
    const result={schemaVersion:1,kind:packet.mode==='revision'?'analog-bibles-gemini-result':'analog-bibles-gemini-diagnosis',...(packet.mode==='revision'?{}:{mode:packet.mode}),packetId:packet.packetId,questions:[item]};
    const raw=JSON.stringify(result);
    if(new TextEncoder().encode(raw).length>850000)throw new Error('该题内容超过 850 KB');
    await fs.writeFile(path.join(qdir,'result.json'),raw);
    const sent=await api('/codex/inbox',{raw,label:`Codex ${q.qid} · ${packet.mode}`});
    console.log(JSON.stringify({qid:q.qid,inboxId:sent.id,status:sent.status,replayed:!!sent.replayed,warnings:sent.metadata.warnings}));
  }catch(e){failures++;console.error(JSON.stringify({qid:q.qid,error:e.message}));}}
  if(failures)throw new Error(`${failures} 题未通过，成功题已保留，请只重试失败题。`);
}
if(process.argv[1]&&pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url){
  try{await runCodexWork(process.argv.slice(2));}catch(e){console.error(e.message);process.exitCode=1;}
}
