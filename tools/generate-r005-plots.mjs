// Offline square-law plots for R005. No runtime or plotting dependencies.
import fs from 'node:fs';
const root = new URL('../razavi/', import.meta.url);
const colors = ['#1565c0','#ad3c00','#087f5b','#7139a2'];
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
const threshold = v => .7+.45*(Math.sqrt(.9+v)-Math.sqrt(.9));
function make(id,zh,panels,notes){
 const height=140+panels.length*360+notes.length*25;
 const a=[];
 const text=(x,y,t,c='#253047',size=15,anchor='start')=>a.push(`<text x="${x}" y="${y}" fill="${c}" font-size="${size}" text-anchor="${anchor}">${esc(t)}</text>`);
 text(30,30,`${id}: ${zh?'体效应与工作区曲线':'body effect and operating regions'}`,'#172033',22);
 text(30,57,zh?'平方律，忽略 CLM；归一化电流单位 V²，归一化跨导单位 V':'Square law, no CLM; normalized current in V², normalized gm in V');
 panels.forEach((p,i)=>{
  const top=130+i*360,bottom=top+220;
  const X=x=>100+620*(x-p.xmin)/(p.xmax-p.xmin),Y=y=>bottom-220*(y-p.ymin)/(p.ymax-p.ymin);
  const line=(x1,y1,x2,y2,c='#cbd5e1',dash='')=>a.push(`<path d="M ${x1} ${y1} L ${x2} ${y2}" stroke="${c}" fill="none" ${dash?`stroke-dasharray="${dash}"`:''}/>`);
  text(100,top-15,p.title,'#172033',17);
  if(p.unknown!==undefined){a.push(`<rect x="${X(p.unknown)}" y="${top}" width="${X(p.xmax)-X(p.unknown)}" height="220" fill="#e8edf3"/>`);text(X(p.unknown)+15,top+40,zh?'题给数据无法确定':'Not determined', '#475569');text(X(p.unknown)+15,top+63,zh?'不绘制假定曲线':'by the given data','#475569');}
  for(const x of p.xticks){line(X(x),top,X(x),bottom);text(X(x),bottom+23,x,'#475569',14,'middle');}
  for(const y of p.yticks){line(100,Y(y),720,Y(y));text(88,Y(y)+5,y,'#475569',14,'end');}
  const zero=Y(Math.min(p.ymax,Math.max(p.ymin,0)));
  a.push(`<path d="M 100 ${bottom+3} V ${top-5} M 100 ${zero} H 738" fill="none" stroke="#253047" stroke-width="2" marker-end="url(#arrow)"/>`);
  a.push(`<path d="M 100 ${top+10} V ${top-5}" stroke="#253047" stroke-width="2" marker-end="url(#arrow)"/>`);
  text(100,top-36,p.ylabel);text(738,bottom+48,p.xlabel||'VX (V)','#253047',15,'end');
  for(const [j,c] of p.curves.entries()){
   const lo=c.from??p.xmin,hi=c.to??p.xmax;
   const xs=Array.from({length:401},(_,k)=>lo+(hi-lo)*k/400);
   for(const x of p.edges||[]) if(x>=lo&&x<=hi)xs.push(x);
   xs.sort((a,b)=>a-b);
   const d=xs.map((x,k)=>`${k?'L':'M'} ${X(x).toFixed(4)} ${Y(c.f(x)).toFixed(4)}`).join(' ');
   a.push(`<path d="${d}" fill="none" stroke="${colors[j%4]}" stroke-width="2.7" ${j?`stroke-dasharray="${['','8 4','2 4','10 3 2 3'][j%4]}"`:''}/>`);
   if(c.label)text(750,top+25+j*23,c.label,colors[j%4],14);
  }
  for(const [j,x] of (p.edges||[]).entries()){
   line(X(x),top,X(x),bottom,'#64748b','3 4');
   text(X(x),bottom+68+(j%2)*17,`${x.toFixed(p.precision??3)} V`,'#475569',13,'middle');
  }
  for(const q of p.points||[]){a.push(`<circle cx="${X(q.x)}" cy="${Y(q.y)}" r="3.5" fill="white" stroke="#1565c0" stroke-width="2"/>`);text(X(q.x)+(q.dx??8),Y(q.y)+(q.dy??-10),q.label,'#1565c0',14,q.anchor??'start');}
 });
 notes.forEach((s,i)=>text(30,130+panels.length*360+i*25,s,'#475569',14));
 const title=`${id} ${zh?'解答曲线':'solution curves'}`;
 fs.writeFileSync(new URL(`${id}/solution-curves${zh?'.zh':''}.svg`,root),`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="${height}" viewBox="0 0 900 ${height}" role="img" aria-labelledby="title desc" xml:lang="${zh?'zh':'en'}"><title id="title">${title}</title><desc id="desc">${esc(notes.join(' '))}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#253047"/></marker></defs><rect width="900" height="${height}" fill="white"/><g font-family="Arial, Microsoft YaHei, sans-serif">${a.join('\n')}</g></svg>\n`);
}
for(const zh of [false,true]){
 make('R005',zh,[3,.5].map(d=>({title:`VDS = ${d} V; VBS = 0, −1, −2, −3 V`,xmin:0,xmax:3,ymin:0,ymax:d===3?2.8:1.1,xticks:[0,1,2,3],yticks:d===3?[0,1,2]:[0,.5,1],xlabel:'VGS (V)',ylabel:'ID/β (V²)',curves:[0,1,2,3].map(b=>({f:x=>{const u=Math.max(0,x-threshold(b));return u<=d?.5*u*u:u*d-.5*d*d;},label:`VBS = ${b===0?0:"−"+b} V`})),edges:d===.5?[0,1,2,3].map(b=>threshold(b)+d):[],points:d===.5?[]:[0,1,2,3].map((b,i)=>({x:threshold(b),y:0,label:threshold(b).toFixed(3),dy:40+i*17,dx:0,anchor:'middle'}))})),zh?['阈值以下截止；反向体偏压增大使曲线右移，等步长对应的位移递减。','VDS = 3 V：导通部分均饱和；VDS = 0.5 V：竖线为饱和至线性区分界。']:['Cutoff below threshold; reverse body bias shifts curves right with shrinking shifts.','VDS = 3 V: saturation when on. VDS = 0.5 V: vertical guides mark triode boundaries.']);
}
