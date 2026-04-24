import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cake Gallery Collection - Primary showcase for custom cake work
const cakeGalleryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/cakes' }),
  schema: z.object({
    title: z.string(),
    occasion: z.enum(['wedding', 'birthday', 'celebration', 'custom']),
    description: z.string(),
    designElements: z.array(z.string()),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    })),
    featured: z.boolean().default(false),
    order: z.number(),
    seo: z.object({
      metaDescription: z.string().optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

// Local Business Info Collection - Business hours, contact, service area
const businessInfoCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/business' }),
  schema: z.object({
    businessName: z.string(),
    address: z.string(),
    serviceArea: z.array(z.string()),
    hours: z.record(z.string(), z.string()),
    contact: z.object({
      phone: z.string(),
      email: z.string(),
      whatsapp: z.string(),
    }),
    leadTimes: z.object({
      standard: z.string(),
      wedding: z.string(),
      rush: z.string(),
    }),
    policies: z.object({
      minimumNotice: z.string().optional(),
      depositRequired: z.string().optional(),
      cancellationPolicy: z.string().optional(),
      allergyDisclaimer: z.string().optional(),
    }).optional(),
  }),
});

// Customer Testimonials Collection - Local customer reviews with cake photos
const customerTestimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    content: z.string(),
    customerName: z.string(),
    occasion: z.string(),
    cakePhoto: z.string().optional(),
    rating: z.number().min(1).max(5),
    location: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

// Secondary Offerings Collection - Digital products and workshops (complementary)
const secondaryOfferingsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/additional-offerings' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['digital', 'workshop']),
    price: z.number().optional(),
    pppNotes: z.string().optional(),
    buttonText: z.string(),
    buttonAction: z.enum(['gumroad', 'whatsapp', 'contact']),
    buttonLink: z.string(),
    order: z.number(),
    category: z.enum(['recipe', 'tutorial', 'workshop', 'consultation']).optional(),
  }),
});

export const collections = {
  // Local cake business collections
  'cakes': cakeGalleryCollection,
  'business': businessInfoCollection,
  'testimonials': customerTestimonialsCollection,
  'additional-offerings': secondaryOfferingsCollection,

  // Keep old collections for backwards compatibility
  'ofertas': defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/ofertas' }),
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      basePrice: z.number(),
      pppNotes: z.string().optional(),
      buttonText: z.string(),
      buttonAction: z.enum(['gumroad', 'whatsapp', 'contact']),
      buttonLink: z.string(),
      order: z.number(),
      category: z.enum(['workshop', 'digital', 'consultation', 'community']),
    }),
  }),
  'galeria': defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/galeria' }),
    schema: z.object({
      title: z.string(),
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })),
      order: z.number(),
    }),
  }),
};
