'use strict';

// Menu Fade Animation START

const nav = document.querySelector('.nav');

// Approach 1 START
// function handleHover (e, opacity) {
//   if (e.target.matches('.nav__link')) {
//     const clicked = e.target;
//     const closestParent = clicked.closest('.nav');
//     const siblings = closestParent.querySelectorAll('.nav__link, .nav__logo');

//     siblings.forEach(function (el) {
//       if (el !== clicked) el.style.opacity = opacity;
//     })
//   }
// }

// nav.addEventListener('mouseover', e => handleHover(e, 0.5));
// nav.addEventListener('mouseout', e => handleHover(e, 1));
// Approach 1 END


// Approach 2 START
const handleHover =  function (e) {
  if (e.target.matches('.nav__link')) {
    const clicked = e.target;
    const closestParent = clicked.closest('.nav');
    const siblings = closestParent.querySelectorAll('.nav__link, .nav__logo');

    siblings.forEach(el => {
      if (el !== clicked) el.style.opacity = this;
    })
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
// Approach 2 END

// Menu Fade Animation END