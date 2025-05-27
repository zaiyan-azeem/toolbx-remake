// mobile menu toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navList         = document.querySelector('.nav-list');

mobileNavToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileNavToggle.classList.toggle('open');
});

// change navbar on scroll
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('solid');
    header.classList.remove('transparent');
  } else {
    header.classList.add('transparent');
    header.classList.remove('solid');
  }
});
