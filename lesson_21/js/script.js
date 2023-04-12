const mainSwiper = new Swiper('.main__swiper', {
  // Optional parameters
  loop: true,
  speed: 700,
   pagination: {
        el: ".main__pagination",
        type: "fraction",
  },
    autoplay: {
   delay: 3000,
  },
     effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


const nextSwiper = new Swiper('.featured-swiper__body', {
  loop: true,
  speed: 500,
   pagination: {
        el: ".featured-swiper__pagination",
        type: "fraction",
  },
    autoplay: {
   delay: 4000,
  },
     effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


let header__burger = document.querySelectorAll(".header__burger");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});
