// Responsive navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const DOM = document.querySelector("body");
const blurPage = document.querySelector("#wrapBlur")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    DOM.classList.toggle("menuFixed");
    blurPage.classList.toggle("mainBlur");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    DOM.classList.remove("menuFixed"); 
    blurPage.classList.remove("mainBlur")
}

//Gsap animations

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

CustomEase.create("myEase", "M0,0 C0,0 0.52,-0.053 0.704,0.13 0.855,0.281 0.831,0.586 0.864,0.762 0.893,0.923 1,1 1,1 ")

const navTimeline = gsap.timeline({defaults: {autoAlpha:0, ease:"myEase", y:20, duration:.9}})
  .from(".nav-logo", {y:0, duration:.5})
  .from(".nav-item", {y:-20, stagger: .15, ease:"power2", duration:.5})
  .from(".greeting",{})
  .from(".my-name", {}, "<+=.05")
  .from(".pre-desc", {}, "<+=.05")
  .from(".my-desc", {}, "<+=.05")
  .from(".main-btns", {}, "<+=.05")  

const aboutMetimeline = gsap.timeline({scrollTrigger:{
  trigger:"#about-me",
  start:"top 80%",
  markers:true
}})
.from("#about-me", {autoAlpha:0, y:35, esase:"expo.in"})


gsap.defaults({ease:"expo.out", y:20, duration:1, autoAlpha:0})

const projectsTimeline = gsap.timeline({scrollTrigger:{
  trigger:"#projects",
  markers:true,
  start:"top 80%"
}})
.from(".pj-head", {ease:"circ.out", y:30})
.from(".card2", {})
.from(".card1", {}, "<+.3")
.from(".card3", {}, "<+.3")

let copiedTl = gsap.timeline({ease:"linear", repeat:1, repeatDelay:1.5, yoyo:true, paused:true})
  .from(".copied-to", {duration:.5, y:50, autoAlpha:0})

document.getElementById("play").onclick = ()=> copiedTl.play(0);

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