/*COPY MENU FOR MOBILE*/

const backTopBtn = document.querySelector("[data-back-top-btn]");



let lastScrollPos = 0;

window.addEventListener("scroll", function (){
    if(this.window.scrollY > 50){
       
        backTopBtn.classList.add("active");
    }else{
        
        backTopBtn.classList.remove("active");
    }
});

/*SCROLL EFFECT */
window.addEventListener("scroll", reveal);

/*function reveal(){
  let reveals = document.querySelectorAll(".reveal");
    for(let i = 0; i < reveals.length; i++){
      
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 70;

      if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add("active");
      }else{
          reveals[i].classList.remove("active");
      }
  }
};*/