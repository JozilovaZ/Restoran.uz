window.addEventListener("scroll",function(){
  const header=this.document.querySelector("header")
  if (this.window.scrollY>20){
    header.classList.add("scrolled")
  }
  else{
    header.classList.remove("scrolled")
  }
})

const scrol=document.querySelector(".scrol");
scrol.addEventListener("click", function(){

})

document.addEventListener("DOMContentLoaded",function(){
  const loader=document.querySelector(".loader");
  setTimeout(()=>{
    loader.style.opacity='0'; /* tiniqligi */
    loader.style.display='none'
  },4000)
})