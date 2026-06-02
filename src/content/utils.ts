import type { CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from './config';

export const TRANSLATABLE_COLLECTIONS = ['gallery'] as const;
export type TranslatableCollection = (typeof TRANSLATABLE_COLLECTIONS)[number];

export type MissingTranslation = {
  slug: string;
  missing: Locale[];
};

const toLowerKebab = (value: string) => value.trim().toLowerCase();

const stripLocalePrefix = (value: string) => value.replace(/^\/?(?:es|en)\//, '');

const getFrontmatterSlug = <C extends TranslatableCollection>(entry: CollectionEntry<C>): string | undefined => {
  const possibleSlug = (entry.data as Record<string, unknown>).slug;
  return typeof possibleSlug === 'string' ? possibleSlug : undefined;
};

const normalizeSlug = <C extends TranslatableCollection>(entry: CollectionEntry<C>): string => {
  const raw = getFrontmatterSlug(entry) ?? entry.slug;
  return toLowerKebab(stripLocalePrefix(raw));
};

const resolveLocale = <C extends TranslatableCollection>(entry: CollectionEntry<C>): Locale => {
  const locale = (entry.data as Record<string, unknown>).locale;
  return (locale as Locale | undefined) ?? DEFAULT_LOCALE;
};

export function resolveLocalizedEntry<C extends TranslatableCollection>(
  entries: CollectionEntry<C>[],
  options: {
    slug: string;
    locale: Locale;
    fallbackLocale?: Locale | null;
  }
): CollectionEntry<C> | null {
  const { slug, locale, fallbackLocale = DEFAULT_LOCALE } = options;
  const normalizedSlug = toLowerKebab(stripLocalePrefix(slug));
  const matchingEntries = entries.filter((entry) => normalizeSlug(entry) === normalizedSlug);

  const exactMatch = matchingEntries.find((entry) => resolveLocale(entry) === locale);
  if (exactMatch) {
    return exactMatch;
  }

  if (fallbackLocale) {
    const fallbackMatch = matchingEntries.find((entry) => resolveLocale(entry) === fallbackLocale);
    if (fallbackMatch) {
      return fallbackMatch;
    }
  }

  return null;
}

export function findMissingTranslations<C extends TranslatableCollection>(
  entries: CollectionEntry<C>[],
  locales: readonly Locale[] = SUPPORTED_LOCALES
): MissingTranslation[] {
  const coverage = new Map<string, Set<Locale>>();

  for (const entry of entries) {
    const slug = normalizeSlug(entry);
    const locale = resolveLocale(entry);
    const set = coverage.get(slug) ?? new Set<Locale>();
    set.add(locale);
    coverage.set(slug, set);
  }

  const missing: MissingTranslation[] = [];
  for (const [slug, presentLocales] of coverage.entries()) {
    const missingLocales = locales.filter((locale) => !presentLocales.has(locale));
    if (missingLocales.length > 0) {
      missing.push({ slug, missing: missingLocales });
    }
  }

  return missing;
}

export function formatMissingTranslationReport(report: MissingTranslation[]): string {
  if (report.length === 0) {
    return 'All translated content is present.';
  }

  const lines = report.map(({ slug, missing }) => `• ${slug}: missing ${missing.join(', ')}`);
  return ['Missing translations detected:', ...lines].join('\n');
}

export function assertTranslationCoverage<C extends TranslatableCollection>(
  entries: CollectionEntry<C>[],
  locales: readonly Locale[] = SUPPORTED_LOCALES
): void {
  const missing = findMissingTranslations(entries, locales);
  if (missing.length > 0) {
    const details = missing
      .map(({ slug, missing: localesMissing }) => `${slug} → [${localesMissing.join(', ')}]`)
      .join('; ');
    throw new Error(`Missing translations detected: ${details}`);
  }
}
