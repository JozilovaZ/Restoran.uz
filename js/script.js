/* scrol bo`lganda header rangi o`zgarish */
window.addEventListener("scroll",function(){
  const header=this.document.querySelector("header")
  if (this.window.scrollY>20){
    header.classList.add("scrolled")
  }
  else{
    header.classList.remove("scrolled")
  }
})


/* scrol qilganda boshiga qaytish */
const scrol=document.querySelector(".scrol");
window.addEventListener("scroll", () => {
  scrol.classList.toggle("show", window.scrollY > 300);
});

scrol.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});


/* loader uchun javascript */
document.addEventListener("DOMContentLoaded",function(){
  const loader=document.querySelector(".loader");
  setTimeout(()=>{
    loader.style.opacity='0'; /* tiniqligi */
    loader.style.display='none'
  },4000)
})