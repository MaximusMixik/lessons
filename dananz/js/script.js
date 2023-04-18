let headerBurger = document.querySelectorAll(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let back = document.querySelector("body");

headerBurger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    headerMenu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

