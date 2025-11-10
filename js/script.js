window.addEventListener("load",function(){
  if (this.window.AOS){
    AOS.init({
      duration:700,
      once:false,
      mirror:true,
      offset:200,

    });
  } 
  else{
    console.log("AOS yuklanmandi")
  }  
})
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


function Fu(){
  document.getElementById("cart").classList.toggle("open");
}


function End(){
  document.getElementById("rever").classList.toggle("end");
}

/* let indikatorlar=document.querySelectorAll('.slider-indicators');
let slaydlar=document.querySelectorAll('#our-menus .our-meal');

if (slaydlar.length>0){
  slaydlar[0].classList.add('active')
}

if (indikatorlar.length>0){
  let birinchiIndikator=indikatorlar[0].querySelector('.indicators-icons');
  if (birinchiIndikator){
    birinchiIndikator.classList.add('active')
  }
}

indikatorlar.forEach((indikatorlar,index)=>{
  indikatorlar.addEventListener('click',()=>{
    slaydlar.forEach(slayd=>{
      slayd.classList.remove('active');
    });
   
    indikatorlar.forEach(ind=>{
      let ikona=ind.querySelector('.indicators-icons');
      if (ikona){
        ikona.classList.remove('active')
      }
    })

    if (slaydlar[index]){
      slaydlar[index].classList.add('active')
    }

    let bosilganIkon=indikatorlar.querySelector('.indicators-icons ');
    if(bosilganIkon){
      bosilganIkon.classList.add('active');
    }
    
  })
}) */
/* Our menue */
let indikatorlar=document.querySelectorAll('.slider-indicators');
let slaydlar=document.querySelectorAll('#our-menus .our-meal');

if(slaydlar.length>0){
  slaydlar[0].classList.add('active');

}

if (indikatorlar.length>0){
  let birinchiIndikator=indikatorlar[0].querySelector('.indicators-icons');
  if(birinchiIndikator){
    birinchiIndikator.classList.add('active');
  }

}

indikatorlar.forEach((indikator,index)=>{
  indikator.addEventListener('click',()=>{

    slaydlar.forEach(slayd=>{
      slayd.classList.remove('active');
    });

    indikatorlar.forEach(ind=>{
      let ikona=ind.querySelector('.indicators-icons');
      if(ikona){
        ikona.classList.remove('active');
      }
    })
    if(slaydlar[index]){
      slaydlar[index].classList.add('active');
    }
    let bosilganIkon=indikator.querySelector('.indicators-icons');
    if(bosilganIkon){
      bosilganIkon.classList.add('active')
    }
  })
})
