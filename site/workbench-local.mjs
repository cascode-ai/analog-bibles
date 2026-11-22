// Local-only lifecycle. No remote databases, deployments, Git mutations or production vars.
import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';
import { DatabaseSync, backup } from 'node:sqlite';
import { spawn } from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
process.chdir(root);
const local=path.join(root,'.wrangler');fs.mkdirSync(local,{recursive:true});
const mode=process.argv[2]||'dev';
if(!['dev','db','backup'].includes(mode))throw new Error('Use dev, db, or backup');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
async function run(args,env={}){
  return new Promise((resolve,reject)=>{const child=spawn(process.execPath,args,{cwd:root,stdio:'inherit',windowsHide:true,env:{...process.env,WRANGLER_SEND_METRICS:'false',...env}});
    child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(new Error(`Local command exited ${code}`)));
    if(args.includes('dev'))for(const sig of ['SIGINT','SIGTERM'])process.once(sig,()=>child.kill(sig));
  });
}
async function availablePort(){await new Promise((resolve,reject)=>{const server=net.createServer();server.once('error',()=>reject(new Error('127.0.0.1:8787 is already in use. Stop that local service before restarting; no files were replaced.')));server.listen(8787,'127.0.0.1',()=>server.close(resolve));});}
async function snapshotDatabase(){
  const folder=path.join(local,'state/v3/d1/miniflare-D1DatabaseObject');if(!fs.existsSync(folder))return;
  const destination=path.join(local,'workbench-backups',stamp);fs.mkdirSync(destination,{recursive:true});
  for(const name of fs.readdirSync(folder).filter(n=>n.endsWith('.sqlite'))){const db=new DatabaseSync(path.join(folder,name),{readOnly:true});try{await backup(db,path.join(destination,name));}finally{db.close();}}
  console.log(`Local D1 backup: ${path.relative(root,destination)}`);
}
if(mode==='dev')await availablePort();
await snapshotDatabase();
if(mode==='backup')process.exit(0);
const wrangler=path.join(root,'node_modules/wrangler/bin/wrangler.js');
for(const name of fs.readdirSync('site/migrations').filter(n=>n.endsWith('.sql')).sort()){
  await run([wrangler,'d1','execute','workbench-local','--local','--config','wrangler.workbench-local.jsonc','--persist-to',path.join(local,'state'),'--file',`site/migrations/${name}`]);
}
if(mode==='db')process.exit(0);
const keyPath=path.join(local,'workbench-admin.json');
if(!fs.existsSync(keyPath))fs.writeFileSync(keyPath,JSON.stringify({email:'local-admin@example.invalid',key:randomBytes(32).toString('base64url')},null,2),{mode:0o600,flag:'wx'});
const admin=JSON.parse(fs.readFileSync(keyPath,'utf8'));
if(typeof admin.key!=='string'||admin.key.length<32||typeof admin.email!=='string')throw new Error('Invalid local admin configuration');
await run([path.join(root,'site/build.mjs')]);
// A unique immutable asset snapshot keeps npm test/build from disrupting a running review page.
const assets=path.join(local,'workbench-assets',stamp);fs.cpSync(path.join(root,'dist'),assets,{recursive:true});
const config=JSON.parse(fs.readFileSync('wrangler.workbench-local.jsonc','utf8'));
config.main=path.join(root,'site/worker.local.mjs');config.assets.directory=assets;
const runtimeDir=path.join(local,'workbench-runtime');fs.mkdirSync(runtimeDir,{recursive:true});
fs.writeFileSync(path.join(runtimeDir,'config.json'),JSON.stringify(config,null,2));
fs.writeFileSync(path.join(runtimeDir,'.dev.vars'),`LOCAL_ADMIN_KEY=${JSON.stringify(admin.key)}\nLOCAL_ADMIN_EMAIL=${JSON.stringify(admin.email)}\n`,{mode:0o600});
console.log('Local review: http://127.0.0.1:8787/review');
console.log('Login key: .wrangler/workbench-admin.json (key field; never printed to logs)');
await run([wrangler,'dev','--local','--ip','127.0.0.1','--port','8787','--config',path.join(runtimeDir,'config.json'),'--persist-to',path.join(local,'state')]);
