// POSIX tar, uncompressed: exact UTF-8 Markdown bytes plus a machine-readable manifest.
export function archive(exported) {
  const encoder=new TextEncoder(), blocks=[];
  const entries={...exported.files,'workbench-manifest.json':JSON.stringify(exported.manifest||exported,null,2)};
  for(const [name,value] of Object.entries(entries)){
    if(encoder.encode(name).length>99||name.includes('..')||/[\\\x00-\x1f]/.test(name)||name.startsWith('/'))throw new Error('Invalid archive path');
    const content=value instanceof Uint8Array?value:encoder.encode(value), header=new Uint8Array(512);
    const put=(offset,text)=>header.set(encoder.encode(text),offset);
    put(0,name);put(100,'0000644\0');put(108,'0000000\0');put(116,'0000000\0');
    put(124,content.length.toString(8).padStart(11,'0')+'\0');put(136,'00000000000\0');
    put(148,'        ');put(156,'0');put(257,'ustar\0');put(263,'00');
    put(148,header.reduce((a,b)=>a+b,0).toString(8).padStart(6,'0')+'\0 ');
    blocks.push(header,content,new Uint8Array((512-content.length%512)%512));
  }
  blocks.push(new Uint8Array(1024));return new Blob(blocks,{type:'application/x-tar'});
}
