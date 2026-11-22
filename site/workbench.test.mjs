import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { workbench, parseReport } from './workbench.mjs';
import { authenticate } from './workbench-auth.mjs';
import worker from './worker.js';
import { candidateScope } from './workbench-model.mjs';
import { archive } from './public/workbench-archive.js';
const identity=async()=>({email:'reviewer@example.com',sub:'test-admin'});
import { database, assets, request, completeFixture } from './test-workbench-db.mjs';
test('JWT validates signature, issuer, audience, expiry and explicit admin allowlist',async()=>{
  const pair=await crypto.subtle.generateKey({name:'RSASSA-PKCS1-v1_5',modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:'SHA-256'},true,['sign','verify']);
  const jwk={...await crypto.subtle.exportKey('jwk',pair.publicKey),kid:'test'};
  const env={ACCESS_ISSUER:'https://workbench-test.cloudflareaccess.com',ACCESS_AUD:'app',ADMIN_EMAILS:'reviewer@example.com'};
  const claims={iss:env.ACCESS_ISSUER,aud:['app'],sub:'id',email:'reviewer@example.com',iat:Math.floor(Date.now()/1000),exp:Math.floor(Date.now()/1000)+600};
  const encode=x=>Buffer.from(JSON.stringify(x)).toString('base64url');
  async function auth(change={},tamper=false){const data=encode({alg:'RS256',kid:'test'})+'.'+encode({...claims,...change});const sig=Buffer.from(await crypto.subtle.sign('RSASSA-PKCS1-v1_5',pair.privateKey,Buffer.from(data))).toString('base64url');return authenticate(request('/review',undefined,{'Cf-Access-Jwt-Assertion':data+'.'+(tamper?'bad':sig)}),env,async()=>Response.json({keys:[jwk]}));}
  assert.equal((await auth()).sub,'id');
  for(const change of [{aud:['other']},{iss:'https://evil.test'},{exp:0},{iat:Date.now()},{email:'visitor@example.com'},{sub:''}])assert.equal(await auth(change),null);
  assert.equal(await auth({},true),null);assert.equal(await authenticate(request('/review'),env),null);
});
test('real SQLite persistence, version conflicts, report import, approval invalidation and export',async t=>{
  const directory=fs.mkdtempSync(path.join(os.tmpdir(),'ab-workbench-')),filename=path.join(directory,'drafts.sqlite');
  let db=database(filename);t.after(()=>{db.close();fs.rmSync(directory,{recursive:true,force:true});});const env={DB:db,ASSETS:assets()};
  const call=async(route,value,auth=identity)=>workbench(request('/api/workbench'+route,value),env,auth,async()=>Response.json({sha:JSON.parse(fs.readFileSync('dist/workbench-source/R007.json','utf8')).commit}));
  for(const route of ['/session','/questions/R007','/reports','/export'])assert.equal((await call(route,undefined,async()=>null)).status,401);
  assert.equal((await workbench(request('/review'),env,async()=>null)).status,401);
  assert.equal((await workbench(request('/api/workbench/batches',{}, {origin:'https://evil.test'}),env,identity)).status,403);
  const batch=await call('/batches',{book:'razavi',from:'R001',to:'R010'});assert.equal(batch.status,201);assert.equal(JSON.parse((await batch.json()).payload).ids.length,10);
  const raw=Array.from({length:10},(_,i)=>`## R${String(i+1).padStart(3,'0')}\n### Findings\nCheck $I_D$.\n`).join('\n');
  const report=await(await call('/reports',{raw})).json();assert.equal(JSON.parse(report.payload).items.length,10);
  assert.equal(parseReport('No recognized heading',new Set()).at(0).qid,null);
  const source=(await(await call('/questions/R007')).json()).source;
  const files=completeFixture(source,Object.fromEntries(Object.entries(source.files).filter(([n])=>/^(golden_solution|detailed_solution)(\.zh)?\.md$/.test(n))));
  files['golden_solution.md']+='\nTest revision.\n';
  const payload={version:0,requestId:crypto.randomUUID(),sourceHashes:source.hashes,files,note:'Human test note',action:'save'};
  let response=await call('/questions/R007',payload);assert.equal(response.status,201);
  assert.equal((await call('/questions/R007',payload)).status,200,'idempotent replay');
  assert.equal((await call('/questions/R007',{...payload,requestId:crypto.randomUUID()})).status,409);
  db.close();db=database(filename);env.DB=db;
  assert.equal((await(await call('/questions/R007')).json()).revision.payload.files['golden_solution.md'],files['golden_solution.md']);
  const update=async(version,action,extra={})=>call('/questions/R007',{...payload,version,action,requestId:crypto.randomUUID(),...extra});
  assert.equal((await update(1,'approve')).status,409);
  assert.equal((await update(1,'ready')).status,201);
  assert.equal((await update(2,'approve',{scopeFiles:['golden_solution.md'],confirm:'APPROVE ENTIRE QUESTION'})).status,400);
  const fullScope={scopeFiles:Object.keys((await candidateScope(source,files)).hashes),confirm:'APPROVE ENTIRE QUESTION'};
  assert.equal((await update(2,'approve',fullScope)).status,409,'checkbox list alone is insufficient');
  let version=2; const scope=await candidateScope(source,files);
  for(const name of Object.keys(scope.hashes)){assert.equal((await update(version++,'review',{reviewFile:name,reviewHash:scope.hashes[name],fingerprint:scope.fingerprint})).status,201);}
  assert.equal((await update(version++,'approve',fullScope)).status,201);
  const exported=await call('/export',{ids:['R007']});assert.equal(exported.status,200);assert.ok((await exported.json()).files['razavi/R007/golden_solution.md']);
  assert.equal((await call('/export',{ids:['R008']})).status,409);
  const revised={...files,'golden_solution.md':files['golden_solution.md']+'Changed again\n'};
  response=await update(version++,'save',{files:revised});assert.equal((await response.json()).payload.status,'STALE');assert.equal((await call('/export',{ids:['R007']})).status,409);
  const race=await Promise.all([update(version,'save'),update(version,'save')]);assert.deepEqual(race.map(r=>r.status).sort(),[201,409]);
  version++;
  const stale={...source.hashes,'instruction.md':'0'.repeat(64)};
  assert.equal((await update(version,'save',{sourceHashes:stale})).status,409);
  assert.equal((await update(version,'save',{files:{...files,'../secret':'evil'}})).status,400);
  assert.equal((await(await call('/questions/R007/history')).json()).length,version);
});

