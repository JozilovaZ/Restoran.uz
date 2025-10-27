window.addEventListener("scroll",function(){
  const header=this.document.querySelector("header")
  if (this.window.scrollY>20){
    header.classList.add("scrolled")
  }
  else{
    header.classList.remove("scrolled")
  }
})