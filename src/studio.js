/**
 * w3rise Studio — Studio page entry point
 */

import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/studio.css';

import { initShared } from './shared.js';

document.addEventListener('DOMContentLoaded', () => {
  initShared();
});
