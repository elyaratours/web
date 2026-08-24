export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig = {
  es: {
    htmlLang: 'es',
    label: 'Espanol',
    navTours: 'Rutas',
    navBlog: 'Cuaderno',
    navAbout: 'La experiencia',
    reserve: 'Reservar por WhatsApp',
    viewTour: 'Ver ruta',
    readArticle: 'Leer historia',
    blogEyebrow: 'Cuaderno de Granada',
    blogTitle: 'Historias, secretos y consejos para mirar Granada de otra forma',
    blogIntro:
      'Un cuaderno vivo con leyendas, datos curiosos, recomendaciones y noticias culturales para descubrir la ciudad con mas calma y personalidad.',
    allArticles: 'Ultimas historias',
    backToBlog: 'Volver al cuaderno',
    publishedOn: 'Publicado',
    relatedToursTitle: 'Camina esta historia',
    relatedToursText: 'Conecta este relato con una ruta guiada por Granada y reserva por WhatsApp o enlace externo.',
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
    navBlog: 'Journal',
    navAbout: 'Experience',
    reserve: 'Reserve via WhatsApp',
    viewTour: 'View tour',
    readArticle: 'Read story',
    blogEyebrow: 'Granada Journal',
    blogTitle: 'Stories, secrets and local tips to see Granada differently',
    blogIntro:
      'A living journal of legends, curiosities, recommendations and cultural news to discover the city with more calm and personality.',
    allArticles: 'Latest stories',
    backToBlog: 'Back to journal',
    publishedOn: 'Published',
    relatedToursTitle: 'Walk this story',
    relatedToursText: 'Connect this story with a guided route through Granada and reserve via WhatsApp or an external link.',
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

const blogCategoryLabels = {
  es: {
    news: 'Noticias',
    curiosity: 'Dato curioso',
    recommendation: 'Recomendacion',
    story: 'Historia',
    legend: 'Leyenda',
    history: 'Historia local',
    'route-inspiration': 'Inspiracion de ruta',
  },
  en: {
    news: 'News',
    curiosity: 'Curiosity',
    recommendation: 'Recommendation',
    story: 'Story',
    legend: 'Legend',
    history: 'Local history',
    'route-inspiration': 'Route inspiration',
  },
} satisfies Record<Locale, Record<string, string>>;

export function getLocaleConfig(locale: Locale) {
  return localeConfig[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getBlogCategoryLabel(locale: Locale, category: string) {
  const labels: Record<string, string> = blogCategoryLabels[locale];
  return labels[category] ?? category;
}
