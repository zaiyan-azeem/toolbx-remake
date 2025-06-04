// Swap logo & toggle topbar style on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Dropdown open/close logic (click and keyboard)
function toggleDropdown(dropdown, toggle, isOpen) {
  // Close all dropdowns first
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('open');
    const t = d.querySelector('.dropdown-toggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  });

  // If not already open, open this one
  if (!isOpen) {
    dropdown.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
}

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const dropdown = toggle.parentElement;
    const isOpen = dropdown.classList.contains('open');
    toggleDropdown(dropdown, toggle, isOpen);
  });

  // KEYBOARD ACCESSIBILITY: toggle with Enter or Space
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const dropdown = toggle.parentElement;
      const isOpen = dropdown.classList.contains('open');
      toggleDropdown(dropdown, toggle, isOpen);
    }
  });

  // Make toggles focusable
  toggle.setAttribute('tabindex', '0');
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

// Animate hero content and step cards when in view
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.hero-text, .hero-media, .step-card');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  targets.forEach(el => observer.observe(el));
});
