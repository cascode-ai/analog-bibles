import { test } from 'node:test';
import assert from 'node:assert/strict';
import { workbench } from './workbench.mjs';
import { database, assets, request, completeFixture } from './test-workbench-db.mjs';
import { localLogin, localIdentity } from './workbench-local-auth.mjs';
import { diffText } from './public/workbench-diff.js';
import { parseGeminiResponse } from './public/workbench-import.js';
import { validateFiles, changeSignals } from './workbench-model.mjs';
const actor=async()=>({email:'test@example.com',sub:'test'});
test('Gemini import explains missing metadata and accepts a single JSON code fence',()=>{
  for(const [raw,pattern] of [['',/请先粘贴/],['{',/语法错误/],['[]',/不能只返回题目数组/],['{"questions":[]}',/schemaVersion、kind、packetId/]])assert.throws(()=>parseGeminiResponse(raw),pattern);
  const data={schemaVersion:1,kind:'analog-bibles-gemini-diagnosis',mode:'verification',packetId:'test-packet',questions:[{qid:'R011',baseVersion:0,sourceHashes:{},diagnosis:{}}]};
  const parsed=parseGeminiResponse('```json\n'+JSON.stringify(data)+'\n```');assert.equal(parsed.diagnostic,true);assert.deepEqual(JSON.parse(parsed.raw),data);
  assert.throws(()=>parseGeminiResponse('explanation\n'+JSON.stringify(data)),/语法错误/);
  assert.throws(()=>parseGeminiResponse(JSON.stringify({...data,questions:[{qid:'R011'}]})),/baseVersion、sourceHashes、diagnosis/);
});
function fixture(t){const db=database(':memory:');t.after(()=>db.close());const env={DB:db,ASSETS:assets()};return {db,env,call:(route,data)=>workbench(request('/api/workbench'+route,data),env,actor,async()=>Response.json({sha:(await (await assets().fetch(request('/workbench-source/R011.json'))).json()).commit}))};}
async function result(call){
  await call('/pilots',{});
  const packet=await(await call('/gemini/packet',{batchId:'pilot-razavi-11'})).json();
  return {packet,data:{schemaVersion:1,kind:'analog-bibles-gemini-result',packetId:packet.packetId,questions:packet.questions.slice(0,2).map(q=>({qid:q.qid,baseVersion:q.baseVersion,sourceHashes:q.sourceHashes,files:{...q.files,'golden_solution.zh.md':q.files['golden_solution.zh.md']+'\n测试修订\n'},findings:'Test fixture only — not a real Gemini review'}))}};
}
test('Gemini pilot packets, strict import, preserved provenance, conflicts and no implicit approval',async t=>{
  const {call,db}=fixture(t);const {packet,data}=await result(call);
  assert.equal(packet.questions.length,10);assert.equal(packet.questions[0].qid,'R011');assert.equal(packet.questions.at(-1).qid,'R020');
  await call('/pilots',{});assert.equal((await(await call('/batches')).json()).length,2,'idempotent pilot setup');
  const packet2=await(await call('/gemini/packet',{batchId:'pilot-razavi-21'})).json();assert.equal(packet2.questions.at(-1).qid,'R030');
  for(const mutate of [d=>d.questions.push(d.questions[0]),d=>d.questions[0].qid='R007',d=>d.questions[0].files['../instruction.md']='evil',d=>d.questions[0].approval='APPROVED',d=>d.questions[0].files['golden_solution.md']='missing headings']){
    const bad=structuredClone(data);mutate(bad);assert.equal((await call('/gemini/preview',{raw:JSON.stringify(bad)})).status,400);
  }
  const raw=JSON.stringify(data),preview=await(await call('/gemini/preview',{raw})).json();
  assert.deepEqual(preview.questions[0].changed,['golden_solution.zh.md']);
  assert.equal((await call('/gemini/apply',{raw,fingerprint:'wrong',confirm:'APPLY CANDIDATES ONLY'})).status,400);
  const applied=await call('/gemini/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY CANDIDATES ONLY'});assert.equal(applied.status,201);
  for(const q of data.questions){const saved=await(await call('/questions/'+q.qid)).json();assert.equal(saved.revision.payload.status,'IN_REVIEW');assert.equal(saved.revision.payload.approval,null);assert.deepEqual(saved.revision.payload.receipts,{});assert.equal(saved.revision.payload.provenance.findings,q.findings);}
  assert.equal((await call('/gemini/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY CANDIDATES ONLY'})).status,409);
  const imported=await db.prepare('SELECT payload FROM wb_imports').all();assert.equal(JSON.parse(imported.results[0].payload).raw,raw);
});
test('Gemini stale multi-question import writes nothing; D1 batch conflict rolls back every row',async t=>{
  const {call,db,env}=fixture(t);const {data}=await result(call),raw=JSON.stringify(data);
  const preview=await(await call('/gemini/preview',{raw})).json();
  const q=await(await call('/questions/R012')).json();
  await call('/questions/R012',{version:0,requestId:crypto.randomUUID(),sourceHashes:q.source.hashes,files:data.questions[1].files,note:'new human draft',action:'save'});
  assert.equal((await call('/gemini/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY CANDIDATES ONLY'})).status,409);
  assert.equal((await(await call('/questions/R011')).json()).revision,null);
  assert.equal((await db.prepare('SELECT * FROM wb_imports').all()).results.length,0);
  const fresh=await(await call('/gemini/packet',{batchId:'pilot-razavi-11'})).json();
  data.packetId=fresh.packetId;data.questions[1].baseVersion=1;
  const updated=JSON.stringify(data),p=await(await call('/gemini/preview',{raw:updated})).json();
  env.DB={prepare:db.prepare,batch:async statements=>{
    await db.prepare('INSERT INTO wb_revisions VALUES (?, ?, ?, ?, ?, ?)').bind('R012',2,crypto.randomUUID(),'racing reviewer',new Date().toISOString(),JSON.stringify({files:data.questions[1].files})).run();
    return db.batch(statements);
  }};
  assert.equal((await call('/gemini/apply',{raw:updated,fingerprint:p.fingerprint,confirm:'APPLY CANDIDATES ONLY'})).status,409);
  assert.equal((await db.prepare('SELECT * FROM wb_revisions WHERE qid = ?').bind('R011').all()).results.length,0,'earlier insert rolled back');
  assert.equal((await db.prepare('SELECT * FROM wb_imports').all()).results.length,0,'raw import record rolled back');
});
test('source hash changes reject Gemini import; key order is not a conflict',async t=>{
  const {call,env}=fixture(t);const {data}=await result(call);
  data.questions[0].sourceHashes=Object.fromEntries(Object.entries(data.questions[0].sourceHashes).reverse());
  assert.equal((await call('/gemini/preview',{raw:JSON.stringify(data)})).status,200);
  const original=env.ASSETS;env.ASSETS={fetch:async req=>{const response=await original.fetch(req);if(new URL(req.url).pathname==='/workbench-source/R011.json'){const source=await response.json();source.hashes['instruction.md']='0'.repeat(64);return Response.json(source);}return response;}};
  assert.equal((await call('/gemini/preview',{raw:JSON.stringify(data)})).status,409);
});
test('local login requires key, origin and HttpOnly session; production cannot use local cookie',async()=>{
  const env={LOCAL_ADMIN_KEY:'x'.repeat(43)};
  assert.equal(await localIdentity(request('/review'),env),null);
  assert.equal((await localLogin(request('/api/workbench/local-login',{key:env.LOCAL_ADMIN_KEY},{origin:'https://evil.test'}),env)).status,403);
  assert.equal((await localLogin(request('/api/workbench/local-login',{key:'wrong'}),env)).status,401);
  const login=await localLogin(request('/api/workbench/local-login',{key:env.LOCAL_ADMIN_KEY}),env);
  assert.equal(login.status,200);const cookie=login.headers.get('set-cookie');assert.match(cookie,/HttpOnly; SameSite=Strict/);
  const req=request('/api/workbench/session',undefined,{cookie:cookie.split(';')[0]});assert.equal((await localIdentity(req,env)).local,true);
  assert.equal((await workbench(req,env)).status,401);
  assert.equal(await localIdentity(req,{LOCAL_ADMIN_KEY:'y'.repeat(43)}),null);
});
test('diff shows independent changes and handles large text with bounded work',()=>{
  const diff=diffText('a\nb\nc\nd','a\nB\nc\nD');assert.match(diff,/- b\n\+ B\n  c\n- d\n\+ D/);
  assert.equal(diffText('a','a'),'无差异');assert.ok(diffText('x\n'.repeat(1000),'y\n'.repeat(1000)).length>1000);
});
test('diagnostic pass stores triage without changing drafts or approval',async t=>{
  const {call,db}=fixture(t);await call('/pilots',{});
  const packet=await(await call('/gemini/packet',{batchId:'pilot-razavi-11',mode:'diagnosis'})).json();
  assert.equal(packet.kind,'analog-bibles-gemini-diagnostic-packet');assert.equal(packet.mode,'diagnosis');
  const q=packet.questions[0];
  const diagnosis={risk:'HIGH',disposition:'PATCH',confidence:.8,claimsChanged:false,missingSteps:['补充边界条件'],focus:['检查 PMOS 工作区'],checks:['逐项核对图像'],summary:'已有结论，推导缺少关键条件。'};
  const raw=JSON.stringify({schemaVersion:1,kind:'analog-bibles-gemini-diagnosis',mode:'diagnosis',packetId:packet.packetId,questions:[{qid:q.qid,baseVersion:q.baseVersion,sourceHashes:q.sourceHashes,diagnosis}]});
  const preview=await(await call('/gemini/diagnosis/preview',{raw})).json();assert.equal(preview.questions[0].diagnosis.risk,'HIGH');
  assert.equal((await call('/gemini/diagnosis/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY DIAGNOSIS ONLY'})).status,201);
  const triage=await(await call('/triage?batchId=pilot-razavi-11')).json();assert.equal(triage[0].risk,'HIGH');assert.equal(triage[0].changedFileCount,0);assert.equal(triage[0].disposition,'PATCH');
  const qstate=await(await call('/questions/R011')).json();assert.equal(qstate.revision,null);
  assert.equal((await db.prepare('SELECT * FROM wb_diagnostics').all()).results.length,1);
  const bad=JSON.stringify({schemaVersion:1,kind:'analog-bibles-gemini-diagnosis',mode:'diagnosis',packetId:packet.packetId,questions:[{qid:q.qid,baseVersion:q.baseVersion,sourceHashes:q.sourceHashes,diagnosis:{...diagnosis,disposition:'APPROVE'}}]});
  assert.equal((await call('/gemini/diagnosis/preview',{raw:bad})).status,400);
});
test('incremental approval covers only changed bilingual solution files',async t=>{
  const {call}=fixture(t);await call('/pilots',{});const source=await(await call('/questions/R011')).json();
  const files={...Object.fromEntries(Object.entries(source.source.files).filter(([n])=>/^(golden_solution|detailed_solution)(\.zh)?\.md$/.test(n)))};
  files['detailed_solution.md']+='\n补充一个人工核对的推导步骤。\n';
  const completedFiles=completeFixture(source.source,files);Object.assign(files,completedFiles);
  let r=await call('/questions/R011',{version:0,requestId:crypto.randomUUID(),sourceHashes:source.source.hashes,files,note:'补步骤',action:'save'});assert.equal(r.status,201);
  const v1=await(await call('/questions/R011')).json(),ready=await call('/questions/R011',{version:v1.revision.version,requestId:crypto.randomUUID(),sourceHashes:v1.source.hashes,files,note:'补步骤',action:'ready'});assert.equal(ready.status,201);
  let state=await(await call('/questions/R011')).json(),scope=state.scope;
  const required=scope.requiredFiles;assert.ok(required.includes('detailed_solution.md'));assert.ok(required.includes('solution-fixture.svg'));
  for(const name of required){const review=await call('/questions/R011',{version:state.revision.version,requestId:crypto.randomUUID(),sourceHashes:state.source.hashes,files,note:'补步骤',action:'review',reviewFile:name,reviewHash:scope.hashes[name],fingerprint:scope.fingerprint});assert.equal(review.status,201);state=await(await call('/questions/R011')).json();scope=state.scope;}
  const partial=await call('/questions/R011',{version:state.revision.version,requestId:crypto.randomUUID(),sourceHashes:state.source.hashes,files,note:'补步骤',action:'approveRevision',scopeFiles:required,confirm:'APPROVE REVIEWED REVISION',dependencyConfirmed:true});assert.equal(partial.status,201);
  const approved=await(await call('/questions/R011')).json();assert.equal(approved.revision.payload.approval.status,'APPROVED_REVISION');
  const exported=await call('/export',{ids:['R011']});assert.equal(exported.status,200);const output=await exported.json();assert.deepEqual(output.records,{});assert.equal(output.revisionApprovals.R011.status,'APPROVED_REVISION');assert.ok(output.files['razavi/R011/solution-fixture.svg']);assert.ok(output.files['razavi/R011/detailed_solution.md']);
  const changedFiles={...files,'detailed_solution.zh.md':files['detailed_solution.zh.md']+'\nchanged'};
  const altered=await call('/questions/R011',{version:approved.revision.version,requestId:crypto.randomUUID(),sourceHashes:approved.source.hashes,files:changedFiles,note:'Edit after revision approval',action:'save'});assert.equal(altered.status,201);
  assert.equal((await call('/export',{ids:['R011']})).status,409);
});
test('missing detailed solutions can be added; original files cannot be removed or overwritten',()=>{
  const src={files:{'golden_solution.md':'## Reference answer\n$1$\n## Grading notes\nA','golden_solution.zh.md':'答案'}};
  const candidate={...src.files,'detailed_solution.md':'Added steps $1$','detailed_solution.zh.md':'新增步骤 $1$'};
  assert.doesNotThrow(()=>validateFiles(candidate,src));
  assert.throws(()=>validateFiles({...candidate,'instruction.md':'changed'},src));
  assert.throws(()=>validateFiles({'golden_solution.md':candidate['golden_solution.md']},src));
  assert.deepEqual(changeSignals(src,candidate).addedFiles,['detailed_solution.md','detailed_solution.zh.md']);
  assert.equal(changeSignals(src,candidate).referenceChanged,false);
});
test('diagnosis cannot mutate answers and source/version changes invalidate its use',async t=>{
  const {call}=fixture(t);await call('/pilots',{});
  const packet=await(await call('/gemini/packet',{batchId:'pilot-razavi-11',mode:'diagnosis',ids:['R011']})).json();
  const q=packet.questions[0],diagnosis={risk:'MEDIUM',disposition:'PATCH',confidence:.8,claimsChanged:false,missingSteps:['derive'],focus:['units'],checks:['test'],summary:'fixture: a missing step'};
  const data={schemaVersion:1,kind:'analog-bibles-gemini-diagnosis',mode:'diagnosis',packetId:packet.packetId,questions:[{qid:q.qid,baseVersion:0,sourceHashes:q.sourceHashes,diagnosis}]};
  const raw=JSON.stringify(data),preview=await(await call('/gemini/diagnosis/preview',{raw})).json();
  assert.equal((await call('/gemini/diagnosis/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY DIAGNOSIS ONLY'})).status,201);
  const revisions=await(await call('/gemini/packet',{batchId:'pilot-razavi-11',ids:['R011']})).json();assert.equal(revisions.questions.length,1);assert.equal(revisions.questions[0].diagnosis.risk,'MEDIUM');
  const verification=await(await call('/gemini/packet',{batchId:'pilot-razavi-11',mode:'verification',qid:'R011'})).json();assert.equal(verification.questions[0].diagnosis,null,'independent checker gets no previous judgement');
  const forged={schemaVersion:1,kind:'analog-bibles-gemini-result',packetId:packet.packetId,questions:[{qid:q.qid,baseVersion:0,sourceHashes:q.sourceHashes,files:q.files,findings:'bypass'}]};
  assert.equal((await call('/gemini/preview',{raw:JSON.stringify(forged)})).status,409);
  assert.equal((await call('/questions/R011',{version:0,requestId:crypto.randomUUID(),sourceHashes:q.sourceHashes,files:{...q.files,'detailed_solution.md':q.files['detailed_solution.md']+'\nupdated'},note:'human edit',action:'save'})).status,201);
  assert.equal((await call('/gemini/diagnosis/apply',{raw,fingerprint:preview.fingerprint,confirm:'APPLY DIAGNOSIS ONLY'})).status,409);
  const triage=await(await call('/triage?batchId=pilot-razavi-11')).json();assert.equal(triage[0].risk,'UNASSESSED');
});
