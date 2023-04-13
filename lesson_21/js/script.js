// slider #1
const mainSwiper = new Swiper('.main__swiper', {
  loop: true,
  speed: 1200,
   pagination: {
        el: ".main__pagination",
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
// slider #2
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


// burger
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


// header+scroll
const header = document.getElementById("header");

header.style.backgroundColor = "transparent";
header.style.transition = "background-color 500ms ease";

function changeHeaderColor() {
  if (window.scrollY > 600) {
    header.style.backgroundColor = " rgba(0, 0, 0, 0.7)";
  } else {
    header.style.backgroundColor = "transparent";
  }
}
window.addEventListener("scroll", changeHeaderColor);

window.addEventListener("scroll", function() {
  if (window.scrollY > 600) {
    header.classList.add("smaller");
  } else {
    header.classList.remove("smaller");
  }
});

// articles sub-menu

let articlesBtn = document.querySelectorAll(".articles-head__btn");
let articlesMenu = document.querySelector(".articles-head__menu");

articlesBtn.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    articlesMenu.classList.toggle("active");
  };
});





// column 3-4
const articlesContainer = document.querySelector('.articles-body');
const columns3Button = document.querySelector('.articles-head__columns:nth-child(1)');
const columns4Button = document.querySelector('.articles-head__columns:nth-child(2)');

columns3Button.addEventListener('click', function() {
  articlesContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(290px, 1fr))';
  columns3Button.classList.add('active');
  columns4Button.classList.remove('active');
});

columns4Button.addEventListener('click', function() {
  articlesContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(225px, 1fr))';
  columns4Button.classList.add('active');
  columns3Button.classList.remove('active');
});
