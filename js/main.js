$(document).ready(function() {
  const btnMenu = $("header .btn-menu");
  const btnClose = $(".overlay .btn-close");
  const navbar = $(".overlay .navbar");
  const rightArrow = $(".right-arrow");
  const slides = $(".last-news-slider .slide");
  let slideIndex = 0;

  btnMenu.click(function() {
    navbar.toggleClass("visible");
  });

  btnClose.click(function() {
    navbar.toggleClass("visible");
  });

  const nextSlide = function() {
    slides.eq(slideIndex).toggleClass("active");
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = (1 % slides.length) - 1;
      console.log("Entrou", slideIndex);
    }
    slides.eq(slideIndex).toggleClass("active");
  };

  rightArrow.click(nextSlide);
});
