'use strict';

// Slider START

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.querySelector('.slider__btn--left');
  const btnNext = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  }

  const updateDots = () => {
    dotsContainer
      .querySelectorAll('.dots__dot')
      .forEach((dot, i) => 
        dot.classList.toggle('dots__dot--active', i === currentSlide)
      );
  };

  const goToSlide = function () {
    slides.forEach(function (slide, index) {
      slide.style.transform = `translateX(${slide.offsetWidth * (index - currentSlide)}px)`;
    });

    updateDots();
  }

  const prevSlide = function () {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

    goToSlide();
  };

  const nextSlide = function () {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

    goToSlide();
  };

  const init = function () {
    createDots();
    goToSlide();
  };

  init();

  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);

  const actions = {
    ArrowLeft: prevSlide,
    ArrowRight: nextSlide
  };

  document.addEventListener('keydown', (e) => actions[e.key]?.());

  dotsContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target.matches('.dots__dot:not(.dots__dot--active)')) {
      currentSlide = +target.dataset.slide;
      goToSlide();
    }
  });
}

slider();

// Slider END