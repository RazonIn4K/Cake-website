import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Canonical host = www (apex 308-redirects to www in Vercel). Keep this in sync
  // with the production domain so canonical tags don't point at a redirecting URL.
  site: 'https://www.cakesbyelizabethd.com',
  trailingSlash: 'always',
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  }
});
