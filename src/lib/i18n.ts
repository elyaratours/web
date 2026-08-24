export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig = {
  es: {
    htmlLang: 'es',
    label: 'Espanol',
    navTours: 'Rutas',
    navAbout: 'La experiencia',
    reserve: 'Reservar por WhatsApp',
    viewTour: 'Ver ruta',
    featuredTours: 'Rutas destacadas',
    allTours: 'Todas las rutas',
    duration: 'Duracion',
    price: 'Precio',
    languages: 'Idiomas',
    backToTours: 'Volver a rutas',
    heroEyebrow: 'Rutas culturales en Granada',
    heroTitle: 'Camina Granada con historias, miradores y contexto local',
    heroText:
      'Tours privados y rutas a pie para descubrir la Alhambra, el Albaicin y la ciudad historica con una mirada cercana y cultural.',
    catalogIntro: 'Elige una ruta y empieza la reserva por WhatsApp o enlace externo.',
    metaHome: 'Rutas turisticas y tours privados en Granada con experiencias culturales en espanol e ingles.',
  },
  en: {
    htmlLang: 'en',
    label: 'English',
    navTours: 'Tours',
    navAbout: 'Experience',
    reserve: 'Reserve via WhatsApp',
    viewTour: 'View tour',
    featuredTours: 'Featured tours',
    allTours: 'All tours',
    duration: 'Duration',
    price: 'Price',
    languages: 'Languages',
    backToTours: 'Back to tours',
    heroEyebrow: 'Cultural routes in Granada',
    heroTitle: 'Walk Granada through stories, viewpoints and local context',
    heroText:
      'Private tours and walking routes to discover the Alhambra, the Albaicin and the historic city with a warm cultural perspective.',
    catalogIntro: 'Choose a route and start booking through WhatsApp or an external link.',
    metaHome: 'Tourism routes and private tours in Granada with cultural experiences in Spanish and English.',
  },
} satisfies Record<Locale, Record<string, string>>;

export function getLocaleConfig(locale: Locale) {
  return localeConfig[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
