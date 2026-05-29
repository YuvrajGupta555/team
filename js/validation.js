/* =============================================
   YUVRAJ PORTFOLIO — validation.js
   Contact Form JS Validation (SLO C)
   ============================================= */
'use strict';

const rules = {
  name:    { required:true, minLength:2, maxLength:60, pattern:/^[a-zA-Z\s\-']+$/, messages:{ required:'Name is required.', minLength:'Name must be at least 2 characters.', maxLength:'Name cannot exceed 60 characters.', pattern:'Name can only contain letters, spaces, hyphens, and apostrophes.' } },
  email:   { required:true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, messages:{ required:'Email address is required.', pattern:'Please enter a valid email address.' } },
  subject: { required:true, minLength:4, maxLength:100, messages:{ required:'Subject is required.', minLength:'Subject must be at least 4 characters.', maxLength:'Subject cannot exceed 100 characters.' } },
  message: { required:true, minLength:20, maxLength:1000, messages:{ required:'Message is required.', minLength:'Message must be at least 20 characters.', maxLength:'Message cannot exceed 1000 characters.' } }
};

function validate(name, value) {
  const r = rules[name]; if (!r) return null;
  if (r.required && !value.trim()) return r.messages.required;
  if (!value.trim()) return null;
  if (r.minLength && value.trim().length < r.minLength) return r.messages.minLength;
  if (r.maxLength && value.trim().length > r.maxLength) return r.messages.maxLength;
  if (r.pattern && !r.pattern.test(value.trim())) return r.messages.pattern;
  return null;
}

function showErr(id, msg) {
  const f = document.getElementById(id), e = document.getElementById(id+'Error');
  if (f) { f.classList.add('error'); f.classList.remove('success'); }
  if (e) { e.textContent = msg; e.classList.add('show'); }
}

function clearErr(id) {
  const f = document.getElementById(id), e = document.getElementById(id+'Error');
  if (f) { f.classList.remove('error'); f.classList.add('success'); }
  if (e) e.classList.remove('show');
}

function initLive() {
  Object.keys(rules).forEach(name => {
    const f = document.getElementById(name); if (!f) return;
    f.addEventListener('blur', () => { const e = validate(name, f.value); e ? showErr(name, e) : clearErr(name); });
    f.addEventListener('input', () => { if (f.classList.contains('error')) { if (!validate(name, f.value)) clearErr(name); } });
  });
}

function initCounter() {
  const m = document.getElementById('message'), c = document.getElementById('msgCounter');
  if (!m || !c) return;
  m.addEventListener('input', () => {
    const n = m.value.length;
    c.textContent = n + ' / 1000';
    c.style.color = n > 900 ? 'var(--red)' : 'var(--txt3)';
  });
}

function initForm() {
  const form = document.getElementById('contactForm'); if (!form) return;
  initLive(); initCounter();
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    Object.keys(rules).forEach(name => {
      const f = document.getElementById(name); if (!f) return;
      const err = validate(name, f.value);
      if (err) { showErr(name, err); ok = false; } else clearErr(name);
    });
    const suc = document.getElementById('formSuccess'), err = document.getElementById('formError'), btn = document.getElementById('submitBtn');
    if (!ok) {
      if (err) { err.textContent = '[ERROR] Please fix the highlighted fields.'; err.classList.add('show'); setTimeout(() => err.classList.remove('show'), 4000); }
      const first = form.querySelector('.fc.error'); if (first) first.scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }
    btn.disabled = true; btn.textContent = 'TRANSMITTING...';
    setTimeout(() => {
      if (suc) { suc.textContent = '[SUCCESS] Message transmitted. Yuvraj will respond within 24 hours.'; suc.classList.add('show'); }
      if (err) err.classList.remove('show');
      form.reset();
      Object.keys(rules).forEach(name => { const f = document.getElementById(name); if (f) f.classList.remove('success','error'); });
      const cnt = document.getElementById('msgCounter'); if (cnt) { cnt.textContent = '0 / 1000'; cnt.style.color = ''; }
      btn.disabled = false; btn.textContent = 'SEND MESSAGE';
      setTimeout(() => suc && suc.classList.remove('show'), 6000);
    }, 1600);
  });
}

document.addEventListener('DOMContentLoaded', initForm);
