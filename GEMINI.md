# GEMINI.md — Repo Sweep Guidance

This file guides Gemini CLI / Gemini Code Assist when used for whole-repo analysis on this project.

## Role

Gemini is primarily the **whole-repo consistency sweep** lane for this repository.

Analyze and report first. Do not edit files unless David explicitly asks for implementation.

## Project Identity

```text
Project: Elizabeth Dominguez Cakes website overhaul
Repo root: /Users/davidortiz/Git-Projects/Aunt-website
Stack: Astro 4 + Tailwind 3 + Vercel
Business model: custom cake quote funnel, not online store
Primary language: Spanish
Secondary language: English
Default logistics: pickup by appointment
Delivery: by request only, not guaranteed
```

## Source of Truth

The active project is the repository root.

Nested folders are reference/archive only:

```text
aunt-cooking-website/
absolute-accretion/
zapping-zero/
```

Do not treat nested prototypes as the active app.

## Approved Direction

The site should become a Spanish-first custom cake inquiry funnel:

```text
Home → Gallery → Request quote → WhatsApp/email follow-up
```

The site should not be treated as:

- an online store
- a delivery operation
- a workshop/course platform
- a Gumroad product funnel
- a PPP pricing experiment
- a legal/compliance authority

## Sweep Checklist

When asked for a repo sweep, search for these risks.

### 1. Old business-model language

Find active-root references to:

- cooking workshops
- live workshops
- digital products
- PPP pricing
- Gumroad
- calendars
- generic cooking community
- offer ladder

### 2. Incorrect project guidance

Find docs that still claim:

- `aunt-cooking-website/` is primary
- Astro 5 is the active stack when root package uses Astro 4
- commands should run from a nested folder
- payments/Gumroad are current goals

### 3. Fake or placeholder public details

Find visible or metadata references to:

- fake phone numbers
- fake addresses
- fake emails
- fake social links
- `https://example.com` without TODO handling
- fake reviews/ratings

### 4. Route and locale inconsistencies

Check whether:

- Spanish and English pages disagree in meaning
- nav labels point to old offers routes
- quote/request labels are inconsistent
- Spanish is still the source of truth
- English does not add claims Spanish does not make

### 5. Privacy and product risks

Find cases where:

- delivery is presented as standard/guaranteed
- Elizabeth’s home address is public
- full delivery address is required too early
- email is required unnecessarily
- allergies/timelines/pricing are overpromised

### 6. Build/config risks

Check for:

- broken imports
- deleted components still referenced
- stale content schemas breaking active pages
- bad Astro syntax
- nav links to removed routes

## Output Format

Use this structure:

```markdown
## Summary verdict
[PASS / PASS WITH FIXES / BLOCK]

## Files with stale business-model references
- file:line — issue

## Files with fake/placeholder details
- file:line — issue

## Route/navigation inconsistencies
- file:line — issue

## Privacy/product risks
- file:line — issue

## Build/config risks
- file:line — issue

## Recommended minimal fix list
1.
2.
3.
```

## Important Constraint

Do not recommend expanding scope into backend, payments, Formspree, CMS migration, or legal/compliance copy unless it fixes a current blocker.