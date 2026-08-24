import type { TourEntry } from './tours';
import type { BlogEntry } from './blog';

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

export function createArticleJsonLd(post: BlogEntry, site: URL) {
  const url = absoluteUrl(`/${post.data.locale}/blog/${post.data.postSlug}/`, site);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.data.title,
    description: post.data.seoDescription,
    image: post.data.image ? absoluteUrl(post.data.image, site) : undefined,
    url,
    mainEntityOfPage: url,
    datePublished: post.data.publishedDate.toISOString(),
    dateModified: (post.data.updatedDate ?? post.data.publishedDate).toISOString(),
    inLanguage: post.data.locale,
    author: {
      '@type': 'Organization',
      name: post.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}
