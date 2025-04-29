// @ts-check
import { defineConfig } from 'astro/config';
import animations from 'tailwindcss-animated'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});