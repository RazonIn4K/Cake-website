# Architecture

This repository's system map is an [Archify](https://tt-a1i.github.io/archify/) specification.

- Spec: `docs/archify/cake-architecture.json`
- Type: architecture (showcase)
- Captured: 2026-08-27

## Summary

Cakes by Elizabeth is a static Astro 4 site deployed on Vercel at www.cakesbyelizabethd.com with Spanish-first routes (/es/, /es/galeria/, /es/contacto/) and English twins. The QuoteRequestForm POSTs JSON to Web3Forms (no server route or on-site storage). A WhatsApp fallback builds a pre-filled link to +1 815-501-2963 when JS is off or the POST fails.

## Regenerate the interactive HTML

Do not commit the generated HTML (~700KB).

```bash
npx -y skills add tt-a1i/archify --skill archify --agent cursor --global --copy --yes
node bin/archify.mjs deliver architecture docs/archify/cake-architecture.json /tmp/cake.html --quality showcase
```
