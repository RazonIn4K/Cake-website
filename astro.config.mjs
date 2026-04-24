// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Update this with your actual domain
  i18n: {
    defaultLocale: "es", // Spanish is the default
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // `sitio.com/` is Spanish, `sitio.com/en/` is English
    },
  },
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
