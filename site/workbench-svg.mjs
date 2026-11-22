import { SaxesParser } from 'saxes';
const tags=new Set(['svg','g','defs','title','desc','path','line','polyline','polygon','rect','circle','ellipse','text','tspan','marker','clipPath']);
const attrs=new Set(['xmlns','xml:lang','viewBox','width','height','x','y','x1','x2','y1','y2','cx','cy','r','rx','ry','d','points','transform','fill','stroke','stroke-width','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','opacity','fill-opacity','stroke-opacity','font-size','font-family','font-weight','font-style','text-anchor','dominant-baseline','dx','dy','id','role','aria-label','aria-labelledby','preserveAspectRatio','marker-start','marker-mid','marker-end','markerWidth','markerHeight','markerUnits','refX','refY','orient','clip-path','clipPathUnits']);
export function validateSvg(text){
  if(typeof text!=='string'||text.length>150000)throw new Error('答案 SVG 上限 150 KB');
  let root=false,nodes=0,title=false,desc=false,shape=false;const ids=new Set(),refs=[];
  const parser=new SaxesParser({xmlns:true});
  parser.on('error',e=>{throw new Error('SVG XML 无效：'+e.message);});
  parser.on('doctype',()=>{throw new Error('SVG 不允许 DOCTYPE 或实体定义');});
  parser.on('processinginstruction',()=>{throw new Error('SVG 不允许处理指令');});
  parser.on('opentag',node=>{
    if(++nodes>5000)throw new Error('SVG 元素过多');
    if(!tags.has(node.name)||node.uri!=='http://www.w3.org/2000/svg')throw new Error('SVG 不允许元素：'+node.name);
    if(!root){root=true;if(node.name!=='svg'||!node.attributes.viewBox)throw new Error('SVG 必须具有根 svg 和 viewBox');}
    if(node.name==='title')title=true;if(node.name==='desc')desc=true;if(['path','polyline','line','circle','rect','polygon'].includes(node.name))shape=true;
    for(const [name,attr] of Object.entries(node.attributes)){
      const value=attr.value;
      if(!attrs.has(name)||name.startsWith('on')||/javascript:|data:|https?:|@import|expression\s*\(/i.test(name==='xmlns'?'':value))throw new Error('SVG 不允许属性或外链：'+name);
      if(name==='xmlns'&&value!=='http://www.w3.org/2000/svg')throw new Error('SVG 命名空间无效');
      if(name==='id'){if(!/^[A-Za-z][\w-]*$/.test(value)||ids.has(value))throw new Error('SVG id 无效或重复');ids.add(value);}
      if(/url\s*\(/i.test(value)){if(!/^url\(#[A-Za-z][\w-]*\)$/.test(value))throw new Error('SVG 仅允许内部图形引用');refs.push(value.slice(5,-1));}
    }
  });
  parser.write(text).close();
  if(!root||!title||!desc||!shape)throw new Error('答案 SVG 必须包含 title、desc 和实际图形');
  if(refs.some(id=>!ids.has(id)))throw new Error('SVG 内部引用不存在');
}
