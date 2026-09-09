import { getCollection, type CollectionEntry } from 'astro:content';
import { getPublishedBlogPosts } from './blog';
import type { Locale } from './i18n';
import { getPublishedTourEntries } from './tours';

export type SeoLandingEntry = CollectionEntry<'seoLandings'>;

export async function getPublishedSeoLandings(locale?: Locale) {
  const landings = await getCollection('seoLandings', ({ data }) => {
    return data.published !== false && (!locale || data.locale === locale);
  });

  return landings.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function getSeoLandingPath(landing: SeoLandingEntry) {
  return `/${landing.data.locale}/${landing.data.routeSlug}/`;
}

export async function getSeoLandingAlternates(landing: SeoLandingEntry) {
  const relatedLandings = await getCollection('seoLandings', ({ data }) => {
    return data.published !== false && data.translationKey === landing.data.translationKey;
  });

  return relatedLandings.map((item) => ({ locale: item.data.locale as Locale, path: getSeoLandingPath(item) }));
}

export async function getSeoLandingsByKeys(locale: Locale, keys: string[]) {
  if (keys.length === 0) {
    return [];
  }

  const landings = await getPublishedSeoLandings(locale);
  return keys.map((key) => landings.find((landing) => landing.data.translationKey === key)).filter((landing) => landing !== undefined);
}

export async function getRelatedToursForSeoLanding(landing: SeoLandingEntry) {
  if (landing.data.relatedTours.length === 0) {
    return [];
  }

  const tours = await getPublishedTourEntries(landing.data.locale);
  return landing.data.relatedTours.map((key) => tours.find((tour) => tour.data.translationKey === key)).filter((tour) => tour !== undefined);
}

export async function getRelatedPostsForSeoLanding(landing: SeoLandingEntry) {
  if (landing.data.relatedArticles.length === 0) {
    return [];
  }

  const posts = await getPublishedBlogPosts(landing.data.locale);
  return landing.data.relatedArticles.map((key) => posts.find((post) => post.data.translationKey === key)).filter((post) => post !== undefined);
}

export async function getRelatedSeoLandingsForSeoLanding(landing: SeoLandingEntry) {
  return getSeoLandingsByKeys(landing.data.locale, landing.data.relatedLandings);
}
