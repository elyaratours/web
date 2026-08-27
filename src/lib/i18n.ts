export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig = {
  es: {
    htmlLang: 'es',
    label: 'Espanol',
    navTours: 'Rutas',
    navBlog: 'Cuaderno',
    navAbout: 'La experiencia',
    navTailorMade: 'Viajes a medida',
    navContact: 'Contacto',
    footerContact: 'Contacto',
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
    heroTitle: 'Granada, más allá de la postal',
    heroText:
      'Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.',
    heroImageAlt: 'Vista desde una ventana a jardines y tejados historicos de Granada',
    footerIntro:
      'Tours privados y rutas a pie para descubrir la Alhambra, el Albaicin y la ciudad historica con una mirada cercana y cultural.',
    catalogIntro: 'Elige una ruta y empieza la reserva por WhatsApp o enlace externo.',
    experienceHistoricalTitle: 'Contexto historico',
    experienceHistoricalText:
      'Rutas narradas para entender monumentos, barrios y paisajes sin convertir la visita en una clase pesada.',
    experienceWalkableTitle: 'Ritmo caminable',
    experienceWalkableText: 'Itinerarios pensados para mirar, preguntar, hacer pausas y disfrutar de Granada con calma.',
    experienceDirectTitle: 'Reserva directa',
    experienceDirectText: 'La reserva empieza por WhatsApp o enlace externo. Sin cuentas, pagos internos ni checkout.',
    metaHome: 'Rutas turisticas y tours privados en Granada con experiencias culturales en espanol e ingles.',
  },
  en: {
    htmlLang: 'en',
    label: 'English',
    navTours: 'Tours',
    navBlog: 'Journal',
    navAbout: 'Experience',
    navTailorMade: 'Tailor-made',
    navContact: 'Contact',
    footerContact: 'Contact',
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
    heroTitle: 'Granada, beyond the postcard',
    heroText:
      'Private tours and walking experiences that reveal the history, characters and hidden corners behind the city',
    heroImageAlt: 'View from a window toward gardens and historic rooftops in Granada',
    footerIntro:
      'Private tours and walking routes to discover the Alhambra, the Albaicin and the historic city with a warm cultural perspective.',
    catalogIntro: 'Choose a route and start booking through WhatsApp or an external link.',
    experienceHistoricalTitle: 'Historical context',
    experienceHistoricalText:
      'Narrated routes to understand monuments, neighborhoods and landscapes without turning the visit into a heavy lecture.',
    experienceWalkableTitle: 'Walkable pace',
    experienceWalkableText: 'Itineraries designed to look around, ask questions, pause and enjoy Granada at a calm pace.',
    experienceDirectTitle: 'Direct booking',
    experienceDirectText: 'Booking starts via WhatsApp or an external link. No accounts, internal payments or checkout.',
    metaHome: 'Tourism routes and private tours in Granada with cultural experiences in Spanish and English.',
  },
} satisfies Record<Locale, Record<string, string>>;

export const contactEmail = 'elyaratours@gmail.com';
export const instagramHandle = '@elyaratours';
export const instagramUrl = 'https://instagram.com/elyaratours';

export const contactContent = {
  es: {
    routeSlug: 'contacto',
    title: 'Contacto',
    eyebrow: 'Hablemos',
    heading: 'Hablemos de tu visita a Granada',
    intro:
      'Si tienes una pregunta, quieres reservar una ruta privada o necesitas orientar tu viaje, puedes escribirnos directamente por correo o Instagram.',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    emailCta: 'Escribir un correo',
    instagramCta: 'Ver Instagram',
    reasonsTitle: 'Para que puedes escribirnos',
    reasons: ['Reservas de rutas', 'Rutas privadas', 'Viajes a medida', 'Dudas sobre Granada'],
    footerLink: 'Ver pagina de contacto',
    metaDescription:
      'Contacta con Elyara Tours Granada por email o Instagram para rutas privadas, viajes a medida y preguntas sobre tu visita a Granada.',
  },
  en: {
    routeSlug: 'contact',
    title: 'Contact',
    eyebrow: 'Let us talk',
    heading: 'Let us talk about your visit to Granada',
    intro:
      'If you have a question, want to book a private route or need help shaping your trip, you can contact us directly by email or Instagram.',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    emailCta: 'Send an email',
    instagramCta: 'View Instagram',
    reasonsTitle: 'What you can write about',
    reasons: ['Route reservations', 'Private routes', 'Tailor-made trip planning', 'Questions about Granada'],
    footerLink: 'View contact page',
    metaDescription:
      'Contact Elyara Tours Granada by email or Instagram for private routes, tailor-made trip planning and questions about visiting Granada.',
  },
} satisfies Record<
  Locale,
  {
    routeSlug: string;
    title: string;
    eyebrow: string;
    heading: string;
    intro: string;
    emailLabel: string;
    instagramLabel: string;
    emailCta: string;
    instagramCta: string;
    reasonsTitle: string;
    reasons: string[];
    footerLink: string;
    metaDescription: string;
  }
>;