test('production routes reject missing identities and shared REVIEW_KEY; archive preserves Markdown bytes',async()=>{
  const env={DB:{prepare(){throw new Error('Unauthenticated request reached storage');}},ASSETS:assets(),REVIEW_KEY:'shared-key'};
  for(const route of ['/review','/api/workbench/session','/api/workbench/questions/R007','/api/workbench/reports','/api/workbench/export','/api/reviews']){
    for(const method of ['GET','POST']){
      const req=request(route,method==='POST'?{}:undefined,{'x-review-key':'shared-key'});
      assert.equal((await worker.fetch(req,env)).status,401);
    }
  }
  const markdown='## Reference answer\n\n中文公式 $I_D$\n';
  const blob=archive({files:{'razavi/R007/golden_solution.md':markdown},records:{},changes:[]});
  const bytes=new Uint8Array(await blob.arrayBuffer());
  assert.equal(new TextDecoder().decode(bytes.slice(0,30)).replace(/\0/g,''),'razavi/R007/golden_solution.md');
  const length=parseInt(new TextDecoder().decode(bytes.slice(124,135)),8);
  assert.equal(new TextDecoder().decode(bytes.slice(512,512+length)),markdown);
});

 test('workbench index requires authentication and rejects HTML asset fallbacks',async()=>{
  const env={ASSETS:assets()};
  const req=request('/api/workbench/index');
  assert.equal((await workbench(req,env,async()=>null)).status,401);
  const ok=await workbench(req,env,identity);
  assert.equal(ok.status,200);
  const entries=await ok.json();
  assert.ok(entries.some(q=>q.id==='R007'));
  assert.equal(entries.some(q=>'t' in q),false);
  const fallback=await workbench(req,{ASSETS:{fetch:async()=>new Response('<!doctype html><html></html>')}},identity);
  assert.equal(fallback.status,503);
  assert.match((await fallback.json()).error,/Source assets unavailable/);
 });
