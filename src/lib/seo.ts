import type { TourEntry } from './tours';
import type { BlogEntry } from './blog';
import { contactEmail, instagramUrl, whatsappDisplayNumber, whatsappNumber, type Locale } from './i18n';

export const siteName = 'Elyara Tours Granada';
export const productionSiteUrl = 'https://elyaratours.com';
export const businessLogoPath = '/images/elyara-header-logo.png';

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export interface ListEntry {
  name: string;
  path: string;
}

export type JsonLdNode = Record<string, unknown>;
export type JsonLdInput = JsonLdNode | JsonLdNode[];

const imageDimensions: Record<string, { width: number; height: number }> = {
  '/images/1492-new-world-order.webp': { width: 1200, height: 800 },
  '/images/1492-nuevo-orden-mundial.webp': { width: 1200, height: 800 },
  '/images/23.jpg': { width: 1200, height: 800 },
  '/images/2mundos.jpeg': { width: 1200, height: 800 },
  '/images/Contacto.png': { width: 1200, height: 800 },
  '/images/Granada-main.jpeg': { width: 1200, height: 800 },
  '/images/alhambra-clouds.jpeg': { width: 1200, height: 800 },
  '/images/alhambra.jpg': { width: 1200, height: 800 },
  '/images/almagranada.jpg': { width: 1200, height: 800 },
  '/images/day-trip-cordoba-granada.webp': { width: 1448, height: 1086 },
  '/images/day-trip-malaga-granada.webp': { width: 1536, height: 1024 },
  '/images/granada-pomegranates.jpeg': { width: 1200, height: 800 },
  '/images/Niños.jpg': { width: 6000, height: 4000 },
  '/images/main.jpeg': { width: 1200, height: 800 },
  '/images/mapa.png': { width: 1200, height: 800 },
  '/images/miradoresyleyendas.jpg': { width: 1200, height: 800 },
  '/images/sunset.jpeg': { width: 1200, height: 800 },
};

export function absoluteUrl(path: string, site: URL) {
  return new URL(path, site).toString();
}

export function getImageDimensions(path: string | undefined) {
  return path ? imageDimensions[path] : undefined;
}

function entityId(path: string, fragment: string, site: URL) {
  return `${absoluteUrl(path, site)}#${fragment}`;
}

export function businessEntityId(site: URL) {
  return entityId('/', 'business', site);
}

export function websiteEntityId(site: URL) {
  return entityId('/', 'website', site);
}

export function createBusinessJsonLd(site: URL) {
  return {
    '@type': ['Organization', 'LocalBusiness', 'TravelAgency'],
    '@id': businessEntityId(site),
    name: siteName,
    url: absoluteUrl('/', site),
    email: contactEmail,
    logo: absoluteUrl(businessLogoPath, site),
    image: absoluteUrl(businessLogoPath, site),
    sameAs: [instagramUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: contactEmail,
      telephone: `+${whatsappNumber}`,
      availableLanguage: ['Spanish', 'English'],
    },
    areaServed: {
      '@type': 'City',
      name: 'Granada',
      containedInPlace: {
        '@type': 'Country',
        name: 'Spain',
      },
    },
    knowsLanguage: ['es', 'en'],
  } satisfies JsonLdNode;
}

export function createWebsiteJsonLd(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': websiteEntityId(site),
    name: siteName,
    url: absoluteUrl('/', site),
    publisher: { '@id': businessEntityId(site) },
    inLanguage: ['es', 'en'],
  } satisfies JsonLdNode;
}

export function createJsonLdGraph(site: URL, nodes: JsonLdInput = []) {
  const pageNodes = Array.isArray(nodes) ? nodes : [nodes];

  return {
    '@context': 'https://schema.org',
    '@graph': [createBusinessJsonLd(site), createWebsiteJsonLd(site), ...pageNodes.filter(Boolean)],
  } satisfies JsonLdNode;
}

