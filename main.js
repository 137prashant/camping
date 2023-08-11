/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// menu show

// validate if constant exists

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden
// validate if constant exists

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__img-3", 1.2, { opacity: 0, y: 200, delay: 0.2 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: .3 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, y: -80, delay: .8 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, y: 80, delay: .9 });
gsap.from(".home__img-1", 1.2, { opacity: 0, y: 60, delay: .5 });
