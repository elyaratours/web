import type { TourEntry } from './tours';
import type { BlogEntry } from './blog';
import { contactEmail, instagramUrl, whatsappDisplayNumber, whatsappNumber, type Locale } from './i18n';

export const siteName = 'Elyara Tours Granada';
export const productionSiteUrl = 'https://elyaratours.com';
export const businessLogoPath = '/images/elyara-header-logo.png';
export const defaultShareImagePath = '/images/granada-main-route.webp';

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
  '/images/catedral-capilla-real-route.webp': { width: 1200, height: 800 },
  '/images/alhambra-clouds.jpeg': { width: 1200, height: 800 },
  '/images/alhambra.jpg': { width: 1200, height: 800 },
  '/images/alhambra-route.webp': { width: 1200, height: 800 },
  '/images/almagranada.jpg': { width: 1200, height: 800 },
  '/images/day-trip-cordoba-granada.webp': { width: 1448, height: 1086 },
  '/images/day-trip-malaga-granada.webp': { width: 1536, height: 1024 },
  '/images/elyara-header-logo.png': { width: 1254, height: 1254 },
  '/images/granada-main-route.webp': { width: 1200, height: 800 },
  '/images/granada-pomegranates.jpeg': { width: 1200, height: 800 },
  '/images/Niños.jpg': { width: 6000, height: 4000 },
  '/images/ninos-granada-route.webp': { width: 1400, height: 933 },
  '/images/main.jpeg': { width: 1200, height: 800 },
  '/images/mapa.png': { width: 1200, height: 800 },
  '/images/mapa-route.webp': { width: 1200, height: 800 },
  '/images/miradoresyleyendas.jpg': { width: 1200, height: 800 },
  '/images/puerta-del-vino-01.jpg': { width: 528, height: 666 },
  '/images/sunset.jpeg': { width: 1200, height: 800 },
};

export function absoluteUrl(path: string, site: URL) {
  return new URL(path, site).toString();
}

export function getImageDimensions(path: string | undefined) {
  return path ? imageDimensions[path] : undefined;
}

function createImageObject(path: string, site: URL, name?: string) {
  const dimensions = getImageDimensions(path);

  return {
    '@type': 'ImageObject',
    url: absoluteUrl(path, site),
    contentUrl: absoluteUrl(path, site),
    name,
    width: dimensions?.width,
    height: dimensions?.height,
  } satisfies JsonLdNode;
}

function parseEuroPrice(price: string) {
  const match = price.match(/\d+(?:[.,]\d+)?/);

  return match ? match[0].replace(',', '.') : undefined;
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
    legalName: siteName,
    description: 'Cultural walking routes and private group reservations in Granada in Spanish and English.',
    url: absoluteUrl('/', site),
    email: contactEmail,
    telephone: whatsappDisplayNumber,
    logo: createImageObject(businessLogoPath, site, siteName),
    image: createImageObject(businessLogoPath, site, siteName),
    sameAs: [instagramUrl],
    priceRange: 'EUR',
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
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Granada, Andalusia, Spain',
    },
    knowsLanguage: ['es', 'en'],
    availableLanguage: ['Spanish', 'English'],
    knowsAbout: [
      'Granada history',
      'Alhambra tours',
      'Albaicin guided walks',
      'Granada private group routes',
      'Cultural tourism in Granada',
    ],
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

export function createWebPageJsonLd(locale: Locale, path: string, title: string, description: string, image: string | undefined, site: URL) {
  const url = absoluteUrl(path, site);

  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { '@id': websiteEntityId(site) },
    about: { '@id': businessEntityId(site) },
    publisher: { '@id': businessEntityId(site) },
    primaryImageOfPage: image ? createImageObject(image, site, title) : undefined,
  } satisfies JsonLdNode;
}

export function createTourJsonLd(tour: TourEntry, site: URL) {
  const url = absoluteUrl(`/${tour.data.locale}/tours/${tour.data.routeSlug}/`, site);
  const parsedPrice = parseEuroPrice(tour.data.price);
  const itinerary = [
    tour.data.meetingPoint ? { '@type': 'Place', name: tour.data.meetingPoint } : undefined,
    tour.data.endingPoint ? { '@type': 'Place', name: tour.data.endingPoint } : undefined,
  ].filter(Boolean);

  return {
    '@type': 'TouristTrip',
    '@id': `${url}#tour`,
    name: tour.data.title,
    description: tour.data.seoDescription,
    image: createImageObject(tour.data.image, site, tour.data.imageAlt),
    url,
    mainEntityOfPage: url,
    inLanguage: tour.data.locale,
    availableLanguage: tour.data.languages,
    duration: tour.data.duration,
    touristType: tour.data.locale === 'es' ? 'Viajeros culturales en Granada' : 'Cultural travelers in Granada',
    serviceType: tour.data.category === 'day-trip' ? 'Granada day trip' : 'Granada guided route',
    itinerary: itinerary.length > 0
      ? {
          '@type': 'ItemList',
          itemListElement: itinerary.map((item, index) => ({ '@type': 'ListItem', position: index + 1, item })),
        }
      : undefined,
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
      price: parsedPrice,
      priceCurrency: parsedPrice ? 'EUR' : undefined,
      description: tour.data.price,
      url,
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
    image: post.data.image ? createImageObject(post.data.image, site, post.data.imageAlt ?? post.data.title) : undefined,
    url,
    mainEntityOfPage: url,
    datePublished: post.data.publishedDate.toISOString(),
    dateModified: (post.data.updatedDate ?? post.data.publishedDate).toISOString(),
    inLanguage: post.data.locale,
    author: {
      '@type': 'Organization',
      name: post.data.author,
      url: absoluteUrl('/', site),
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
    serviceType: locale === 'es' ? 'Rutas guiadas en Granada con reserva para grupos privados' : 'Guided Granada routes with private group reservations',
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
    image: createImageObject(image, site, title),
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
