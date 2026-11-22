import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { normalizeLeadIns, drawingRequired } from './public/workbench-quality.js';
export const fixtureSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><title>TEST ONLY</title><desc>Artificial software fixture, not a real audited answer.</desc><path d="M 20 10 L 20 180 L 280 180" fill="none" stroke="black"/><path d="M 20 180 L 280 20" fill="none" stroke="blue"/><text x="260" y="195">V</text><text x="5" y="15">I</text></svg>';
export function completeFixture(src,files){
  files=structuredClone(files);
  for(const n of Object.keys(files))if(n.endsWith('.zh.md'))files[n]=normalizeLeadIns(files[n]);
  if(drawingRequired(src))for(const suffix of ['', '.zh']){const name=`solution-fixture${suffix}.svg`,md=`detailed_solution${suffix}.md`;files[name]=fixtureSvg;files[md]=(files[md]||'')+`\n\n![TEST FIXTURE](/q/${src.id}/${name})\n`;}
  return files;
}
export function database(filename){
  const db=new DatabaseSync(filename);
  for (const migration of fs.readdirSync(new URL('./migrations/',import.meta.url)).sort()) db.exec(fs.readFileSync(new URL('./migrations/'+migration,import.meta.url),'utf8'));
  return { close:()=>db.close(), async batch(statements) {
    db.exec('BEGIN IMMEDIATE');
    try { const results = statements.map(s=>db.prepare(s.sql).run(...s.args)); db.exec('COMMIT'); return results; }
    catch (e) { db.exec('ROLLBACK'); throw e; }
  }, prepare(sql){return {bind(...args){return {sql,args,async first(){return db.prepare(sql).get(...args)||null;},async all(){return {results:db.prepare(sql).all(...args)};},async run(){return db.prepare(sql).run(...args);}};},async all(){return {results:db.prepare(sql).all()};}};} };
}
export function assets(){return {async fetch(req){const url=new URL(req.url);const file=path.resolve('dist','.'+url.pathname);if(!file.startsWith(path.resolve('dist')+path.sep))return new Response('',{status:403});try{return new Response(fs.readFileSync(file));}catch{return new Response('',{status:404});}}};}
export function request(route,value,headers={}){return new Request('http://localhost'+route,{method:value===undefined?'GET':'POST',headers:value===undefined?headers:{origin:'http://localhost','content-type':'application/json','x-workbench-request':'1',...headers},body:value===undefined?undefined:JSON.stringify(value)});}
