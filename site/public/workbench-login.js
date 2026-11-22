document.querySelector('#login').onsubmit=async event=>{
  event.preventDefault();const button=document.querySelector('button');button.disabled=true;
  try{const response=await fetch('/api/workbench/local-login',{method:'POST',headers:{'content-type':'application/json','x-workbench-request':'1'},body:JSON.stringify({key:document.querySelector('#key').value.trim()})});
    const data=await response.json();if(!response.ok)throw new Error(data.error);location.replace('/review');
  }catch(e){document.querySelector('#error').textContent=e.message;}finally{button.disabled=false;}
};
document.querySelector('button').disabled=false;
