/**
 * W3rise Studio - Application Entry Point
 * Phase 1: Foundational Setup & Design Token Initializer
 */

import '../styles/main.css';

console.info(
  '%c W3RISE STUDIO %c Strategy • Design • Code ',
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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const tokenCheck = verifyDesignTokens();
  if (tokenCheck.verified) {
    document.documentElement.dataset.tokensReady = 'true';
  } else {
    console.warn('W3rise Studio: One or more brand color tokens did not match target specification:', tokenCheck.tokens);
  }
});
