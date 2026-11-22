// Low-level handoff for an already-created Codex result JSON.
// It stages the result in the local inbox; it never applies or approves it.
import fs from 'node:fs/promises';
const origin=process.env.WORKBENCH_ORIGIN||'http://127.0.0.1:8787';
const file=process.argv[2];
if(!file)throw new Error('Usage: node site/codex-submit.mjs .wrangler/codex-work/R013-result.json [label]');
const raw=await fs.readFile(file,'utf8'),admin=JSON.parse(await fs.readFile('.wrangler/workbench-admin.json','utf8'));
const url=new URL(origin);if(url.protocol!=='http:'||!['127.0.0.1','localhost','[::1]'].includes(url.hostname)||url.pathname!=='/'||url.username||url.password||url.search||url.hash)throw new Error('Only local loopback WORKBENCH_ORIGIN is allowed');
const headers={origin:url.origin,'content-type':'application/json','x-workbench-request':'1'};
const login=await fetch(url.origin+'/api/workbench/local-login',{method:'POST',headers,body:JSON.stringify({key:admin.key}),redirect:'error'});
if(!login.ok)throw new Error(`Local login failed (${login.status}): ${await login.text()}`);
headers.cookie=login.headers.get('set-cookie')?.split(';')[0];if(!headers.cookie)throw new Error('Local login did not return a session cookie');
const response=await fetch(url.origin+'/api/workbench/codex/inbox',{method:'POST',headers,body:JSON.stringify({raw,label:process.argv[3]||file}),redirect:'error'});
const text=await response.text();if(!response.ok)throw new Error(`Codex handoff rejected (${response.status}): ${text}`);
console.log(text);
