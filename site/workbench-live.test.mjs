// Real Wrangler + isolated local D1. Run after npm run build, never against user state.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';
import {completeFixture} from './test-workbench-db.mjs';
import { startBrowser } from './test-browser.mjs';
const root=process.cwd(),dir=fs.mkdtempSync(path.join(root,'.wrangler/live-test-'));
const config=JSON.parse(fs.readFileSync('wrangler.workbench-local.jsonc','utf8'));
config.main=path.join(root,'site/worker.local.mjs');config.assets.directory=path.join(root,'dist');
const configPath=path.join(dir,'config.json'),state=path.join(dir,'state');
fs.writeFileSync(configPath,JSON.stringify(config));
const key=randomBytes(32).toString('base64url');fs.writeFileSync(path.join(dir,'.dev.vars'),`LOCAL_ADMIN_KEY=${key}\n`);
const wrangler=path.join(root,'node_modules/wrangler/bin/wrangler.js');
function command(args){return new Promise((resolve,reject)=>{const child=spawn(process.execPath,[wrangler,...args],{cwd:root,windowsHide:true,env:{...process.env,WRANGLER_SEND_METRICS:'false'},stdio:['ignore','pipe','pipe']});let log='';child.stdout.on('data',x=>log+=x);child.stderr.on('data',x=>log+=x);child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(new Error(log.replaceAll(key,'[redacted]'))));});}
for(const name of fs.readdirSync('site/migrations').filter(n=>n.endsWith('.sql')).sort())await command(['d1','execute','workbench-local','--local','--config',configPath,'--persist-to',state,'--file',`site/migrations/${name}`]);
const server=spawn(process.execPath,[wrangler,'dev','--local','--ip','127.0.0.1','--port','8790','--inspector-port','0','--config',configPath,'--persist-to',state],{cwd:root,windowsHide:true,env:{...process.env,WRANGLER_SEND_METRICS:'false'},stdio:['ignore','pipe','pipe']});
let log='',browser;server.stdout.on('data',x=>log+=x);server.stderr.on('data',x=>log+=x);
const origin='http://127.0.0.1:8790';let cookie='';
async function call(route,value,authenticated=true){const r=await fetch(origin+route,{method:value===undefined?'GET':'POST',headers:{...(authenticated?{cookie}:{}),...value===undefined?{}:{origin,'content-type':'application/json','x-workbench-request':'1'}},body:value===undefined?undefined:JSON.stringify(value)});return {response:r,data:await r.json()};}
try{
  let ready=false;for(let i=0;i<150;i++){if(server.exitCode!==null)throw new Error(log.replaceAll(key,'[redacted]'));try{if((await fetch(origin+'/api/workbench/session')).status===401){ready=true;break;}}catch{}await delay(200);}
  assert.ok(ready,'Wrangler starts within 30 seconds');
  assert.equal((await call('/api/workbench/pilots',{},false)).response.status,401);
  const login=await call('/api/workbench/local-login',{key},false);assert.equal(login.response.status,200);cookie=login.response.headers.get('set-cookie').split(';')[0];
  await call('/api/workbench/pilots',{});
  const packet=(await call('/api/workbench/gemini/packet',{batchId:'pilot-razavi-21'})).data;
  assert.equal(packet.questions.length,10);
  const q=packet.questions[0];
  const raw=JSON.stringify({schemaVersion:1,kind:'analog-bibles-gemini-result',packetId:packet.packetId,questions:[{qid:q.qid,baseVersion:q.baseVersion,sourceHashes:q.sourceHashes,files:completeFixture({id:q.qid,files:q.sourceFiles,hashes:q.sourceHashes},{...q.files,'detailed_solution.zh.md':q.files['detailed_solution.zh.md']+'\n本地集成测试夹具，不代表真实审核。\n'}),findings:'Integration fixture, not Gemini output'}]});
  const preview=await call('/api/workbench/gemini/preview',{raw});assert.equal(preview.response.status,200);
  assert.equal((await call('/api/workbench/gemini/apply',{raw,fingerprint:preview.data.fingerprint,confirm:'APPLY CANDIDATES ONLY'})).response.status,201);
  let stateQ=(await call('/api/workbench/questions/R021')).data;
  const diagnostic=(await call('/api/workbench/gemini/packet',{batchId:'pilot-razavi-21',qid:'R021',mode:'verification'})).data;
  const diagnosticRaw=JSON.stringify({schemaVersion:1,kind:'analog-bibles-gemini-diagnosis',mode:'verification',packetId:diagnostic.packetId,questions:[{qid:'R021',baseVersion:stateQ.revision.version,sourceHashes:stateQ.source.hashes,diagnosis:{risk:'MEDIUM',disposition:'REVIEW',confidence:.5,claimsChanged:false,missingSteps:[],focus:['fixture only'],checks:['local D1 integration'],summary:'Independent verification fixture; not a real review'}}]});
  const dp=await call('/api/workbench/gemini/diagnosis/preview',{raw:diagnosticRaw});assert.equal(dp.response.status,200);
  assert.equal((await call('/api/workbench/gemini/diagnosis/apply',{raw:diagnosticRaw,fingerprint:dp.data.fingerprint,confirm:'APPLY DIAGNOSIS ONLY'})).response.status,201);
  const triage=await call('/api/workbench/triage?batchId=pilot-razavi-21');assert.equal(triage.response.status,200);assert.equal(triage.data.find(q=>q.qid==='R021').risk,'MEDIUM');
  assert.equal((await call('/api/workbench/questions/R021')).data.revision.version,stateQ.revision.version,'diagnosis must not change candidate version');
  const update=async(action,extra={})=>{const answer=await call('/api/workbench/questions/R021',{version:stateQ.revision.version,sourceHashes:stateQ.source.hashes,files:stateQ.revision.payload.files,note:'Isolated integration fixture',action,requestId:crypto.randomUUID(),...extra});if(answer.response.ok)stateQ=(await call('/api/workbench/questions/R021')).data;return answer;};
  assert.equal((await update('ready')).response.status,201);
  assert.equal((await update('approve',{scopeFiles:Object.keys(stateQ.scope.hashes),confirm:'APPROVE ENTIRE QUESTION'})).response.status,409);
  for(const name of Object.keys(stateQ.scope.hashes))assert.equal((await update('review',{reviewFile:name,reviewHash:stateQ.scope.hashes[name],fingerprint:stateQ.scope.fingerprint})).response.status,201);
  assert.equal((await update('approve',{scopeFiles:Object.keys(stateQ.scope.hashes),confirm:'APPROVE ENTIRE QUESTION'})).response.status,201);
  assert.equal((await call('/api/workbench/gemini/apply',{raw,fingerprint:preview.data.fingerprint,confirm:'APPLY CANDIDATES ONLY'})).response.status,409);
  assert.equal((await fetch(origin+'/workbench-source/R021.json',{headers:{cookie}})).status,403);
  browser=await startBrowser();await browser.viewport(1440,1000);
  await browser.cdp('Page.navigate',{url:origin+'/review'});
  await browser.waitFor('document.querySelector("#login")?.onsubmit');
  await browser.evaluate(`document.querySelector('#key').value=${JSON.stringify(key)};document.querySelector('#login').requestSubmit()`);
  try{await browser.waitFor('document.querySelector("#identity")?.textContent.includes("local-admin") && document.querySelector("#batches")?.options.length>1 && document.querySelector("#editor")?.readOnly===false && document.querySelector("#editor")?.value.length>50');}
  catch(e){console.log(await browser.evaluate('JSON.stringify({url:location.href,text:document.body.innerText.slice(0,1800)})'));throw e;}
  await browser.evaluate(`document.querySelector('#batches').value='pilot-razavi-21';document.querySelector('#batches').dispatchEvent(new Event('change'))`);
  await browser.waitFor('document.querySelector("#qid")?.textContent==="R022" && document.querySelector("#editor")?.readOnly===false && document.querySelector("#editor")?.value.length>50');
  await browser.evaluate(`[...document.querySelectorAll('#queue button')].find(b=>b.textContent.startsWith('R021 ')).click()`);
  await browser.waitFor('document.querySelector("#status")?.textContent==="APPROVED_PENDING_PUBLISH"');
  await browser.cdp('Page.reload');await browser.waitFor('document.querySelector("#qid")?.textContent==="R021" && document.querySelector("#editor")?.value.length>50');
  const persisted=(await call('/api/workbench/questions/R021')).data;
  assert.match(persisted.revision.payload.files['detailed_solution.zh.md'],/本地集成测试/);
  await browser.screenshot(path.join(dir,'review.png'));
  assert.deepEqual(browser.errors,[]);
  console.log('PASS: real Wrangler/D1 diagnosis, verification, triage, login, packet, atomic import, stale rejection, per-file review, approval, browser reload, private source denial. Isolated state: '+path.relative(root,dir));
}finally{
  if(browser)await browser.close();
  if(process.platform==='win32')spawnSync('taskkill',['/PID',String(server.pid),'/T','/F'],{windowsHide:true,stdio:'ignore'});else server.kill('SIGTERM');
}
