// Bounded line diff; long blocks use a prefix/suffix fallback rather than freezing the editor.
export function diffText(before, after) {
  if (before === after) return '无差异';
  const a=before.split('\n'),b=after.split('\n');
  let start=0,end=0;
  while(start<a.length && start<b.length && a[start]===b[start]) start++;
  while(end<a.length-start && end<b.length-start && a.at(-end-1)===b.at(-end-1)) end++;
  const x=a.slice(start,a.length-end),y=b.slice(start,b.length-end),lines=[];
  if(x.length*y.length>250000) return `@@ 第 ${start+1} 行起 @@\n`+x.map(s=>'- '+s).concat(y.map(s=>'+ '+s)).join('\n');
  const dp=Array.from({length:x.length+1},()=>new Uint32Array(y.length+1));
  for(let i=x.length-1;i>=0;i--)for(let j=y.length-1;j>=0;j--)dp[i][j]=x[i]===y[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
  let i=0,j=0;
  while(i<x.length||j<y.length){
    if(i<x.length&&j<y.length&&x[i]===y[j]){lines.push('  '+x[i]);i++;j++;}
    else if(i<x.length&&(j===y.length||dp[i+1][j]>=dp[i][j+1]))lines.push('- '+x[i++]);
    else lines.push('+ '+y[j++]);
  }
  return `@@ 第 ${start+1} 行起 · − 原版 / + 候选 @@\n`+lines.join('\n');
}

// Compare whole Markdown blocks so formulae/tables are rendered intact.
export function diffBlocks(before,after){
  const split=text=>{
    const blocks=[];let lines=[],fence='',math=false;
    const flush=()=>{if(lines.length){blocks.push(lines.join('\n'));lines=[];}};
    for(const line of String(text||'').split('\n')){
      const marker=line.match(/^\s*(```+|~~~+)/)?.[1];
      if(marker){if(!fence)fence=marker[0];else if(fence===marker[0])fence='';}
      if(!fence&&/^\s*(?:\$\$|\\\[|\\\])\s*$/.test(line))math=!math;
      if(!line.trim()&&!fence&&!math)flush();else lines.push(line);
    }flush();return blocks;
  };
  const a=split(before),b=split(after),operations=[];
  if(a.length*b.length>100000)return [{kind:'change',before:String(before||''),after:String(after||'')}];
  const dp=Array.from({length:a.length+1},()=>new Uint32Array(b.length+1));
  for(let i=a.length-1;i>=0;i--)for(let j=b.length-1;j>=0;j--)dp[i][j]=a[i]===b[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
  let i=0,j=0;
  while(i<a.length||j<b.length){
    if(i<a.length&&j<b.length&&a[i]===b[j]){operations.push({kind:'same',value:a[i++]});j++;}
    else if(i<a.length&&(j===b.length||dp[i+1][j]>=dp[i][j+1]))operations.push({kind:'remove',value:a[i++]});
    else operations.push({kind:'add',value:b[j++]});
  }
  const groups=[];
  for(const op of operations){const kind=op.kind==='same'?'same':'change';let group=groups.at(-1);if(group?.kind!==kind){group={kind,before:[],after:[]};groups.push(group);}if(op.kind!=='add')group.before.push(op.value);if(op.kind!=='remove')group.after.push(op.value);}
  return groups.map(g=>({...g,before:g.before.join('\n\n'),after:g.after.join('\n\n')}));
}
export function renderDiff(target,before,after,{render,name='',image=false,renderImage}={}){
  target.replaceChildren();target.classList.add('readable-diff');
  if(before===after){const p=document.createElement('p');p.className='diff-quiet';p.textContent='内容未改变';target.append(p);return;}
  const groups=image?[{kind:'change',before,after}]:diffBlocks(before,after);
  let count=0;
  for(const group of groups){
    if(group.kind==='same'){
      const details=document.createElement('details'),summary=document.createElement('summary'),content=document.createElement('div');details.className='diff-context';summary.textContent='展开未修改的上下文';content.className='md';render(group.after,content,'after');details.append(summary,content);target.append(details);continue;
    }
    const section=document.createElement('section');section.className='diff-change';section.dataset.change=String(++count);
    const title=document.createElement('p');title.className='diff-change-title';title.textContent=`修改 ${count} · ${name}`;section.append(title);
    const columns=document.createElement('div');columns.className='diff-columns';
    for(const [side,label,text] of [['before','修改前',group.before],['after','修改后',group.after]]){
      const column=document.createElement('article');column.className=`diff-side diff-${side}`;
      const header=document.createElement('h4');header.textContent=label;const content=document.createElement('div');content.className='md diff-content';
      if(!text){content.classList.add('diff-quiet');content.textContent=side==='before'?'新增内容':'已删除';}
      else if(image)renderImage(text,content,side);else render(text,content,side);
      column.append(header,content);columns.append(column);
    }
    section.append(columns);target.append(section);
  }
  const source=document.createElement('details'),label=document.createElement('summary'),pre=document.createElement('pre');source.className='diff-source';label.textContent='查看 Markdown / SVG 源码差异（可选）';pre.textContent=diffText(before,after);source.append(label,pre);target.append(source);
}
