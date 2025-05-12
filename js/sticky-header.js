'use strict';

// Sticky Header START
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.y) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
})

// Sticky Header END