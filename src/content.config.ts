import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tours' }),
  schema: z.object({
    locale: z.enum(['es', 'en']),
    translationKey: z.string().min(1),
    title: z.string().min(1),
    routeSlug: z.string().min(1),
    duration: z.string().min(1),
    price: z.string().min(1),
    languages: z.array(z.string().min(1)).min(1),
    image: z.string().startsWith('/images/'),
    imageAlt: z.string().min(1),
    reservationUrl: z.url(),
    seoDescription: z.string().min(50),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

export const collections = { tours };
