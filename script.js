let btnHamburger = document.querySelector(".header__toggle");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let fadeEls = document.querySelectorAll(".has-fade");
let body = document.querySelector("body");

btnHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (header.classList.contains("open")) {
    //Close Hamburger Menu
    header.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeEls.forEach((item) => {
      item.classList.remove("fade-in");
      item.classList.add("fade-out");
    });
  } else {
    //Open hamburger Menu
    header.classList.add("open");
    body.classList.add("no-scroll");
    fadeEls.forEach((item) => {
      item.classList.remove("fade-out");
      item.classList.add("fade-in");
    });
  }
}
