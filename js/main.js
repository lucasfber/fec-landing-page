$(document).ready(function() {
  const btnMenu = $("header .btn-menu");
  const btnClose = $(".overlay .btn-close");
  const navbar = $(".overlay .navbar");
  const leftArrow = $(".left-arrow");
  const rightArrow = $(".right-arrow");
  const slides = $(".slider .slide");
  let slideIndex = 0;

  btnMenu.click(function() {
    navbar.toggleClass("visible");
  });

  btnClose.click(function() {
    navbar.toggleClass("visible");
  });

  const nextSlide = function() {
    if (slides.eq(slideIndex).hasClass("from-left")) {
      slides.eq(slideIndex).toggleClass("active from-left");
      slideIndex++;
    } else {
      slides.eq(slideIndex).toggleClass("active from-right");
      slideIndex++;
    }

    if (slideIndex >= slides.length) {
      slideIndex = (1 % slides.length) - 1;
    }
    slides.eq(slideIndex).toggleClass("active from-right");
  };

  const previousSlide = function() {
    if (slides.eq(slideIndex).hasClass("from-right")) {
      slides.eq(slideIndex).toggleClass("active from-right");
      slideIndex--;
    } else {
      slides.eq(slideIndex).toggleClass("active from-left");
      slideIndex--;
    }

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slides.eq(slideIndex).toggleClass("active from-left");
  };

  rightArrow.click(nextSlide);
  leftArrow.click(previousSlide);
});