export function createTourJsonLd(tour: TourEntry, site: URL) {
  const url = absoluteUrl(`/${tour.data.locale}/tours/${tour.data.routeSlug}/`, site);

  return {
    '@type': 'TouristTrip',
    '@id': `${url}#tour`,
    name: tour.data.title,
    description: tour.data.seoDescription,
    image: absoluteUrl(tour.data.image, site),
    url,
    mainEntityOfPage: url,
    inLanguage: tour.data.locale,
    touristType: tour.data.languages,
    location: {
      '@type': 'City',
      name: 'Granada',
      containedInPlace: {
        '@type': 'Country',
        name: 'Spain',
      },
    },
    isPartOf: { '@id': websiteEntityId(site) },
    provider: {
      '@id': businessEntityId(site),
    },
    offers: {
      '@type': 'Offer',
      price: tour.data.price,
      url: tour.data.reservationUrl,
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': businessEntityId(site) },
    },
  };
}

export function createArticleJsonLd(post: BlogEntry, site: URL) {
  const url = absoluteUrl(`/${post.data.locale}/blog/${post.data.postSlug}/`, site);

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
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
      '@id': businessEntityId(site),
    },
    isPartOf: { '@id': websiteEntityId(site) },
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbEntry[], site: URL) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  } satisfies JsonLdNode;
}

export function createFaqJsonLd(faq: FaqEntry[] | undefined) {
  if (!faq || faq.length === 0) {
    return undefined;
  }

  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } satisfies JsonLdNode;
}

export function createItemListJsonLd(name: string, items: ListEntry[], site: URL) {
  return {
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path, site),
    })),
  } satisfies JsonLdNode;
}

export function createReviewJsonLd(
  reviews: { traveler: string; text: string; route: string }[],
) {
  if (reviews.length === 0) {
    return undefined;
  }

  return reviews.map((review) => ({
    '@type': 'Review',
    itemReviewed: { '@type': 'Organization', name: siteName },
    author: { '@type': 'Person', name: review.traveler },
    reviewBody: review.text,
    name: review.route,
  })) satisfies JsonLdNode[];
}

export function createTourServiceJsonLd(locale: Locale, path: string, title: string, description: string, site: URL) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path, site)}#service`,
    name: title,
    description,
    url: absoluteUrl(path, site),
    mainEntityOfPage: absoluteUrl(path, site),
    provider: { '@id': businessEntityId(site) },
    isPartOf: { '@id': websiteEntityId(site) },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: locale === 'es' ? 'Reservas e informacion' : 'Reservations and information',
      email: contactEmail,
      telephone: whatsappDisplayNumber,
      availableLanguage: locale === 'es' ? ['Spanish', 'English'] : ['English', 'Spanish'],
    },
    areaServed: {
      '@type': 'City',
      name: 'Granada',
    },
    availableLanguage: locale === 'es' ? ['Spanish', 'English'] : ['English', 'Spanish'],
    serviceType: locale === 'es' ? 'Tours privados y visitas guiadas en Granada' : 'Private tours and guided visits in Granada',
  } satisfies JsonLdNode;
}

export function createSeoLandingServiceJsonLd(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  targetIntent: string,
  image: string,
  site: URL,
) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path, site)}#service`,
    name: title,
    description,
    url: absoluteUrl(path, site),
    mainEntityOfPage: absoluteUrl(path, site),
    image: absoluteUrl(image, site),
    provider: { '@id': businessEntityId(site) },
    isPartOf: { '@id': websiteEntityId(site) },
    areaServed: {
      '@type': 'City',
      name: 'Granada',
      containedInPlace: {
        '@type': 'Country',
        name: 'Spain',
      },
    },
    availableLanguage: locale === 'es' ? ['Spanish', 'English'] : ['English', 'Spanish'],
    serviceType: targetIntent,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: locale === 'es' ? 'Reservas e informacion' : 'Reservations and information',
      email: contactEmail,
      telephone: whatsappDisplayNumber,
      availableLanguage: locale === 'es' ? ['Spanish', 'English'] : ['English', 'Spanish'],
    },
  } satisfies JsonLdNode;
}
