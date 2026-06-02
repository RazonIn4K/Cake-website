# MAPS Build System — Elizabeth Dominguez Cakes

This repository uses a project-specific MAPS workflow to coordinate AI agents without letting them drift from the business goal.

## Canonical project identity

```text
Project: Elizabeth Dominguez Cakes website overhaul
Repo root: /Users/davidortiz/Git-Projects/Aunt-website
Stack: Astro 4 + Tailwind 3 + Vercel
Business model: custom cake quote funnel, not online store
Primary language: Spanish
Secondary language: English
Default logistics: pickup by appointment
Delivery: by request only, not guaranteed
Milestone 1 goal: truthful static funnel with WhatsApp-first quote request
```

## Source of truth

The active implementation target is the repository root.

```text
/Users/davidortiz/Git-Projects/Aunt-website
```

These nested folders are reference/archive only unless David explicitly says to migrate something from them:

```text
aunt-cooking-website/
absolute-accretion/
zapping-zero/
```

Do not edit nested prototype folders during normal implementation.

## Non-negotiables

- Do not start from scratch.
- Do not treat `aunt-cooking-website/` as the primary project.
- Do not copy the nested `CakeOrderForm.astro` as-is.
- Do not publish Elizabeth’s home address.
- Do not make delivery the default.
- Do not add payments, inventory, accounts, advanced CMS, or custom backend in Milestone 1.
- Do not publish fake phone/address/domain/social links.
- Do not claim licensing, LLC status, registration, or legal compliance unless verified.
- Spanish copy is the source of truth; English follows.

## AI routing

| Lane | Tool | Role |
|---|---|---|
| Lead implementation | Claude Code | Multi-file implementation in the real repo |
| Independent review | Codex CLI | Read-only diff review and bug finding |
| Contrarian critique | Grok / Grok Build | Product, privacy, copy, and overpromise critique |
| Whole-repo sweep | Gemini CLI / Gemini Code Assist | Find stale references and cross-file inconsistencies |
| Runtime truth | Local terminal | `npm run build`, `npm run preview`, manual QA |
| Final decision | David | Scope, merge, and launch gate |

## Default build loop

```text
1. Choose one milestone slice.
2. Give Claude Code a bounded implementation prompt.
3. Run local checks.
4. Give Codex CLI the diff for read-only review.
5. Fix blockers.
6. Use Grok for contrarian copy/privacy review when the visible customer flow changes.
7. Use Gemini for whole-repo stale-reference sweep before merge.
8. Record decisions in the project command center / MAPS run log.
```

## Current milestone sequence

### Milestone 1A — Truthful visible site

Goal: no visitor should see the old workshop/digital-product/PPP business model on the primary path.

Likely files:

```text
README.md
AGENTS.md
CLAUDE.md
GEMINI.md
astro.config.mjs
src/layouts/BaseLayout.astro
src/pages/es/index.astro
src/pages/en/index.astro
src/pages/es/contacto/index.astro
src/pages/en/contact/index.astro
```

Acceptance:

- `/es/` and `/en/` present a custom cake quote funnel.
- Visible nav says `Solicitar cotización` / `Request quote`.
- Contact pages are quote-request intro pages.
- Workshop, digital-product, PPP, Gumroad, and calendar language is removed from the visible primary flow.
- Pickup by appointment is clear.
- Delivery is clearly by request only.
- Build passes.

### Milestone 1B — WhatsApp-first quote form

Goal: add a safe inquiry form without backend complexity.

Likely files:

```text
src/components/QuoteRequestForm.astro
src/pages/es/contacto/index.astro
src/pages/en/contact/index.astro
```

Acceptance:

- Email optional.
- Pickup default.
- Delivery fields conditional and optional.
- No full address required by default.
- WhatsApp message is readable and structured.
- No customer data stored on site infrastructure.
- Build passes.

## Commands

Run from repo root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run check:content
```

Use `npm run build` as the minimum validation gate before any merge.

## Related vault control files

Project command center and MAPS prompts live in the Obsidian vault:

```text
1200-PROFESSIONAL/Upwork/Active Projects/Elizabeth_Dominguez_Cakes/00-Command-Center.md
1200-PROFESSIONAL/Upwork/Active Projects/Elizabeth_Dominguez_Cakes/MAPS/00-MAPS-Build-System.md
1200-PROFESSIONAL/Upwork/Active Projects/Elizabeth_Dominguez_Cakes/MAPS/01-Milestone-Backlog.md
1200-PROFESSIONAL/Upwork/Active Projects/Elizabeth_Dominguez_Cakes/MAPS/prompts/
```
