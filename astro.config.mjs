// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Update this with your actual domain
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "es", // Spanish is the default
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // `sitio.com/` is Spanish, `sitio.com/en/` is English
    },
  },
  build: {
    assets: 'assets'
  }
});
