import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cakesbyelizabethd.com',
  trailingSlash: 'always',
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  }
});
