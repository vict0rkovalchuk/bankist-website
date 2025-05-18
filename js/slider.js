'use strict';

// Slider START

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.slider__btn--left');
const btnNext = document.querySelector('.slider__btn--right');

let currentSlide = 0;

const goToSlide = function (slideIndex) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${slide.offsetWidth * (index - slideIndex)}px)`;
  });
}

goToSlide(currentSlide);

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }

  goToSlide(currentSlide);
};

const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  goToSlide(currentSlide);
};

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

const actions = {
  ArrowLeft: prevSlide,
  ArrowRight: nextSlide
};

document.addEventListener('keydown', (event) => {
  const action = actions[event.key];
  if (action) action();
});

// Slider END