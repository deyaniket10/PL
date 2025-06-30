// Aos
AOS.init();

// Header
const ham = document.querySelector(".ham");
console.log("ham");
const nav = document.querySelector(".nav-collapse");

ham.addEventListener("click", () => {
  console.log("nav.classList");
  nav.classList.toggle("active");

  // nav.style.overflowY = isOpen ? "hidden" : "auto";
  // document.querySelector(".nav-collapse").style["overflow"] = "hidden";
});

//  <!-- Initialize Swiper -->
//     document.addEventListener('DOMContentLoaded', () => {
//   const main = new Splide('#agents-main', {
//     type       : 'fade',
//     pagination : false,
//     arrows     : false,
//     rewind     : true,
//   });

//   const thumbs = new Splide('#agents-thumbs', {
//     fixedWidth    : 80,
//     fixedHeight   : 50,
//     gap           : 10,
//     rewind        : true,
//     pagination    : false,
//     isNavigation  : true,
//     focus         : 'center',
//     breakpoints   : { 600: { fixedWidth: 60, fixedHeight: 40 } },
//   });

//   main.sync(thumbs);
//   main.mount();
//   thumbs.mount();
// });
const swiper = new Swiper("#banner-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const blogSwiper = new Swiper("#blog-swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
