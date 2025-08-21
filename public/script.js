// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
  });
}

// Current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form -> mailto fallback
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent('Заявка с сайта — Бытовые услуги Минск');
    const body = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\n\nЗадача:\n${message}`);
    window.location.href = `mailto:info@your-domain.by?subject=${subject}&body=${body}`;
  });
}

// Smooth scroll focus management
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});


