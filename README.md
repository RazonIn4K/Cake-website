# Pasteles de Elizabeth — Website

Spanish-first marketing site for **Elizabeth Dominguez's** custom cake business. The site is a quote funnel for made-to-order cakes (birthdays, weddings, quinceañeras, family events) — **not** an online store. Built with [Astro](https://astro.build) and Tailwind CSS, deployed on Vercel.

The customer flow is:

```text
Home → Gallery → Request quote → WhatsApp/email follow-up
```

Default logistics are **pickup by appointment**. Delivery is by request only and not guaranteed.

> The repository root is the active, canonical project. The nested folders `aunt-cooking-website/`, `absolute-accretion/`, and `zapping-zero/` are reference/archive only — do not treat them as the primary app.

## Getting Started

```bash
npm install
npm run dev
npm run build
# Lint frontmatter & markdown schemas
npm run check:content
```

The default language is Spanish (`/es/`). English content is served from `/en/`. Spanish copy is the source of truth; English follows.

## Project Structure

- `src/pages/` — Route definitions for Spanish (`es`) and English (`en`).
- `src/layouts/` — Shared layout with SEO defaults, navigation, and footer.
- `src/styles/` — Tailwind entry point and global tokens.
- `src/content/` — The `gallery` content collection with bilingual Markdown entries.
- `public/` — Static assets such as optimized images.

## Internationalization

Astro's built-in i18n routing handles the `/es/` and `/en/` prefixes. The root route redirects to `/es/` so Spanish remains primary.

## Content Tooling

- `src/content/config.ts` defines Zod schemas with strict validation and enforces gallery assets under `/public/images/gallery`.
- `src/content/utils.ts` includes helpers such as `assertTranslationCoverage` and `resolveLocalizedEntry` for locale fallbacks.
- Run `npm run check:content` to surface missing or invalid frontmatter before shipping.

## Milestones

See `MAPS.md` for the full build sequence.

- **Milestone 1A — Truthful visible site:** Spanish-first custom cake quote funnel on the primary path (home, gallery, quote-request pages). No workshop/digital-product/PPP positioning. _Current target._
- **Milestone 1B — WhatsApp-first quote form:** add `src/components/QuoteRequestForm.astro` (email optional, pickup default, delivery fields conditional, no backend yet).

## Constraints

- Do not publish Elizabeth's home address or any unverified phone/address/domain/social links.
- Do not present delivery as standard or guaranteed.
- Do not add payments, inventory, customer accounts, advanced CMS, or a custom backend in Milestone 1.
