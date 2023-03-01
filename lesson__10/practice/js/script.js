
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


const swiper = new Swiper('.swiper', {
  speed: 3000,

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
   autoplay: {
   delay: 5000,
    //  reverseDirection: true,
  disableOnInteraction: true,
  pauseOnMouseEnter: true,
  },
});