const generar=()=>{
let n = parseInt(document.querySelector("#n").value);
let div=document.querySelector("#res");
document.querySelector("#vn").innerHTML=n
div.innerHTML="<img src='/raiz/loading.gif' width='200px' heigth='200px'>";
setTimeout(()=>{
  let r=Math.sqrt (n);
  div.innerHTML=r.toFixed(2);
div.innerHTML=tablaHTML+"</table>";
},2000)
}