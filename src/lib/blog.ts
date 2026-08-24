import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { getPublishedTours } from './tours';

export type BlogEntry = CollectionEntry<'blog'>;

export async function getPublishedBlogPosts(locale?: Locale) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.published !== false && (!locale || data.locale === locale);
  });

  return posts.sort((a, b) => {
    return (
      a.data.order - b.data.order ||
      b.data.publishedDate.getTime() - a.data.publishedDate.getTime() ||
      a.data.title.localeCompare(b.data.title)
    );
  });
}

export function getBlogPostPath(post: BlogEntry) {
  return `/${post.data.locale}/blog/${post.data.postSlug}/`;
}

export async function getBlogAlternates(post: BlogEntry) {
  const relatedPosts = await getCollection('blog', ({ data }) => {
    return data.published !== false && data.translationKey === post.data.translationKey;
  });

  return relatedPosts.map((item) => ({ locale: item.data.locale as Locale, path: getBlogPostPath(item) }));
}

export async function getRelatedToursForPost(post: BlogEntry) {
  if (post.data.relatedTours.length === 0) {
    return [];
  }

  const tours = await getPublishedTours(post.data.locale);
  return post.data.relatedTours
    .map((translationKey) => tours.find((tour) => tour.data.translationKey === translationKey))
    .filter((tour) => tour !== undefined);
}
