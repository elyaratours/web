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
import { getGuideAuthorityPath, getGuideProfileContent } from './guide';
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
      'Elyara Tours Granada acompana a viajeros en rutas culturales por Granada con atencion directa en espanol e ingles. La reserva empieza por WhatsApp o email para ajustar fechas, idioma, ritmo e intereses antes de confirmar una visita publica o privada.',
    imageAlt: 'Vista de Granada y la Alhambra para presentar Elyara Tours Granada',
    approachTitle: 'Como entendemos la visita',
    approachText:
      'Cada ruta se plantea como una conversacion guiada por Granada. Caminamos con contexto, pausas y un ritmo realista, conectando barrios, monumentos, miradores y memoria urbana. En grupos privados, la visita puede adaptarse al idioma, intereses y energia del grupo.',
    factsTitle: 'Datos publicos de Elyara',
    facts: [
      'Nombre publico: Elyara Tours Granada',
      `Guía: ${getGuideProfileContent('es').publicName}`,
      getGuideProfileContent('es').role,
      'Zona de servicio: Granada y rutas conectadas desde Malaga o Cordoba bajo consulta',
      'Idiomas de atencion: espanol e ingles',
      'Enfoque: rutas culturales a pie, Alhambra, Albaicin, centro historico, miradores y propuestas privadas',
      `Email: ${contactEmail}`,
      'WhatsApp: +34 611 126 979',
      'Reservas e informacion siempre por WhatsApp o email, sin checkout interno',
    ],
    linksTitle: 'Empieza por aqui',
    ctaTitle: 'Tienes una idea de visita?',
    ctaText: 'Escribenos con fechas, numero de personas, idioma e intereses. Te orientamos hacia una ruta publicada, una reserva privada o una propuesta a medida sin prometer disponibilidad hasta revisarla contigo.',
    whatsappCta: 'Consultar por WhatsApp',
    emailCta: 'Consultar por email',
    tourKeys: ['albaicin', 'cathedral-royal-chapel', 'granada-family-kids', 'day-trip-malaga-granada'],
    articleKeys: ['private-tour-granada-guide', 'albaicin-sacromonte-guide', 'first-day-granada', 'family-granada-guide'],
  },
  en: {
    routeSlug: 'about-elyara',
    title: 'About Elyara',
    metaDescription:
      'Meet Elyara Tours Granada: cultural guided routes in Granada in English and Spanish, direct WhatsApp or email contact and private proposals.',
    eyebrow: 'Elyara Tours Granada',
    heading: 'Cultural Granada routes with a warm local perspective',
    intro:
      'Elyara Tours Granada guides travelers through cultural routes in Granada with direct support in English and Spanish. Booking starts by WhatsApp or email so dates, language, pace and interests can be reviewed before confirming a public or private visit.',
    imageAlt: 'View of Granada and the Alhambra introducing Elyara Tours Granada',
    approachTitle: 'How we approach a visit',
    approachText:
      'Each route is designed as a guided conversation through Granada. We walk with context, pauses and a realistic pace, connecting neighborhoods, monuments, viewpoints and urban memory. For private groups, the visit can be shaped around language, interests and group energy.',
    factsTitle: 'Public Elyara details',
    facts: [
      'Public name: Elyara Tours Granada',
      `Guide: ${getGuideProfileContent('en').publicName}`,
      getGuideProfileContent('en').role,
      'Service area: Granada and connected routes from Malaga or Cordoba on request',
      'Visitor languages: English and Spanish',
      'Focus: cultural walking routes, Alhambra, Albaicin, historic center, viewpoints and private proposals',
      `Email: ${contactEmail}`,
      'WhatsApp: +34 611 126 979',
      'Reservations and information always by WhatsApp or email, with no internal checkout',
    ],
    linksTitle: 'Start here',
    ctaTitle: 'Have a visit idea?',
    ctaText: 'Write with your dates, group size, language and interests. We will point you to a published route, a private booking or a tailor-made proposal without promising availability until it is reviewed with you.',
    whatsappCta: 'Inquire by WhatsApp',
    emailCta: 'Inquire by email',
    tourKeys: ['albaicin', 'cathedral-royal-chapel', 'granada-family-kids', 'day-trip-malaga-granada'],
    articleKeys: ['private-tour-granada-guide', 'albaicin-sacromonte-guide', 'first-day-granada', 'family-granada-guide'],
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
  return getGuideAuthorityPath(locale);
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
        routes: 'Rutas en Granada',
        privateTours: 'Rutas para grupos privados',
        dayTrips: 'Excursiones de un dia a Granada',
        tailorMade: 'Viajes y rutas a medida',
        contact: 'Contacto directo',
        blog: 'Cuaderno de Granada',
      }
    : {
        routes: 'Granada routes',
        privateTours: 'Private tours in Granada',
        dayTrips: 'Day trips to Granada',
        tailorMade: 'Tailor-made routes',
        contact: 'Direct contact',
        blog: 'Granada Journal',
      };

  return [
    { label: labels.routes, path: `/${locale}/#tours` },
    { label: labels.privateTours, path: getCommercialToursPath(locale) },
    { label: labels.dayTrips, path: getDayTripsPath(locale) },
    { label: labels.tailorMade, path: getTailorMadePath(locale) },
    { label: labels.contact, path: getContactPath(locale) },
    { label: labels.blog, path: `/${locale}/blog/` },
  ];
}

export type { Locale };
export { getBlogPostPath, getEmailReservationUrl, getTourPath, getWhatsAppReservationUrl };
