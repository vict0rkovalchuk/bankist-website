'use strict';

// Button Smooth Scrolling START

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({ 
    top: s1coords.y + window.scrollY,
    left: s1coords.x + window.scrollX,
    behavior: 'smooth'
  });
  // section1.scrollIntoView({ behavior: 'smooth', block: 'end' });
})

// Button Smooth Scrolling END


// Page Navigation Smooth Scrolling START

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.matches('.nav__link:not(.nav__link--btn)')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})

// Page Navigation Smooth Scrolling END