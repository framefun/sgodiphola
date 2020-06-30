//the menu
  const burger = document.getElementById('burger');
  const fill_menu = document.getElementById('menu');
  var menu = document.querySelector(".menu");
  var hidden_menu = document.querySelector(".burgerMenu");
  //fill_menu.style.borderRadius = "50%";
  const nav_wrapper = document.getElementById('nav_wrapper');
  burger.addEventListener('click',function(){
    burger.classList.toggle('toggle');
    nav_wrapper.classList.toggle('open-menu');
    fill_menu.classList.toggle('menu');
    menu.style.animationName = "unfill";

  });
//scroll to hide menu
if (window.innerWidth > 1024) {
  window.addEventListener("scroll",function(){
    if(window.pageYOffset > 500){
     hidden_menu.style.display = "block";
    }
    else if(window.pageYOffset < 500){
      hidden_menu.style.display = "none";
    }

  },false);
}
//the end of menu
