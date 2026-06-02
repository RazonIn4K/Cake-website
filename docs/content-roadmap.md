# Content Integration Roadmap

## 2.1 Content collection schemas
- Create `src/content/config.ts` with collections for `offers`, `gallery`, and `testimonials` using Zod validators.
- Enforce bilingual parity by grouping documents under `es/` and `en/` subdirectories.
- Required fields:
  - Offers: `title`, `summary`, `description`, `price`, `cta`, `pppNotes`, `slug`, `order`, `seo` block.
  - Gallery: `title`, `image`, `alt`, `category`, optional `featured` and `locale`.
  - Testimonials: `author`, `quote`, `locale`, optional `rating`, `relatedOffer`.

## 2.2 Sample content population
- Mirror the existing Obsidian vault structure by creating Markdown files inside `src/content/{offers,gallery,testimonials}/es`.
- Add English translations in matching filenames within `/en`.
- Store images referenced by gallery content in `public/images/gallery` using `jpg` + `webp` pairs and descriptive filenames.

## 2.3 Validation & developer experience
- Add helper utilities in `src/content/utils.ts` for resolving localized entries and reporting missing translations.
- Configure Astro `contentCollections` with strict type exports to power components.
- Provide `pnpm run check:content` script (wrapper around `astro check --content`) once dependencies are installed.
- Surface friendly build errors by composing Zod messages (e.g., `title` missing, invalid PPP multiplier range).

## Tooling prerequisites
- Run `npm install` once network access is available to download dependencies listed in `package.json`.
- Configure VS Code with the Astro + Tailwind extensions for real-time linting.
