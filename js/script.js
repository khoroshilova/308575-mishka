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
var modalBackground = document.querySelector(".modal-background");
var modalContent = document.querySelector(".modal-content");

if (cartLink) {
  for (var i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener("click", function (event) {
      event.preventDefault();
      modalBackground.classList.add("modal-show");
      modalContent.classList.add("modal-show");
    })
  };
}

if (modalBackground) {
  modalBackground.addEventListener("click", function (event) {
    event.preventDefault();
    modalBackground.classList.remove("modal-show");
    modalContent.classList.remove("modal-show");
  });
}
