import { validMutation } from './workbench-auth.mjs';
import { json } from './workbench.mjs';
const cookieName = 'wb_local_session';
const hex = bytes => [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,'0')).join('');
async function sign(value, secret) {
  const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  return hex(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(value)));
}
async function equal(a,b){
  const hash=async s=>new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
  const x=await hash(a),y=await hash(b);let diff=0;for(let i=0;i<x.length;i++)diff|=x[i]^y[i];return diff===0;
}
export async function localIdentity(request,env) {
  if(typeof env.LOCAL_ADMIN_KEY!=='string'||env.LOCAL_ADMIN_KEY.length<32)return null;
  const token=request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(cookieName+'='))?.slice(cookieName.length+1)||'';
  const [expires,signature]=token.split('.');
  if(!/^\d+$/.test(expires)||Number(expires)<Date.now()||Number(expires)>Date.now()+8*3600000)return null;
  if(!signature||!await equal(signature,await sign(expires,env.LOCAL_ADMIN_KEY)))return null;
  return {sub:'local-developer',email:env.LOCAL_ADMIN_EMAIL||'local-admin@example.invalid',local:true};
}
export async function localLogin(request,env) {
  const path=new URL(request.url).pathname;
  if(!['/api/workbench/local-login','/api/workbench/local-logout'].includes(path))return null;
  if(request.method!=='POST'||!validMutation(request))return json({error:'Same-origin POST required'},403);
  if(typeof env.LOCAL_ADMIN_KEY!=='string'||env.LOCAL_ADMIN_KEY.length<32)return json({error:'Local login is not configured. Use npm run workbench:dev.'},503);
  if(path.endsWith('/local-logout'))return new Response('{}',{headers:{'content-type':'application/json','cache-control':'no-store','set-cookie':`${cookieName}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`}});
  // Bounded stream so a local unauthenticated client cannot allocate an arbitrary body.
  const reader=request.body?.getReader();if(!reader)return json({error:'Key required'},400);
  let text='',size=0;for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>1024){await reader.cancel();return json({error:'Body too large'},413);}text+=new TextDecoder().decode(value);}
  let data;try{data=JSON.parse(text);}catch{return json({error:'Invalid JSON'},400);}
  if(typeof data?.key!=='string'||!await equal(data.key,env.LOCAL_ADMIN_KEY))return json({error:'本地管理员密钥不正确'},401);
  const expires=String(Date.now()+8*3600000),signature=await sign(expires,env.LOCAL_ADMIN_KEY);
  return new Response('{}',{headers:{'content-type':'application/json','cache-control':'no-store','set-cookie':`${cookieName}=${expires}.${signature}; Path=/; HttpOnly; SameSite=Strict; Max-Age=28800`}});
}
