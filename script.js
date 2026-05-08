// ─────────────────────────────────────────
// CUSTOM CURSOR
// ─────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}

animateRing();

// ─────────────────────────────────────────
// SPLASH SCREEN
// ─────────────────────────────────────────
const splash = document.getElementById('splash');
let splashDone = false;

// Lock scroll while splash is showing
document.body.style.overflow = 'hidden';

function enterSite() {
  if (splashDone) return;
  splashDone = true;
  splash.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Auto-dismiss after 5.5 seconds
setTimeout(enterSite, 5500);

// ─────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ─────────────────────────────────────────
// SMOOTH SCROLL FOR NAV LINKS
// ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});