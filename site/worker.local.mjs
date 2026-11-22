// Local-only entry point. Never imported by the production Worker.
import worker from './worker.js';
import { workbench } from './workbench.mjs';
import { localIdentity, localLogin } from './workbench-local-auth.mjs';
export { AnalyticsDO } from './analytics.js';
export default { async fetch(request, env) {
  const host = new URL(request.url).hostname;
  const local = ['localhost','127.0.0.1','[::1]'].includes(host);
  if (!local) return new Response('Local development only', { status:403 });
  const login = await localLogin(request,env);
  if(login)return login;
  const actor = await localIdentity(request,env);
  if(/^\/review\/?$/.test(new URL(request.url).pathname)&&request.method==='GET'&&!actor){
    const page=await env.ASSETS.fetch(new Request(new URL('/workbench-login.html',request.url)));
    return new Response(page.body,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'"}});
  }
  const r = await workbench(request,env,async () => actor);
  return r || worker.fetch(request,env);
} };
