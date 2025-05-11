'use strict';

// Modal window START

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const body = document.body;

const openModal = function (e) {
  e.preventDefault();

  body.style.overflow = 'hidden';
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  body.style.overflow = '';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal => btnOpenModal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Modal window END


// Smooth Scrolling START

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

// Smooth Scrolling END