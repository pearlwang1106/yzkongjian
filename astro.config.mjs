// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pearlwang1106.github.io',
  base: '/yzkongjian/',
  vite: {
    plugins: [tailwindcss()]
  }
});