export const tailorMadeContent = {
  es: {
    routeSlug: 'viajes-a-medida',
    eyebrow: 'Viajes personalizados en Granada',
    title: 'Viajes y rutas disenadas para ti',
    intro:
      'Si vienes con poco tiempo, intereses concretos o una idea especial, podemos ayudarte a organizar tu visita o disenar una ruta privada en Granada con un ritmo realista y una mirada cultural.',
    imageAlt: 'Mapa ilustrado de Granada con Albaicin, Sacromonte, Alhambra, Generalife, Realejo y Centro',
    homeText:
      'Consultoria de viaje y rutas personalizadas para descubrir Granada sin ir corriendo ni seguir un itinerario generico.',
    cta: 'Disenar mi ruta',
    secondaryCta: 'Ver como funciona',
    consultationTitle: 'Consultoria de viaje',
    consultationText:
      'Ordenamos tu visita a Granada segun tus dias, prioridades, entradas, barrios, ritmos y dudas practicas antes de llegar.',
    routeTitle: 'Ruta personalizada en Granada',
    routeText:
      'Creamos una visita privada alrededor de tus intereses: historia, arquitectura, miradores, leyendas, memoria urbana o vida local.',
    processTitle: 'Como funciona',
    process: [
      'Nos cuentas fechas, numero de personas, idioma, ritmo e intereses.',
      'Te proponemos una idea realista para tu tiempo en Granada.',
      'Ajustamos la ruta o consultoria y cerramos la reserva por WhatsApp.',
    ],
    inspirationTitle: 'Ideas para inspirarte',
    inspiration: [
      'Granada esencial sin prisas',
      'Albaicin oculto y miradores',
      'Granada despues de 1492',
      'Mujeres, leyendas y memoria urbana',
      'Arquitectura, agua y paisaje',
      'Ruta familiar por Granada',
    ],
    detailsTitle: 'Que necesito saber de ti',
    details: ['Fechas y disponibilidad', 'Numero de personas', 'Idioma preferido', 'Intereses y ritmo del grupo'],
    pageTitle: 'Viajes y rutas a medida en Granada',
    metaDescription:
      'Consultoria de viaje y rutas privadas personalizadas en Granada para organizar tu visita segun fechas, intereses, idioma y ritmo.',
    whatsappText:
      'Hola, quiero consultar una ruta o viaje personalizado en Granada. Fechas: Numero de personas: Intereses: Idioma:',
  },
  en: {
    routeSlug: 'tailor-made-trips',
    eyebrow: 'Personalized trips in Granada',
    title: 'Tailor-made routes for your trip',
    intro:
      'If you are traveling with limited time, specific interests or a special idea, we can help you shape your Granada visit or design a private route with a realistic pace and cultural perspective.',
    imageAlt: 'Illustrated map of Granada with the Albaicin, Sacromonte, Alhambra, Generalife, Realejo and city center',
    homeText:
      'Trip consultation and personalized routes to discover Granada without rushing or following a generic itinerary.',
    cta: 'Plan my route',
    secondaryCta: 'See how it works',
    consultationTitle: 'Trip consultation',
    consultationText:
      'We help organize your Granada visit around your days, priorities, tickets, neighborhoods, pace and practical questions before you arrive.',
    routeTitle: 'Personalized route in Granada',
    routeText:
      'We create a private guided walk around your interests: history, architecture, viewpoints, legends, urban memory or local life.',
    processTitle: 'How it works',
    process: [
      'Tell us your dates, group size, language, pace and interests.',
      'We suggest a realistic idea for your time in Granada.',
      'We adjust the route or consultation and confirm everything through WhatsApp.',
    ],
    inspirationTitle: 'Ideas for inspiration',
    inspiration: [
      'Essential Granada without rushing',
      'Hidden Albaicin and viewpoints',
      'Granada after 1492',
      'Women, legends and urban memory',
      'Architecture, water and landscape',
      'Family route through Granada',
    ],
    detailsTitle: 'What I need to know',
    details: ['Dates and availability', 'Number of people', 'Preferred language', 'Interests and group pace'],
    pageTitle: 'Tailor-made trips and routes in Granada',
    metaDescription:
      'Trip consultation and personalized private routes in Granada to shape your visit around dates, interests, language and pace.',
    whatsappText:
      'Hello, I would like to ask about a tailor-made route or trip in Granada. Dates: Number of people: Interests: Language:',
  },
} satisfies Record<
  Locale,
  {
    routeSlug: string;
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
    homeText: string;
    cta: string;
    secondaryCta: string;
    consultationTitle: string;
    consultationText: string;
    routeTitle: string;
    routeText: string;
    processTitle: string;
    process: string[];
    inspirationTitle: string;
    inspiration: string[];
    detailsTitle: string;
    details: string[];
    pageTitle: string;
    metaDescription: string;
    whatsappText: string;
  }
>;

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

export function getContactContent(locale: Locale) {
  return contactContent[locale];
}

export function getContactPath(locale: Locale) {
  return `/${locale}/${contactContent[locale].routeSlug}/`;
}

export function getTailorMadeContent(locale: Locale) {
  return tailorMadeContent[locale];
}

export function getTailorMadePath(locale: Locale) {
  return `/${locale}/${tailorMadeContent[locale].routeSlug}/`;
}

export function getTailorMadeWhatsAppUrl(locale: Locale) {
  return `https://wa.me/34600000000?text=${encodeURIComponent(tailorMadeContent[locale].whatsappText)}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getBlogCategoryLabel(locale: Locale, category: string) {
  const labels: Record<string, string> = blogCategoryLabels[locale];
  return labels[category] ?? category;
}
