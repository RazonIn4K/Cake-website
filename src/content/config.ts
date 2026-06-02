import { defineCollection, z } from 'astro:content';

export const SUPPORTED_LOCALES = ['es', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = SUPPORTED_LOCALES[0];

const localeEnum = z.enum(SUPPORTED_LOCALES);

const gallery = defineCollection({
  type: 'content',
  schema: () =>
    z
      .object({
        locale: localeEnum.optional(),
        title: z.string().min(1, { message: 'title is required' }),
        image: z
          .string()
          .min(1, { message: 'image path is required' })
          .regex(/^\/images\/gallery\//, {
            message: 'gallery images must live under /images/gallery in public/'
          }),
        alt: z.string().min(1, { message: 'alt is required for accessibility' }),
        category: z.string().min(1, { message: 'category is required' }),
        featured: z.boolean().optional()
      })
      .strict()
});

export const collections = {
  gallery
};
