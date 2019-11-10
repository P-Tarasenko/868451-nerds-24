'use strict';

(function () {
  var firstSlide = document.querySelector('.slider-item');
  var slides = document.querySelectorAll('.slider-item');
  var inputs = document.querySelector('.slider').querySelectorAll('input');

  var hideSlides = function () {
    slides.forEach(function (item) {
      item.style = '';
    });
  };

  inputs.forEach(function (item) {
    item.addEventListener('change', function () {
      hideSlides();
      for (var i = 0; i < inputs.length; i++) {
        if (this === inputs[i]) {
          slides[i].style.display = 'block';
        }
      }
    });
  });

  firstSlide.style.display = 'block';
})();
