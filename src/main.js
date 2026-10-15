/**
 * W3rise Studio - Application Entry Point
 * Phase 2: Navigation & Hero Atmospheric Interactions
 */

import '../styles/main.css';

console.info(
  '%c W3RISE STUDIO %c Complete Digital Mastery ',
  'background: #432f2e; color: #feefb8; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
  'background: #c4dae8; color: #432f2e; font-weight: 500; padding: 4px 8px; border-radius: 4px;'
);

/**
 * Validates that core design tokens are loaded properly on the document root
 */
export function verifyDesignTokens() {
  const rootStyles = getComputedStyle(document.documentElement);
  const chocopie = rootStyles.getPropertyValue('--color-chocopie').trim();
  const blue = rootStyles.getPropertyValue('--color-blue').trim();
  const butter = rootStyles.getPropertyValue('--color-butter').trim();

  const isVerified = (
    chocopie.toLowerCase() === '#432f2e' &&
    blue.toLowerCase() === '#c4dae8' &&
    butter.toLowerCase() === '#feefb8'
  );

  return {
    verified: isVerified,
    tokens: { chocopie, blue, butter }
  };
}

/**
 * Header scroll state listener
 */
export function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile navigation drawer logic
 */
export function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .nav-cta-pill');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = (forceState) => {
    const isOpen = typeof forceState === 'boolean' 
      ? forceState 
      : !drawer.classList.contains('open');

    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const iconPath = toggleBtn.querySelector('path');
    if (iconPath) {
      if (isOpen) {
        // Cross / Close icon
        iconPath.setAttribute('d', 'M6 6L18 18M6 18L18 6');
      } else {
        // Hamburger icon
        iconPath.setAttribute('d', 'M3 6h18M3 12h18M3 18h18');
      }
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const tokenCheck = verifyDesignTokens();
  if (tokenCheck.verified) {
    document.documentElement.dataset.tokensReady = 'true';
  }

  initHeaderScroll();
  initMobileNav();
});
