// Offline, dependency-free plots for the R001–R004 examples. Run from any cwd.
import fs from 'node:fs';
const root = new URL('../razavi/', import.meta.url);
const colors = ['#1565c0', '#ad3c00', '#087f5b', '#7139a2'];
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;');
function plot(id, zh, title, subtitle, xmax, ymax, xticks, yticks, xlabel, ylabel, draw) {
  const X = x => 90 + 570 * x / xmax, Y = y => 450 - 340 * y / ymax;
  const parts = [];
  const text = (x,y,s,fill='#253047',anchor='start',size=16) => parts.push(`<text x="${x}" y="${y}" fill="${fill}" text-anchor="${anchor}" font-size="${size}">${esc(s)}</text>`);
  const line = (x1,y1,x2,y2,color='#cbd5e1',dash='') => parts.push(`<path d="M ${x1} ${y1} L ${x2} ${y2}" fill="none" stroke="${color}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`);
  const curve = (f,color,dash='',from=0,to=xmax) => {
    const d = Array.from({length:501},(_,i)=>{const x=from+(to-from)*i/500; return `${i?'L':'M'} ${X(x).toFixed(3)} ${Y(f(x)).toFixed(3)}`;}).join(' ');
    parts.push(`<path d="${d}" fill="none" stroke="${color}" stroke-width="3" ${dash?`stroke-dasharray="${dash}"`:''}/>`);
  };
  const dot = (x,y,c) => parts.push(`<circle cx="${X(x)}" cy="${Y(y)}" r="4" fill="white" stroke="${c}" stroke-width="2"/>`);
  text(35,32,title,'#172033','start',22); text(35,59,subtitle,'#475569','start',15);
  for(const x of xticks) {line(X(x),110,X(x),450); text(X(x),475,x,'#475569','middle',14);}
  for(const y of yticks) {line(90,Y(y),660,Y(y)); text(78,Y(y)+5,y,'#475569','end',14);}
  parts.push('<path d="M 90 95 V 450 H 690" fill="none" stroke="#253047" stroke-width="2" marker-start="url(#back)" marker-end="url(#arrow)"/>');
  text(690,502,xlabel,'#253047','end'); text(92,88,ylabel);
  draw({X,Y,text,line,curve,dot,zh});
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="620" viewBox="0 0 800 620" role="img" aria-labelledby="title desc" xml:lang="${zh?'zh':'en'}">
<title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#253047"/></marker><marker id="back" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#253047"/></marker></defs>
<rect width="800" height="620" fill="white"/><g font-family="Arial, Microsoft YaHei, sans-serif">${parts.join('\n')}</g></svg>\n`;
  fs.writeFileSync(new URL(`${id}/solution-curves${zh?'.zh':''}.svg`,root),svg);
}
for (const zh of [false,true]) {
  plot('R001',zh,zh?'R001：漏极电流与栅源电压':'R001: drain current versus gate voltage',
    '|VDS| = 3 V; W/L = 100',3,50,[0,1,2,3],[0,10,20,30,40,50],'|VGS| (V)','|ID| (mA)',
    ({X,Y,text,line,curve,dot})=>{
      for(const [i,k,t,f] of [[0,6.7,.7,1.3],[1,1.92,.8,1.6]]) {
        const base=x=>k*Math.max(0,x-t)**2;
        curve(base,colors[i],'7 5'); curve(x=>base(x)*f,colors[i]);
        dot(3,base(3),colors[i]);dot(3,base(3)*f,colors[i]);
        text(670,Y(base(3))+5,base(3).toFixed(1),colors[i]);text(670,Y(base(3)*f)+5,(base(3)*f).toFixed(1),colors[i]);
        line(X(t),450,X(t),490+20*i,colors[i],'3 3');text(X(t),510+20*i,`${t} V`,colors[i],'middle',14);
      }
      text(112,130,zh?'导通后均为饱和区':'Saturation wherever conducting');
      text(112,155,'NFET',colors[0]);text(112,180,'PFET',colors[1]);
      text(35,558,zh?'实线：计入 CLM；虚线：忽略 CLM。':'Solid: with CLM; dashed: without CLM.');
      text(35,584,zh?'阈值以下截止；PFET 电流采用绝对值。':'Cutoff below threshold; PFET current shown as a magnitude.');
    });
  plot('R003',zh,zh?'R003：本征增益曲线族':'R003: intrinsic gain versus drain current',
    'W = 50 μm; μnCox = 134 μA/V²; λ = (0.1 V⁻¹)(0.5 μm/L)',2,500,[0,.5,1,1.5,2],[0,100,200,300,400,500],'ID (mA)','gm ro (V/V)',
    ({X,Y,text,line,curve,dot})=>{
      for(const [i,L] of [.5,1,2].entries()) {
        const f=x=>Math.sqrt(2*.134*(50/L)/x)/(.1*.5/L);
        curve(f,colors[i],['','8 4','2 4'][i],.05,2);
        dot(.5,f(.5),colors[i]);
        text(380,140+25*i,`L = ${L} μm`,colors[i]);text(245,Y(f(.5))-8,f(.5).toFixed(1),colors[i]);
      }
      line(X(.5),450,X(.5),180,'#64748b','3 4');
      text(35,542,zh?'绘图区间：0.05–2 mA；各曲线 ∝ 1/√ID。':'Plotted interval: 0.05–2 mA; each curve ∝ 1/√ID.');
      text(35,570,zh?'强反型平方律，保持饱和；ro ≈ 1/(λID)。':'Strong-inversion square law, saturation maintained; ro ≈ 1/(λID).');
      text(35,598,zh?'不向 ID = 0 外推；亚阈值区不适用此模型。':'No extrapolation to ID = 0; this model excludes subthreshold.');
    });
  plot('R004',zh,zh?'R004：固定漏源电压的转移特性':'R004: transfer curves at fixed drain voltage',
    'VTH = 0.7 V; β = μnCox(W/L); λ = 0',3,2.8,[0,1,2,3],[0,.5,1,1.5,2,2.5],'VGS (V)','ID/β (V²)',
    ({X,Y,text,line,curve,dot})=>{
      curve(x=>.5*Math.max(0,x-.7)**2,colors[3],'7 5');
      for(const [i,d] of [.2,.5,1].entries()) {
        const f=x=>{const u=Math.max(0,x-.7);return u<=d?.5*u*u:u*d-.5*d*d;};
        curve(f,colors[i],['','8 4','2 4'][i]);
        dot(.7+d,.5*d*d,colors[i]);
        line(X(.7+d),Y(.5*d*d),X(.7+d),495+20*i,colors[i],'3 4');
        text(X(.7+d),515+20*i,`${(.7+d).toFixed(1)} V`,colors[i],'middle',14);
        text(465,175+26*i,`VDS = ${d.toFixed(1)} V`,colors[i]);
      }
      dot(.7,0,'#253047');line(X(.7),450,150,480,'#253047');text(120,499,'0.7 V', '#253047','middle',14);
      text(360,135,zh?'虚线包络：VDS ≥ 2.3 V':'Dashed envelope: VDS ≥ 2.3 V',colors[3]);
      text(35,580,zh?'各分界点左侧：饱和（抛物线）；右侧：线性区（切线）。':'Before each boundary: saturation (parabola); after: triode (tangent line).', '#253047','start',15);
      text(35,605,zh?'VGS ≤ 0.7 V：截止；圆点为连续且斜率连续的工作区分界。':'VGS ≤ 0.7 V: cutoff. Dots mark smooth region boundaries.', '#253047','start',15);
    });
}
