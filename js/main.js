$(document).ready(function() {
  const btnMenu = $("header .btn-menu");
  const btnClose = $(".overlay .btn-close");
  const navbar = $(".overlay .navbar");

  btnMenu.click(function() {
    navbar.toggleClass("visible");
  });

  btnClose.click(function() {
    navbar.toggleClass("visible");
  });
});
