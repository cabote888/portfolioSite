// Responsive navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const DOM = document.querySelector("body");
const mainHero = document.getElementById("main");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    DOM.classList.toggle("menuFixed")
    mainHero.classList.toggle("blurMain");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    DOM.classList.remove("menuFixed");
    mainHero.classList.remove("blurMain");
}

//Copy mail button

const copyButton = document.getElementById('copy-btn');

copyButton.addEventListener('click', (event) => {
    const content = document.getElementById('copy-txt').textContent;
    navigator.clipboard.writeText(content);
});

//Hide navbar on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};