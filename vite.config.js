/**
 * W3rise Studio - Vite Config (Redesign v3)
 * Single page build with vanilla ES modules.
 * System fonts only. No external deps. Offline-first.
 */

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@styles': '/styles',
      '@src': '/src'
    }
  },
  css: {
    preload: false
  }
})