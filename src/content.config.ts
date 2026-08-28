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

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    locale: z.enum(['es', 'en']),
    translationKey: z.string().min(1),
    title: z.string().min(1),
    postSlug: z.string().min(1),
    excerpt: z.string().min(50),
    category: z.enum(['news', 'curiosity', 'recommendation', 'story', 'legend', 'history', 'route-inspiration']),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().startsWith('/images/').optional(),
    imagePosition: z.enum(['center', 'top', 'bottom', 'left', 'right', 'center top', 'center bottom']).optional(),
    imageAlt: z.string().min(1).optional(),
    author: z.string().min(1).default('Elyara Tours Granada'),
    seoDescription: z.string().min(50),
    relatedTours: z.array(z.string().min(1)).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(true),
  }),
});

export const collections = { tours, blog };
