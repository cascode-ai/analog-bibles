import {fail,digest} from './workbench-model.mjs';
import {parseGeminiResponse} from './public/workbench-import.js';

export async function codexInbox(path,request,env,actor,{body,json,preview}){
  if(path==='/api/workbench/codex/inbox'){
    if(request.method==='GET'){
      const rows=(await env.DB.prepare('SELECT id,actor,created_at,label,metadata,status FROM wb_codex_inbox ORDER BY created_at DESC, rowid DESC LIMIT 50').all()).results;
      return json(rows.map(r=>({...r,metadata:JSON.parse(r.metadata)})));
    }
    if(request.method!=='POST')fail(405,'Method not allowed');
    const b=await body(request);
    if(typeof b.raw!=='string'||new TextEncoder().encode(b.raw).length>850000)fail(400,'Codex 返回上限 850 KB，请逐题交接。');
    let parsed;try{parsed=parseGeminiResponse(b.raw);}catch(e){fail(400,e.message);}
    const actorLabel=`${actor.email} (${actor.sub})`,dedupe=await digest(actorLabel+'\n'+b.raw);
    const find=()=>env.DB.prepare('SELECT id,status,metadata FROM wb_codex_inbox WHERE dedupe_key = ?').bind(dedupe).first();
    const existing=await find();if(existing)return json({...existing,metadata:JSON.parse(existing.metadata),replayed:true});
    // Same current-source/version and SVG validation used by browser preview. No candidate INSERT here.
    const result=await preview(b.raw,parsed.diagnostic);
    const metadata={packetId:parsed.data.packetId,mode:parsed.diagnostic?parsed.data.mode:'revision',
      ids:result.questions.map(q=>q.qid),versions:Object.fromEntries(result.questions.map(q=>[q.qid,q.baseVersion])),
      warnings:result.questions.flatMap(q=>(q.quality?.issues||[]).map(i=>({qid:q.qid,...i})))};
    const id=crypto.randomUUID(),at=new Date().toISOString(),label=String(b.label||metadata.ids.join(', ')).slice(0,160);
    try{await env.DB.prepare('INSERT INTO wb_codex_inbox VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(id,actorLabel,at,label,b.raw,JSON.stringify(metadata),'PENDING',dedupe).run();}
    catch(e){if(/UNIQUE|constraint/i.test(String(e))){const row=await find();if(row)return json({...row,metadata:JSON.parse(row.metadata),replayed:true});}throw e;}
    return json({id,status:'PENDING',metadata,created_at:at},201);
  }
  const match=path.match(/^\/api\/workbench\/codex\/inbox\/([\w-]+)$/);
  if(!match)return null;
  if(request.method!=='GET')fail(405,'Method not allowed');
  const row=await env.DB.prepare('SELECT id,actor,created_at,label,raw,metadata,status FROM wb_codex_inbox WHERE id = ?').bind(match[1]).first();
  if(!row)fail(404,'找不到这份 Codex 返回');
  return json({...row,metadata:JSON.parse(row.metadata)});
}

export async function requirePendingInbox(db,b){
  if(!b.inboxId)return;
  const row=await db.prepare('SELECT raw,status FROM wb_codex_inbox WHERE id = ?').bind(String(b.inboxId)).first();
  if(!row||row.status!=='PENDING'||row.raw!==b.raw)fail(409,'Codex 返回已应用或内容改变，请刷新接收列表并重新预览。');
}
