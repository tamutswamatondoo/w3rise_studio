import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const page = (name) => fileURLToPath(new URL(`./${name}`, import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: page('index.html'),
        studio: page('studio.html'),
      },
    },
  },
});
