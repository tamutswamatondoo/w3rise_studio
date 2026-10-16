/**
 * w3rise Studio — home page entry point
 */

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/home.css';

import { initShared } from './shared.js';

/* ==========================================================================
   Selected work — filtering + cursor-following preview
   ========================================================================== */
export function initWorkLedger() {
  const chips = Array.from(document.querySelectorAll('.chip[data-filter]'));
  const items = Array.from(document.querySelectorAll('.ledger__item'));
  const preview = document.querySelector('.work__preview');
  const previewImg = preview?.querySelector('img');
  if (!items.length) return;

  /* ---- counts ---------------------------------------------------------- */
  chips.forEach((chip) => {
    const filter = (chip.dataset.filter || 'all').toLowerCase();
    const count = chip.querySelector('[data-count]');
    if (!count) return;

    count.textContent = String(
      filter === 'all'
        ? items.length
        : items.filter((item) => matches(item, filter)).length
    );
  });

  /* ---- filtering ------------------------------------------------------- */
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = (chip.dataset.filter || 'all').toLowerCase();

      chips.forEach((c) => {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');

      items.forEach((item) => {
        item.classList.toggle('is-hidden', !matches(item, filter));
      });

      hidePreview();
    });
  });

  /* ---- cursor-following preview ---------------------------------------- */
  const showPreview = (item) => {
    if (!preview || !previewImg) return;
    const thumb = item.querySelector('.ledger__thumb img');
    if (!thumb) return;

    previewImg.src = thumb.getAttribute('src');
    previewImg.alt = thumb.getAttribute('alt') || '';
    preview.classList.add('is-visible');
  };

  const movePreview = (event) => {
    if (!preview) return;
    preview.style.left = `${event.clientX}px`;
    preview.style.top = `${event.clientY}px`;
  };

  items.forEach((item) => {
    const link = item.querySelector('.ledger__link');
    if (!link) return;

    link.addEventListener('mouseenter', () => showPreview(item));
    link.addEventListener('mousemove', movePreview);
    link.addEventListener('mouseleave', hidePreview);
    link.addEventListener('focus', () => showPreview(item));
    link.addEventListener('blur', hidePreview);
  });
}

function matches(item, filter) {
  if (filter === 'all') return true;
  const cats = (item.dataset.cats || '').toLowerCase().split(/\s+/);
  return cats.includes(filter);
}

function hidePreview() {
  document.querySelector('.work__preview')?.classList.remove('is-visible');
}

/* ==========================================================================
   Capabilities accordion
   ========================================================================== */
export function initAccordion() {
  const items = Array.from(document.querySelectorAll('.acc'));
  if (!items.length) return;

  const setOpen = (current, open) => {
    current.classList.toggle('is-open', open);
    current
      .querySelector('.acc__head')
      ?.setAttribute('aria-expanded', String(open));
  };

  items.forEach((item) => {
    const head = item.querySelector('.acc__head');
    if (!head) return;

    if (item.classList.contains('is-open')) {
      head.setAttribute('aria-expanded', 'true');
    }

    head.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => setOpen(other, false));
      setOpen(item, willOpen);
    });
  });
}

/* ==========================================================================
   Contact form
   ========================================================================== */
export function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const feedback = form.querySelector('.form-feedback');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!feedback) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const fail = (msg) => {
      feedback.textContent = msg;
      feedback.className = 'form-feedback is-error';
    };

    if (name.length < 2) return fail('Please add your name.');
    if (!emailRe.test(email)) return fail('Please add a valid email address.');
    if (message.length < 10) return fail('Tell us a little more about the project.');

    feedback.textContent =
      'Thanks — your brief is with us. We reply within one business day.';
    feedback.className = 'form-feedback is-success';
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initShared();
  initWorkLedger();
  initAccordion();
  initContactForm();
});
