function generate(){
    const len=document.getElementById('length').value;
    const sym=document.getElementById('sym').checked;
    const num=document.getElementById('num').checked;
    const up=document.getElementById('up').checked;
    let cset="abcdefghijklmnopqrstuvwxyz";
    if(sym) cset+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if(num) cset+="0123456789";
    if(up) cset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let p="";
    for(let i=0;i<len;i++){
        const ind = Math.floor(Math.random()*cset.length);
        p+=cset[ind];
    }
    document.getElementById('res').textContent=p;
}