# CLAUDE.md — Claude Code Guidance

This file guides Claude Code when implementing changes in this repository.

## Project Identity

This repository is the active root Astro project for Elizabeth Dominguez’s custom cake website overhaul.

```text
Repo root: /Users/davidortiz/Git-Projects/Aunt-website
Stack: Astro 4 + Tailwind 3 + Vercel
Primary language: Spanish
Secondary language: English
Business model: custom cake quote funnel, not online store
Default logistics: pickup by appointment
Delivery: by request only, not guaranteed
```

The purpose of the site is to help customers see Elizabeth’s cake work, understand the pickup-first ordering process, submit enough details for a quote, and continue via WhatsApp/email follow-up.

## Source of Truth

The repository root is the active implementation target.

Do **not** treat these nested folders as the primary app:

```text
aunt-cooking-website/
absolute-accretion/
zapping-zero/
```

They are reference/archive only unless David explicitly asks to migrate something from them.

The old `aunt-cooking-website/src/components/CakeOrderForm.astro` may be inspected for field ideas, but must **not** be copied as-is because it has delivery-first assumptions, placeholder WhatsApp values, and stale backend expectations.

## Current Milestone

Follow `MAPS.md`.

Current build target:

```text
Milestone 1A: Truthful visible site
```

Goal: remove the old cooking/workshop/digital-product/PPP positioning from the primary visible path and replace it with a Spanish-first pickup-first custom cake quote funnel.

Then:

```text
Milestone 1B: WhatsApp-first quote form MVP
```

## Non-Negotiable Constraints

- Do not start from scratch.
- Do not edit nested prototype folders unless explicitly asked.
- Do not add payment, inventory, customer accounts, advanced CMS, or custom backend in Milestone 1.
- Do not publish Elizabeth’s home address.
- Do not make delivery sound standard or guaranteed.
- Do not publish fake phone/address/domain/social links.
- Do not claim licensing, LLC status, registration, or legal compliance unless verified.
- Keep Spanish as the source of truth; English follows.
- Prefer minimal, coherent milestone slices over broad rewrites.

## Commands

Run from the repository root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run check:content
```

Minimum validation before handing work back:

```bash
npm run build
```

Run `npm run check:content` after touching content collections or Markdown frontmatter.

## Project Structure

```text
src/pages/                Route-based pages
src/pages/es/             Spanish pages
src/pages/en/             English pages
src/layouts/BaseLayout.astro
src/components/           Reusable components
src/content/              Content collections
src/styles/global.css     Global Tailwind entry
public/images/gallery/    Gallery assets
MAPS.md                   Repo-level AI orchestration rules
```

## Milestone 1A Implementation Notes

Likely files:

```text
README.md
AGENTS.md
CLAUDE.md
GEMINI.md
MAPS.md
astro.config.mjs
src/layouts/BaseLayout.astro
src/pages/es/index.astro
src/pages/en/index.astro
src/pages/es/contacto/index.astro
src/pages/en/contact/index.astro
```

Visible copy direction:

- Brand placeholder: `Pasteles de Elizabeth` / `Elizabeth’s Cakes`
- Spanish CTA: `Solicitar cotización`
- English CTA: `Request quote`
- Spanish hero: `Pasteles hechos por encargo para cumpleaños, bodas y celebraciones`
- English hero: `Made-to-order cakes for birthdays, weddings, and celebrations`

Do not link to workshops, digital products, PPP pricing, Gumroad, or calendars from homepage/nav.

It is acceptable to leave old `offers` routes and collections untouched but unlinked during Milestone 1A.

## Milestone 1B Implementation Notes

Create:

```text
src/components/QuoteRequestForm.astro
```

Rules:

- Props: `lang: 'es' | 'en'`
- Keep bilingual labels in a local `copy` object.
- Email optional.
- Pickup default.
- Delivery fields hidden unless delivery is requested.
- Full delivery address not required by default.
- Inspiration photos handled by WhatsApp follow-up copy, not upload.
- WhatsApp number centralized as obvious TODO until Elizabeth provides real number.
- No backend or Formspree yet.

## Collaboration Discipline

Claude Code is the implementation lane, not the final reviewer.

After implementation:

1. Run local validation if possible.
2. Summarize changed files.
3. List assumptions and TODOs.
4. Hand off to Codex CLI for read-only review using the MAPS prompt.

Do not silently expand scope.