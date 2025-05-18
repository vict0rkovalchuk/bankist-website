'use strict';

// Reveal Section On Scroll START

const sections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

sections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Reveal Section On Scroll END