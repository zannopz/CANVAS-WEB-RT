const acc=document.querySelectorAll('.acc');
acc.forEach(a=>{
a.onclick=()=>{
a.classList.toggle('active');
const p=a.nextElementSibling;
p.style.display=p.style.display==='block'?'none':'block';
}
});