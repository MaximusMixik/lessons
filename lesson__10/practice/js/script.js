
let header__burger = document.querySelectorAll(".header__burger,.header__link");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});



$(document).ready(function(){
  $('.slider').slick({

    arrows:  false,
    dots: true,
    adaptiveHeight: true,  
    infinite: true,
    fade: true,
     appendDots:$(".dots"),
  });
});