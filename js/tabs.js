'use strict';

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  const index = +clicked.dataset.tab - 1;

  tabs.forEach((item) => item.classList.remove('operations__tab--active'));
  tabsContent.forEach(item => item.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  tabsContent[index].classList.add('operations__content--active');
});