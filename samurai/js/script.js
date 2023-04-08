const swiper = new Swiper('.swiper', {
  //  slidesPerView: 2.5,
     
      freeMode: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
   breakpoints: {
    320: {
      slidesPerView: 1,
     
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
       spaceBetween: 20,
    }
  },
});

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
