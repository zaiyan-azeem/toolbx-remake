const navbar = document.querySelector('.navbar');

// Swap logo & toggle topbar style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Dropdowns open/close on click
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const dropdown = toggle.parentElement;
    const isOpen = dropdown.classList.contains('open');

    // Close all dropdowns first
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('open');
      const t = d.querySelector('.dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });

    // If the clicked one was not open, open it
    if (!isOpen) {
      dropdown.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

// Close dropdowns when clicking outside
window.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.open').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
  }
});

// Animate hero content in view
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.hero-text, .hero-media');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  els.forEach(el => observer.observe(el));
});
