import { parseGeminiResponse } from './public/workbench-import.js';
import { fail, same, digest, candidateFiles, validateFiles, validateDiagnosis } from './workbench-model.mjs';
import { solutionQuality } from './public/workbench-quality.js';
import {codexInbox,requirePendingInbox} from './workbench-codex.mjs';

// Gemini responses are untrusted data. The stored packet owns IDs and base versions.
export async function exchange(path, request, env, actor, { body, source, latest, json }) {
  const db = env.DB, actorLabel = `${actor.email} (${actor.sub})`;
  const inbox=await codexInbox(path,request,env,actor,{body,json,source,latest,preview:async(raw,diagnostic)=>{
    const response=await exchange('/api/workbench/codex/'+(diagnostic?'diagnosis/':'')+'preview',request,env,actor,{body:async()=>({raw}),source,latest,json});
    return response.json();
  }});
  if(inbox)return inbox;
  const provider=path.startsWith('/api/workbench/codex/')?'codex':'gemini';
  if(provider==='codex')path=path.replace('/api/workbench/codex/','/api/workbench/gemini/');
  if (path === '/api/workbench/pilots' && request.method === 'POST') {
    await body(request);
    const statements = [11,21].map(start => {
      const ids = Array.from({length:10}, (_, i) => `R${String(start+i).padStart(3,'0')}`);
      return db.prepare('INSERT OR IGNORE INTO wb_batches VALUES (?, ?, ?, ?)').bind(`pilot-razavi-${start}`,actorLabel,new Date().toISOString(),JSON.stringify({name:`Razavi ${ids[0]}–${ids.at(-1)} · 试点`,ids}));
    });
    await db.batch(statements);
    return json({ok:true});
  }
  if (path === '/api/workbench/gemini/packet' && request.method === 'POST') {
    const b = await body(request);
    const row = await db.prepare('SELECT payload FROM wb_batches WHERE id = ?').bind(String(b.batchId)).first();
    if (!row) fail(400,'Select an existing batch');
    const batch = JSON.parse(row.payload);
    if(b.ids && (!Array.isArray(b.ids)||new Set(b.ids).size!==b.ids.length||b.ids.some(id=>!batch.ids.includes(id))))fail(400,'Selected IDs must be unique questions from this batch');
    const ids = b.qid ? batch.ids.filter(id => id === b.qid) : b.ids || batch.ids;
    if (!ids.length || ids.length > 10) fail(400,'Gemini packets support 1–10 questions; select a pilot batch');
    if(b.mode&&!['diagnosis','revision','verification'].includes(b.mode))fail(400,'Unknown packet mode');
    const mode = b.mode || 'revision', diagnostic=mode!=='revision';
    const packet = {schemaVersion:1,kind:diagnostic ? 'analog-bibles-gemini-diagnostic-packet' : 'analog-bibles-gemini-packet',provider,mode,packetId:crypto.randomUUID(),batchId:b.batchId,createdAt:new Date().toISOString(),questions:[]};
    for (const qid of ids) {
      const src = await source(env,request,qid), rev = await latest(db,qid);
      if (rev && !same(rev.payload.source.hashes,src.hashes)) fail(409,`${qid}: source changed; reconcile draft first`);
      const diagnosticRow=await db.prepare('SELECT * FROM wb_diagnostics WHERE qid = ? ORDER BY created_at DESC, rowid DESC LIMIT 1').bind(qid).first();
      const diagnosis=diagnosticRow&&diagnosticRow.base_version===(rev?.version||0)&&same(JSON.parse(diagnosticRow.source_hashes),src.hashes)?JSON.parse(diagnosticRow.payload):null;
      packet.questions.push({qid,book:src.book,baseVersion:rev?.version||0,sourceHashes:src.hashes,sourceCommit:src.commit,sourceFiles:src.files,diagnosis:mode==='verification'?null:diagnosis,quality:solutionQuality(src,rev?.payload.files||candidateFiles(src)),
        files:rev?.payload.files||candidateFiles(src),note:rev?.payload.note||'',assets:Object.keys(src.hashes).filter(n=>!(n in src.files))});
    }
    // Detect a concurrent save while collecting the packet; a later save also invalidates import.
    for (const q of packet.questions) if ((await latest(db,q.qid))?.version !== (q.baseVersion||undefined)) fail(409,'Draft changed while creating packet; retry');
    await db.prepare('INSERT INTO wb_packets VALUES (?, ?, ?, ?)').bind(packet.packetId,actorLabel,packet.createdAt,JSON.stringify(packet)).run();
    return json(packet);
  }
  if (path === '/api/workbench/gemini/diagnosis/preview' || path === '/api/workbench/gemini/diagnosis/apply') {
    if (request.method !== 'POST') fail(405,'Method not allowed');
    const b=await body(request); if(typeof b.raw!=='string'||b.raw.length>900000)fail(400,'Diagnosis JSON must be under 900 KB');
    let result;try{result=parseGeminiResponse(b.raw).data;}catch(e){fail(400,e.message);}
    if(result?.schemaVersion!==1||result.kind!=='analog-bibles-gemini-diagnosis'||!['diagnosis','verification'].includes(result.mode)||typeof result.packetId!=='string'||!Array.isArray(result.questions)||!result.questions.length||result.questions.length>10)fail(400,'Invalid diagnosis result schema');
    const row=await db.prepare('SELECT payload FROM wb_packets WHERE id = ?').bind(result.packetId).first();if(!row)fail(400,'找不到对应诊断任务包。请使用当前本地环境下载的任务包及原 result-template.json，不要改 packetId。');
    const packet=JSON.parse(row.payload);if(packet.mode!==result.mode)fail(409,'Packet and result modes do not match');
    const seen=new Set(),prepared=[];
    for(const item of result.questions){
      if(!item||typeof item!=='object'||Array.isArray(item)||seen.has(item.qid))fail(400,'Duplicate or malformed diagnosis item');seen.add(item.qid);
      if(Object.keys(item).some(k=>!['qid','baseVersion','sourceHashes','diagnosis'].includes(k)))fail(400,'Diagnosis cannot contain candidate files, status or approval');
      const base=packet.questions.find(q=>q.qid===item.qid);if(!base)fail(400,'Diagnosis question is outside packet');
      if(item.baseVersion!==base.baseVersion||!same(item.sourceHashes,base.sourceHashes))fail(409,`${item.qid}: packet base changed`);
      const src=await source(env,request,item.qid),rev=await latest(db,item.qid);if((rev?.version||0)!==base.baseVersion||!same(src.hashes,base.sourceHashes))fail(409,`${item.qid}: draft or source changed; export a fresh diagnosis packet`);
      const diagnosis=validateDiagnosis(item.diagnosis);prepared.push({qid:item.qid,baseVersion:base.baseVersion,diagnosis:{...diagnosis,pass:packet.mode}});
    }
    const fingerprint=await digest(b.raw);if(path.endsWith('/preview'))return json({fingerprint,packetId:result.packetId,questions:prepared});
    if(b.confirm!=='APPLY DIAGNOSIS ONLY'||b.fingerprint!==fingerprint)fail(400,'Preview this exact diagnosis and explicitly confirm');
    if(provider==='codex')await requirePendingInbox(db,b);
    const id=crypto.randomUUID(),at=new Date().toISOString();const statements=[db.prepare('INSERT INTO wb_imports VALUES (?, ?, ?, ?)').bind(id,actorLabel,at,JSON.stringify({provider,kind:'diagnosis',raw:b.raw,packetId:result.packetId,fingerprint}))];
    for(const q of prepared){const base=packet.questions.find(item=>item.qid===q.qid);statements.push(db.prepare('INSERT INTO wb_diagnostics VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(crypto.randomUUID(),q.qid,actorLabel,at,result.packetId,q.baseVersion,JSON.stringify(base.sourceHashes),JSON.stringify(q.diagnosis)));}
    if(provider==='codex'&&b.inboxId){
      statements.push(db.prepare('INSERT INTO wb_codex_applied VALUES (?, ?, ?)').bind(b.inboxId,id,at));
      statements.push(db.prepare("UPDATE wb_codex_inbox SET status = 'APPLIED' WHERE id = ?").bind(b.inboxId));
    }
    try{await db.batch(statements);}catch(e){if(/UNIQUE|constraint/i.test(String(e)))fail(409,'Concurrent change: diagnosis was not stored');throw e;}
    return json({id,questions:prepared.map(q=>q.qid)},201);
  }
  if (!['/api/workbench/gemini/preview','/api/workbench/gemini/apply'].includes(path) || request.method !== 'POST') return null;
  const b = await body(request);
  if (typeof b.raw !== 'string' || b.raw.length > 900000) fail(400,'Import must be JSON text under 900 KB');
  let result;
  try { result = parseGeminiResponse(b.raw).data; } catch (e) { fail(400,e.message); }
  if (result?.schemaVersion !== 1 || result.kind !== 'analog-bibles-gemini-result' || result.mode === 'diagnosis' || typeof result.packetId !== 'string' || !Array.isArray(result.questions) || !result.questions.length || result.questions.length > 10) fail(400,'Invalid Gemini result schema');
  const row = await db.prepare('SELECT payload FROM wb_packets WHERE id = ?').bind(result.packetId).first();
  if (!row) fail(400,'找不到对应修订任务包。请使用当前本地环境下载的任务包及原 result-template.json，不要改 packetId。');
  const packet = JSON.parse(row.payload), seen = new Set(), prepared = [];
  if(packet.mode&&packet.mode!=='revision')fail(409,'Diagnostic and verification packets cannot change answers');
  for (const item of result.questions) {
    if(!item || typeof item !== 'object' || Array.isArray(item)) fail(400,'Each result question must be an object');
    const base = packet.questions.find(q => q.qid === item.qid);
    if (!base || seen.has(item.qid)) fail(400,'Duplicate or out-of-scope question ID');
    seen.add(item.qid);
    if (Object.keys(item).some(k=>!['qid','baseVersion','sourceHashes','files','findings'].includes(k))) fail(400,'Unknown result field; approval, status and paths cannot be imported');
    if (!same(item.sourceHashes,base.sourceHashes) || item.baseVersion !== base.baseVersion) fail(409,`${item.qid}: packet base was altered`);
    const src = await source(env,request,item.qid), rev = await latest(db,item.qid);
    if ((rev?.version||0) !== base.baseVersion || !same(src.hashes,base.sourceHashes)) fail(409,`${item.qid}: draft or source changed since packet export. Export a fresh packet; nothing was imported`);
    if (rev?.payload.approval) fail(409,`${item.qid}: already approved; explicitly revise before importing a replacement`);
    validateFiles(item.files,src);
    if (typeof item.findings !== 'string' || item.findings.length > 20000) fail(400,'Each question needs findings text (up to 20000 characters)');
    const changed = Object.keys(item.files).filter(n=>item.files[n]!==base.files[n]);
    prepared.push({qid:item.qid,baseVersion:base.baseVersion,changed,before:base.files,files:item.files,quality:solutionQuality(src,item.files),findings:item.findings,src,note:rev?.payload.note||''});
  }
  const fingerprint = await digest(b.raw);
  if (path.endsWith('/preview')) return json({fingerprint,packetId:packet.packetId,questions:prepared.map(({src,note,...q})=>q)});
  if (b.confirm !== 'APPLY CANDIDATES ONLY' || b.fingerprint !== fingerprint) fail(400,'Preview this exact response and explicitly confirm candidate import');
  if(provider==='codex')await requirePendingInbox(db,b);
  const id = crypto.randomUUID(), createdAt = new Date().toISOString();
  const statements = [db.prepare('INSERT INTO wb_imports VALUES (?, ?, ?, ?)').bind(id,actorLabel,createdAt,JSON.stringify({provider,raw:b.raw,packetId:packet.packetId,fingerprint}))];
  for (const q of prepared) {
    const payload = {source:q.src,files:q.files,status:'IN_REVIEW',note:q.note,discussion:false,approval:null,receipts:{},provenance:{kind:provider,importId:id,packetId:packet.packetId,inboxId:provider==='codex'?b.inboxId||null:null,findings:q.findings}};
    statements.push(db.prepare('INSERT INTO wb_revisions VALUES (?, ?, ?, ?, ?, ?)').bind(q.qid,q.baseVersion+1,`${id}-${q.qid}`,actorLabel,createdAt,JSON.stringify(payload)));
  }
  if(provider==='codex'&&b.inboxId){
    statements.push(db.prepare('INSERT INTO wb_codex_applied VALUES (?, ?, ?)').bind(b.inboxId,id,createdAt));
    statements.push(db.prepare("UPDATE wb_codex_inbox SET status = 'APPLIED' WHERE id = ?").bind(b.inboxId));
  }
  // D1 batch is transactional: a concurrent revision conflicts on (qid,version), rolling back ALL rows.
  try { await db.batch(statements); }
  catch (e) { if (/UNIQUE|constraint/i.test(String(e))) fail(409,'Concurrent change: entire import rolled back; export a fresh packet'); throw e; }
  return json({id,questions:prepared.map(q=>({qid:q.qid,version:q.baseVersion+1}))},201);
}
