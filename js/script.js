// =============== DARK THEME ===============

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme that the interface has by validathing the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validate if the user has previosly chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedTheme === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// console.log("Theme setting is working");

// =============== MENU SHOW AND HIDDEN ===============
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// =============== MENU SHOW ===============
/** Validate if the constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// =============== MENU HIDE ===============
/** Validate if the constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// console.log("Menu and setting is working");
// =============== REMOVE MENU PROFILE ===============
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on nav__links, we remove the show menu
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
// console.log("Remove menu profile is working");

// ==================== Typewriter effect ====================

new Typewriter("#typewriter", {
  strings: ["Alejandro S. Giraldo", "Web Developer", "FullStack"],
  autoStart: true,
  loop: true,
  cursor: "|",
});
// console.log("Typewriter effect is working");

// ==================== Portfolio Swiper ====================

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  //mousewheel: true,
  keyboard: true,
});

// console.log("Portfolio Swiper is working");

// ==================== SCROLL UP ====================
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll is heigher than 560 viewpoint /heigh, then the scroll up icon appear
  // and on clicking should reach top page
  if (this.scrollY >= 560) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
  // console.log("Scroll up is being called and working!");
}

window.addEventListener("scroll", scrollUp);

// ==================== SCROLL SECTION ACTIVE HIGHLIGHT ====================

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
  // console.log("Section highlight is working!");
}

window.addEventListener("scroll", scrollActive);

// ==================== CONTACT FORM ====================

const contactBtn = document.getElementById("send-message");
contactBtn.addEventListener("click", (e) => {
  alert("Under construction! \nPlease send an e-mail to alejosegi@gmail.com");
});
