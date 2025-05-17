'use strict';

// Sticky Header START

const header = document.querySelector('.header');

const headerObserver = new IntersectionObserver(function (entries, observer) {
  const [entry] = entries;

    if (entry.isIntersecting) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');
    }
}, {
  root: null,
  rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`,
  threshold: 0
});

headerObserver.observe(header);

// Sticky Header END