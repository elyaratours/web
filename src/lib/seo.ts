import type { TourEntry } from './tours';

export const siteName = 'Elyara Tours Granada';

export function absoluteUrl(path: string, site: URL) {
  return new URL(path, site).toString();
}

export function createTourJsonLd(tour: TourEntry, site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.data.title,
    description: tour.data.seoDescription,
    image: absoluteUrl(tour.data.image, site),
    url: absoluteUrl(`/${tour.data.locale}/tours/${tour.data.routeSlug}/`, site),
    inLanguage: tour.data.locale,
    touristType: tour.data.languages,
    offers: {
      '@type': 'Offer',
      price: tour.data.price,
      url: tour.data.reservationUrl,
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}
