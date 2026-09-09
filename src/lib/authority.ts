import { getBlogPostPath, getPublishedBlogPosts } from './blog';
import {
  contactEmail,
  getCommercialToursPath,
  getContactPath,
  getDayTripsPath,
  getEmailReservationUrl,
  getTailorMadePath,
  getWhatsAppReservationUrl,
  type Locale,
} from './i18n';
import { absoluteUrl, businessEntityId, websiteEntityId, type JsonLdNode } from './seo';
import { getTourPath, getPublishedTourEntries } from './tours';

export const authorityContent = {
  es: {
    routeSlug: 'sobre-elyara',
    title: 'Sobre Elyara',
    metaDescription:
      'Conoce Elyara Tours Granada: rutas culturales guiadas en Granada en espanol e ingles, contacto directo por WhatsApp o email y propuestas privadas.',
    eyebrow: 'Elyara Tours Granada',
    heading: 'Rutas culturales en Granada con una mirada cercana',
    intro:
      'Elyara Tours Granada nace para acompanar a viajeros que quieren entender la ciudad con calma: su historia, sus barrios, sus simbolos y las pequenas conexiones que hacen que Granada sea algo mas que una lista de monumentos.',
    imageAlt: 'Vista de Granada y la Alhambra para presentar Elyara Tours Granada',
    approachTitle: 'Como entendemos la visita',
    approachText:
      'Cada ruta se plantea como una conversacion guiada por Granada. Caminamos con contexto, pausas y un ritmo realista, adaptando la visita al idioma, intereses y energia del grupo cuando se trata de una experiencia privada.',
    factsTitle: 'Datos publicos de Elyara',
    facts: [
      'Nombre publico: Elyara Tours Granada',
      'Zona de servicio: Granada y rutas conectadas desde Malaga o Cordoba bajo consulta',
      'Idiomas de atencion: espanol e ingles',
      `Email: ${contactEmail}`,
      'WhatsApp: +34 611 126 979',
      'Reservas e informacion siempre por WhatsApp o email, sin checkout interno',
    ],
    linksTitle: 'Empieza por aqui',
    ctaTitle: 'Tienes una idea de visita?',
    ctaText: 'Escribenos con fechas, numero de personas, idioma e intereses. Te orientamos hacia una ruta publicada o una propuesta a medida.',
    whatsappCta: 'Consultar por WhatsApp',
    emailCta: 'Consultar por email',
    tourKeys: ['albaicin', 'cathedral-royal-chapel', 'granada-family-kids', 'day-trip-malaga-granada'],
    articleKeys: ['private-tour-granada-guide', 'first-day-granada', 'family-granada-guide'],
  },
  en: {
    routeSlug: 'about-elyara',
    title: 'About Elyara',
    metaDescription:
      'Meet Elyara Tours Granada: cultural guided routes in Granada in English and Spanish, direct WhatsApp or email contact and private proposals.',
    eyebrow: 'Elyara Tours Granada',
    heading: 'Cultural Granada routes with a warm local perspective',
    intro:
      'Elyara Tours Granada is for travelers who want to understand the city calmly: its history, neighborhoods, symbols and small connections that make Granada more than a checklist of monuments.',
    imageAlt: 'View of Granada and the Alhambra introducing Elyara Tours Granada',
    approachTitle: 'How we approach a visit',
    approachText:
      'Each route is designed as a guided conversation through Granada. We walk with context, pauses and a realistic pace, adapting the visit to language, interests and group energy when it is a private experience.',
    factsTitle: 'Public Elyara details',
    facts: [
      'Public name: Elyara Tours Granada',
      'Service area: Granada and connected routes from Malaga or Cordoba on request',
      'Visitor languages: English and Spanish',
      `Email: ${contactEmail}`,
      'WhatsApp: +34 611 126 979',
      'Reservations and information always by WhatsApp or email, with no internal checkout',
    ],
    linksTitle: 'Start here',
    ctaTitle: 'Have a visit idea?',
    ctaText: 'Write with your dates, group size, language and interests. We will point you to a published route or a tailor-made proposal.',
    whatsappCta: 'Inquire by WhatsApp',
    emailCta: 'Inquire by email',
    tourKeys: ['albaicin', 'cathedral-royal-chapel', 'granada-family-kids', 'day-trip-malaga-granada'],
    articleKeys: ['private-tour-granada-guide', 'first-day-granada', 'family-granada-guide'],
  },
} satisfies Record<
  Locale,
  {
    routeSlug: string;
    title: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    intro: string;
    imageAlt: string;
    approachTitle: string;
    approachText: string;
    factsTitle: string;
    facts: string[];
    linksTitle: string;
    ctaTitle: string;
    ctaText: string;
    whatsappCta: string;
    emailCta: string;
    tourKeys: string[];
    articleKeys: string[];
  }
>;

export function getAuthorityContent(locale: Locale) {
  return authorityContent[locale];
}

export function getAuthorityPath(locale: Locale) {
  return `/${locale}/${authorityContent[locale].routeSlug}/`;
}

export function getAuthorityAlternates() {
  return Object.keys(authorityContent).map((locale) => ({ locale: locale as Locale, path: getAuthorityPath(locale as Locale) }));
}

export async function getAuthorityTours(locale: Locale) {
  const tours = await getPublishedTourEntries(locale);
  return authorityContent[locale].tourKeys.map((key) => tours.find((tour) => tour.data.translationKey === key)).filter((tour) => tour !== undefined);
}

export async function getAuthorityPosts(locale: Locale) {
  const posts = await getPublishedBlogPosts(locale);
  return authorityContent[locale].articleKeys.map((key) => posts.find((post) => post.data.translationKey === key)).filter((post) => post !== undefined);
}

export function getAuthorityDiscoveryLinks(locale: Locale) {
  const labels = locale === 'es'
    ? {
        privateTours: 'Tours privados en Granada',
        dayTrips: 'Excursiones de un dia a Granada',
        tailorMade: 'Viajes y rutas a medida',
        contact: 'Contacto directo',
        blog: 'Cuaderno de Granada',
      }
    : {
        privateTours: 'Private tours in Granada',
        dayTrips: 'Day trips to Granada',
        tailorMade: 'Tailor-made routes',
        contact: 'Direct contact',
        blog: 'Granada Journal',
      };

  return [
    { label: labels.privateTours, path: getCommercialToursPath(locale) },
    { label: labels.dayTrips, path: getDayTripsPath(locale) },
    { label: labels.tailorMade, path: getTailorMadePath(locale) },
    { label: labels.contact, path: getContactPath(locale) },
    { label: labels.blog, path: `/${locale}/blog/` },
  ];
}

export function getAuthorityJsonLd(locale: Locale, site: URL) {
  const content = getAuthorityContent(locale);
  const path = getAuthorityPath(locale);

  return {
    '@type': 'AboutPage',
    '@id': `${absoluteUrl(path, site)}#webpage`,
    name: content.title,
    description: content.metaDescription,
    url: absoluteUrl(path, site),
    inLanguage: locale,
    isPartOf: { '@id': websiteEntityId(site) },
    about: { '@id': businessEntityId(site) },
  } satisfies JsonLdNode;
}

export type { Locale };
export { getBlogPostPath, getEmailReservationUrl, getTourPath, getWhatsAppReservationUrl };
