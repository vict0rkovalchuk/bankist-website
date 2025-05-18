'use strict';

// Lazy Loading Images START

const imgTargets = document.querySelectorAll('img[data-src]');

const loadIMg = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    
    const target = entry.target;

    target.src = target.dataset.src;

    target.addEventListener('load', function () {
      target.classList.remove('lazy-img');
    });

    observer.unobserve(target);
  });
}

const imgObserver = new IntersectionObserver(loadIMg, {
  root: null,
  threshold: 0.3,
  // rootMargin: '200px'
});

imgTargets.forEach(function (imgTarget) {
  imgObserver.observe(imgTarget);
});

// Lazy Loading Images END