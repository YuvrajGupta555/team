/* ╔═══════════════════════════════════════════╗
   ║  YUVRAJ · TERMINAL NOIR                   ║
   ║  main.js — impeccable edition             ║
   ╚═══════════════════════════════════════════╝ */
'use strict';

/* ── Custom Cursor ─────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100, rx = -100, ry = -100;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function loop() {
    raf = requestAnimationFrame(loop);
    // ring lags for smooth trailing
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
  })();

  // Hover state on interactive elements
  const sel = 'a,button,.btn,.card,.fc,input,textarea,select,.filter-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(sel)) document.body.classList.add('cur-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(sel)) document.body.classList.remove('cur-hover');
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

/* ── Scroll Progress Bar ───────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;
  const update = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const pct = scrollTop / (scrollHeight - clientHeight);
    bar.style.transform = `scaleX(${pct})`;
  };
  window.addEventListener('scroll', update, { passive: true });
}

/* ── Matrix Rain Canvas ────────────────────── */
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const chars  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>{}[]|\\/*+-=;:';
  let   cols, drops;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols  = Math.floor(canvas.width / 16);
    drops = Array(cols).fill(1);
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(4,8,15,0.055)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff87';
    ctx.font = '13px "Share Tech Mono", monospace';
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = Math.random() * 0.7 + 0.1;
      ctx.fillText(ch, i * 16, y * 16);
      ctx.globalAlpha = 1;
      if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 48);
}

/* ── Typing Effect ─────────────────────────── */
function initTyping(el, phrases, speed = 82, pause = 2200) {
  if (!el) return;
  let pi = 0, ci = 0, del = false;
  const txt = el.querySelector('.ttext');
  if (!txt) return;
  function tick() {
    const p = phrases[pi];
    txt.textContent = p.substring(0, ci);
    if (!del && ci < p.length)       { ci++; setTimeout(tick, speed); }
    else if (!del && ci === p.length){ del = true; setTimeout(tick, pause); }
    else if (del && ci > 0)          { ci--; setTimeout(tick, speed / 2); }
    else { del = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 400); }
  }
  tick();
}

/* ── 3D Card Tilt ──────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r    = card.getBoundingClientRect();
      const x    = e.clientX - r.left;
      const y    = e.clientY - r.top;
      const cx   = r.width  / 2;
      const cy   = r.height / 2;
      const rotY =  (x - cx) / cx * 6;  // ±6deg
      const rotX = -(y - cy) / cy * 5;  // ±5deg
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── Scroll Reveal ─────────────────────────── */
function initReveal() {
  const items = document.querySelectorAll('.rev');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
}

/* ── Skill Bars ────────────────────────────── */
function initSkillBars() {
  const fills = document.querySelectorAll('.sk-fill');
  if (!fills.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        setTimeout(() => e.target.classList.add('loaded'), 900);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => io.observe(f));
}

/* ── Counters ──────────────────────────────── */
function animateN(el, target, dur = 1800) {
  let start;
  const step = ts => {
    if (!start) start = ts;
    const p  = Math.min((ts - start) / dur, 1);
    const ep = p < 0.5 ? 2*p*p : -1+(4-2*p)*p;
    el.textContent = Math.floor(ep * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateN(e.target, +e.target.dataset.count); io.unobserve(e.target); } });
  }, { threshold: 0.5 });
  els.forEach(e => io.observe(e));
}

/* ── Active Nav Link ───────────────────────── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page ||
      (page === '' && a.getAttribute('href') === 'index.html'));
  });
}

/* ── Hamburger ─────────────────────────────── */
function initHamburger() {
  const btn   = document.getElementById('hbg');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => { const o = links.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

/* ── Navbar scroll ─────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const upd = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', upd, { passive: true });
  upd();
}

/* ── Ripple on buttons ─────────────────────── */
function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const r  = btn.getBoundingClientRect();
      btn.style.setProperty('--rx', ((e.clientX - r.left) / r.width * 100) + '%');
      btn.style.setProperty('--ry', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });
}

/* ── Boot ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initNavScroll();
  initHamburger();
  initCursor();
  initScrollProgress();
  initReveal();
  initSkillBars();
  initCounters();
  initCardTilt();
  initRipple();
  initMatrix();

  const typEl = document.getElementById('typingEl');
  if (typEl) {
    initTyping(typEl, [
      'Cybersecurity Enthusiast',
      'Web Developer',
      'IT Student @ WIHE',
      'Ethical Hacker in Training',
      'Database Designer',
      'PUBG Mobile Player 🎮',
    ]);
  }
});
