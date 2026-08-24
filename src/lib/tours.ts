import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type TourEntry = CollectionEntry<'tours'>;

export async function getPublishedTours(locale?: Locale) {
  const tours = await getCollection('tours', ({ data }) => {
    return data.published !== false && (!locale || data.locale === locale);
  });

  return tours.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function getTourPath(tour: TourEntry) {
  return `/${tour.data.locale}/tours/${tour.data.routeSlug}/`;
}

export function getLocaleHomePath(locale: Locale) {
  return `/${locale}/`;
}
