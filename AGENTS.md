# Repository Guidelines — Elizabeth Dominguez Cakes

## Current Focus

This repository is being overhauled into a Spanish-first custom cake quote funnel for Elizabeth Dominguez.

The site should help customers:

1. See Elizabeth’s cake work.
2. Understand the pickup-first order process.
3. Submit enough details for a quote.
4. Continue through WhatsApp/email follow-up.

The site is **not** an online store in Milestone 1.

## Canonical Project Root

Active implementation target:

```text
/Users/davidortiz/Git-Projects/Aunt-website
```

The repository root is the source of truth.

Legacy/reference folders:

```text
aunt-cooking-website/
absolute-accretion/
zapping-zero/
```

Do not edit nested prototype folders unless David explicitly asks to migrate something.

## Product Constraints

- Spanish-first; English follows Spanish.
- Pickup by appointment is the default.
- Delivery is by request only and not guaranteed.
- Do not publish Elizabeth’s home address.
- Do not add payment, inventory, accounts, advanced CMS, or custom backend in Milestone 1.
- Do not publish fake phone/address/domain/social links.
- Do not claim licensing, LLC status, registration, or compliance unless verified.
- Do not copy `aunt-cooking-website/src/components/CakeOrderForm.astro` as-is.

## Project Structure

- `src/pages/` — route definitions for Spanish (`es`) and English (`en`).
- `src/layouts/BaseLayout.astro` — shared metadata, header, navigation, footer.
- `src/components/` — locale-aware reusable UI components.
- `src/content/` — current content collections. Some old `offers` content may remain temporarily but should not drive the Milestone 1 user flow.
- `public/images/gallery/` — gallery assets. Scrub metadata before committing real customer images.
- `MAPS.md` — repo-level AI orchestration rules.

## Commands

Use Node 18+.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run check:content
```

Minimum validation before merge:

```bash
npm run build
```

Run `npm run check:content` after touching content collections or markdown frontmatter.

## Milestone 1A — Truthful Visible Site

Goal: remove the wrong workshop/digital-product/PPP business model from the primary visible path.

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

Acceptance:

- `/es/` and `/en/` present custom cake inquiry positioning.
- Nav points to gallery and quote request.
- Contact pages read as quote-request pages.
- No homepage workshop/digital-product/PPP/Gumroad/calendar copy.
- Pickup by appointment is clear.
- Delivery is by request only.
- Build passes.

## Milestone 1B — Quote Form MVP

Goal: implement a WhatsApp-first inquiry form without backend complexity.

Rules:

- Email optional.
- Pickup default.
- Delivery request reveals optional delivery fields.
- Full delivery address is not required by default.
- Inspiration photo is sent by WhatsApp after form, not uploaded.
- WhatsApp number is centralized as an obvious TODO until Elizabeth’s real number is provided.

## Coding Practices

- Prefer small, coherent changes by milestone.
- Use existing Astro + Tailwind patterns.
- Do not add dependencies unless the task explicitly requires it.
- Keep bilingual copy centralized inside components where practical.
- Avoid hidden placeholder values.
- Use privacy-preserving copy when details are unknown.

## AI Collaboration

Follow `MAPS.md`.

Default roles:

- Claude Code: implementation.
- Codex CLI: read-only diff review.
- Grok/Grok Build: contrarian product/copy/privacy review.
- Gemini CLI/Gemini Code Assist: whole-repo stale-reference sweep.
- David: final decision and merge gate.

## Deployment

Vercel deploys via:

```text
npm run build → dist/
```

Keep `vercel.json` aligned if build behavior changes.

Secrets belong in ignored `.env` files. Do not commit phone numbers, API keys, or private business details unless Elizabeth explicitly approves public use.
