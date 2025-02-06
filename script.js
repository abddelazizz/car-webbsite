let menu = document.querySelector("#menu-btn");
let navBar = document.querySelector(".navbar");
let loginBtn = document.querySelector("#login-btn");
let loginOverlay = document.querySelector("#login-overlay");
let closeBtn = document.querySelector("#close-btn");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navBar.classList.remove("active");
};
loginBtn.onclick = () => {
  loginOverlay.style.display = "flex";
};

closeBtn.onclick = () => {
  loginOverlay.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === loginOverlay) {
    loginOverlay.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
// Initialize Swiper
const swiper = new Swiper(".vehicles-slider", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// Initialize Swiper for Featured Section
const featuredSwiper = new Swiper(".featured-slider", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});