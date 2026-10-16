/**
 * w3rise Studio — shared behaviours
 * Used by both the home page and the Studio page.
 */

const reduceMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   Scroll progress bar
   ========================================================================== */
export function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ==========================================================================
   Header scrolled state
   ========================================================================== */
export function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ==========================================================================
   Mobile overlay navigation
   ========================================================================== */
export function initOverlayNav() {
  const overlay = document.querySelector('.overlay-nav');
  const openBtn = document.querySelector('[data-nav-open]');
  const closeBtn = document.querySelector('[data-nav-close]');
  if (!overlay || !openBtn) return;

  const setOpen = (open) => {
    overlay.classList.toggle('is-open', open);
    overlay.setAttribute('aria-hidden', String(!open));
    openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';

    if (open && closeBtn) {
      closeBtn.focus();
    } else {
      openBtn.focus();
    }
  };

  openBtn.addEventListener('click', () => setOpen(true));
  closeBtn?.addEventListener('click', () => setOpen(false));

  overlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      setOpen(false);
    }
  });
}

/* ==========================================================================
   Reveal on scroll
   ========================================================================== */
export function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (reduceMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Scroll spy — highlights the active navigation link
   ========================================================================== */
export function initScrollSpy() {
  const links = Array.from(
    document.querySelectorAll('.nav__link[href*="#"]')
  ).filter((link) => {
    const id = link.getAttribute('href').split('#')[1];
    return id && document.getElementById(id);
  });

  if (!links.length || !('IntersectionObserver' in window)) return;

  const sections = links.map((link) => ({
    link,
    section: document.getElementById(link.getAttribute('href').split('#')[1]),
  }));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sections.forEach(({ link, section }) => {
          link.classList.toggle('is-active', section === entry.target);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(({ section }) => observer.observe(section));
}

/* ==========================================================================
   Seamless marquee — duplicates the track for a continuous loop
   ========================================================================== */
export function initMarquee() {
  document.querySelectorAll('.marquee').forEach((marquee) => {
    const track = marquee.querySelector('.marquee__track');
    if (!track || marquee.querySelectorAll('.marquee__track').length > 1) return;

    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marquee.appendChild(clone);
  });
}

/* ==========================================================================
   Back to top
   ========================================================================== */
export function initToTop() {
  const btn = document.querySelector('[data-to-top]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
  });
}

/* ==========================================================================
   Footer year
   ========================================================================== */
export function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

/**
 * Boot every shared behaviour. Safe to call on any page.
 */
export function initShared() {
  initScrollProgress();
  initHeaderState();
  initOverlayNav();
  initReveal();
  initScrollSpy();
  initMarquee();
  initToTop();
  initYear();
}
