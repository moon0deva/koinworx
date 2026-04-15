/* ============================================================
   KoinWorx — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Nav shadow ── */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ── Mobile hamburger ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => (s.style.transform = '', s.style.opacity = ''));
      }
    });
  }

  /* ── AOS (Animate On Scroll) — custom lightweight ── */
  const aosEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.aosDelay || 0;
        setTimeout(() => e.target.classList.add('aos-animate'), +delay);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  aosEls.forEach(el => observer.observe(el));

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObs.observe(el));

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Form submission (Formspree placeholder) ── */
  const form = document.querySelector('.contact-form-el');
  const formMsg = document.querySelector('.form-message');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
      try {
        const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok) {
          if (formMsg) { formMsg.textContent = '✓ Message sent! We\'ll be in touch shortly.'; formMsg.style.color = '#22C55E'; }
          form.reset();
        } else {
          if (formMsg) { formMsg.textContent = 'Something went wrong. Please email us directly.'; formMsg.style.color = '#EF4444'; }
        }
      } catch {
        if (formMsg) { formMsg.textContent = 'Network error. Please try again.'; formMsg.style.color = '#EF4444'; }
      }
      btn.disabled = false;
      btn.textContent = 'Send Message';
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ── Hero floating card animation ── */
  const cards = document.querySelectorAll('.hero-card-main');
  cards.forEach((card, i) => {
    card.style.animation = `float ${3 + i * .7}s ease-in-out ${i * .4}s infinite alternate`;
  });

});

/* ── CSS for float animation ── */
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    from { transform: translateY(0px); }
    to   { transform: translateY(-10px); }
  }
`;
document.head.appendChild(style);
