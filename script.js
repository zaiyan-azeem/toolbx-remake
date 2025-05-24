const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navList = document.querySelector('.nav-list');

mobileNavToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileNavToggle.classList.toggle('open');
});