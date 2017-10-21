var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }

  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var cartLink = document.querySelectorAll(".cart-btn");
var cartPopup = document.querySelector(".modal");

if (cartPopup) {
  var cartClose = cartPopup.querySelector("modal-close");
}

if (cartClose) {
  cartClose.addEventListener("click", function (event) {
    event.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

if (cartLink) {
  for (var i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      cartPopup.classList.add("modal-show");
    })
  };
}
