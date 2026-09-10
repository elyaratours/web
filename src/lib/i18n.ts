export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig = {
  es: {
    htmlLang: 'es',
    label: 'Espanol',
    navTours: 'Rutas',
    navBlog: 'Cuaderno',
    navTailorMade: 'Viajes a medida',
    navPrivateTours: 'Tours privados',
    navDayTrips: 'Excursiones de un dia',
    navAbout: 'Sobre Elyara',
    navContact: 'Contacto',
    footerContact: 'Contacto',
    reserve: 'Reservar',
    reserveWhatsapp: 'Reservar por WhatsApp',
    reserveEmail: 'Reservar por email',
    reservePrivateGroup: 'Reservar grupo privado',
    privateGroupTitle: 'Tambien para grupos privados',
    privateGroupText: 'Puedes solicitar esta ruta como experiencia privada y adaptar idioma, ritmo e intereses del grupo por WhatsApp o email.',
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
    relatedToursText: 'Conecta este relato con una ruta guiada por Granada y reserva por WhatsApp o email.',
    featuredTours: 'Rutas destacadas',
    allTours: 'Todas las rutas',
    kidsToursTitle: 'Niños',
    kidsToursIntro: 'Rutas cortas, visuales y adaptadas para descubrir Granada en familia con calma y curiosidad.',
    duration: 'Duracion',
    price: 'Precio',
    languages: 'Idiomas',
    backToTours: 'Volver a rutas',
    heroEyebrow: 'Rutas culturales en Granada',
    heroTitle: 'Granada, una historia en cada paso',
    heroText:
      'Rutas a pie y reservas para grupos privados para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.',
    heroImageAlt: 'La Alhambra bajo nubes dramaticas vista desde el Albaicin',
    footerIntro:
      'Rutas a pie por la Alhambra, el Albaicin y la ciudad historica, con opcion de reserva privada y una mirada cercana y cultural.',
    catalogIntro: 'Elige una ruta y, si vienes en grupo, puedes solicitarla como experiencia privada por WhatsApp o email.',
    metaHome: 'Rutas turisticas en Granada con opcion de reserva privada y experiencias culturales en espanol e ingles.',
  },
  en: {
    htmlLang: 'en',
    label: 'English',
    navTours: 'Tours',
    navBlog: 'Journal',
    navTailorMade: 'Tailor-made',
    navPrivateTours: 'Private tours',
    navDayTrips: 'Day Trips',
    navAbout: 'About Elyara',
    navContact: 'Contact',
    footerContact: 'Contact',
    reserve: 'Reserve',
    reserveWhatsapp: 'Reserve by WhatsApp',
    reserveEmail: 'Reserve by email',
    reservePrivateGroup: 'Reserve private group',
    privateGroupTitle: 'Also for private groups',
    privateGroupText: 'You can request this route as a private experience and adapt language, pace and group interests by WhatsApp or email.',
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
    relatedToursText: 'Connect this story with a guided route through Granada and reserve by WhatsApp or email.',
    featuredTours: 'Featured tours',
    allTours: 'All tours',
    kidsToursTitle: 'Kids',
    kidsToursIntro: 'Short, visual and family-friendly routes to discover Granada with calm and curiosity.',
    duration: 'Duration',
    price: 'Price',
    languages: 'Languages',
    backToTours: 'Back to tours',
    heroEyebrow: 'Cultural routes in Granada',
    heroTitle: 'Granada, a story in every step',
    heroText:
      'Walking routes and private group reservations to discover the history, characters and corners that give meaning to the city.',
    heroImageAlt: 'The Alhambra beneath dramatic clouds from the Albaicin',
    footerIntro:
      'Walking routes through the Alhambra, the Albaicin and the historic city, with private booking available and a warm cultural perspective.',
    catalogIntro: 'Choose a route and, if you are coming as a group, request it as a private experience by WhatsApp or email.',
    metaHome: 'Tourism routes in Granada with private booking available and cultural experiences in Spanish and English.',
  },
} satisfies Record<Locale, Record<string, string>>;

export const contactEmail = 'elyaratours@gmail.com';
export const whatsappDisplayNumber = '+34 611 126 979';
export const whatsappNumber = '34611126979';
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
export const instagramHandle = '@elyaratours';
export const instagramUrl = 'https://instagram.com/elyaratours';
export const emailReservationUrl = `mailto:${contactEmail}`;

const whatsappMessageCopy = {
  es: {
    general: 'Hola, quiero reservar una ruta con Elyara Tours Granada.',
    privateGeneral: 'Hola, quiero solicitar una ruta para grupo privado con Elyara Tours Granada.',
    tour: (tourTitle: string) => `Hola, quiero reservar la ruta "${tourTitle}" con Elyara Tours Granada.`,
    privateTour: (tourTitle: string) =>
      [
        `Hola, quiero reservar la ruta "${tourTitle}" como grupo privado con Elyara Tours Granada.`,
        '',
        'Fecha aproximada:',
        'Numero de personas:',
        'Idioma preferido:',
        'Intereses del grupo:',
      ].join('\n'),
    scheduled: ({ tourTitle, dateLabel, time, language }: ScheduledWhatsAppReservation) =>
      [
        'Hola, quiero reservar esta fecha con Elyara Tours Granada.',
        '',
        `Ruta: ${tourTitle}`,
        `Fecha: ${dateLabel}`,
        `Hora: ${time}`,
        `Idioma: ${language}`,
        '',
        'Nombre:',
        'Numero de personas:',
      ].join('\n'),
    tailorMade: 'Hola, quiero informacion para disenar una ruta o viaje a medida en Granada.',
    dayTrip: (tourTitle: string) =>
      [
        `Hola, quiero solicitar la excursion privada "${tourTitle}" con Elyara Tours Granada.`,
        '',
        'Fecha aproximada:',
        'Numero de personas:',
        'Ciudad o zona de recogida:',
        'Experiencia preferida en Granada: Alhambra / Centro Historico y Albaicin / a medida',
        'Transporte privado: si / no / por confirmar',
        'Comida en restaurante local: si / no / por confirmar',
      ].join('\n'),
  },
  en: {
    general: 'Hello, I would like to book a tour with Elyara Tours Granada.',
    privateGeneral: 'Hello, I would like to request a route for a private group with Elyara Tours Granada.',
    tour: (tourTitle: string) => `Hello, I would like to book the "${tourTitle}" tour with Elyara Tours Granada.`,
    privateTour: (tourTitle: string) =>
      [
        `Hello, I would like to book the "${tourTitle}" route as a private group with Elyara Tours Granada.`,
        '',
        'Approximate date:',
        'Number of people:',
        'Preferred language:',
        'Group interests:',
      ].join('\n'),
    scheduled: ({ tourTitle, dateLabel, time, language }: ScheduledWhatsAppReservation) =>
      [
        'Hello, I would like to book this date with Elyara Tours Granada.',
        '',
        `Tour: ${tourTitle}`,
        `Date: ${dateLabel}`,
        `Time: ${time}`,
        `Language: ${language}`,
        '',
        'Name:',
        'Number of people:',
      ].join('\n'),
    tailorMade: 'Hello, I would like information about a tailor-made route or trip in Granada.',
    dayTrip: (tourTitle: string) =>
      [
        `Hello, I would like to request the private day trip "${tourTitle}" with Elyara Tours Granada.`,
        '',
        'Approximate date:',
        'Number of people:',
        'Pickup city or area:',
        'Preferred Granada experience: Alhambra / Historic Centre and Albaicin / tailor-made',
        'Private transfer: yes / no / to confirm',
        'Local restaurant lunch: yes / no / to confirm',
      ].join('\n'),
  },
} satisfies Record<
  Locale,
  {
    general: string;
    privateGeneral: string;
    tour: (tourTitle: string) => string;
    privateTour: (tourTitle: string) => string;
    scheduled: (reservation: ScheduledWhatsAppReservation) => string;
    tailorMade: string;
    dayTrip: (tourTitle: string) => string;
  }
>;

interface ScheduledWhatsAppReservation {
  tourTitle: string;
  dateLabel: string;
  time: string;
  language: string;
}

export const contactContent = {
  es: {
    routeSlug: 'contacto',
    title: 'Contacto',
    eyebrow: 'Hablemos',
    heading: 'Hablemos de tu visita a Granada',
    intro:
      'Si tienes una pregunta, quieres reservar una ruta privada o necesitas orientar tu viaje, puedes escribirnos directamente por WhatsApp, correo o Instagram.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailCta: 'Escribir un correo',
    whatsappCta: 'Escribir por WhatsApp',
    instagramCta: 'Ver Instagram',
    reasonsTitle: 'Para que puedes escribirnos',
    reasons: ['Reservas de rutas', 'Rutas privadas', 'Viajes a medida', 'Dudas sobre Granada'],
    footerLink: 'Ver pagina de contacto',
    imageAlt: 'Ilustracion acuarela de un cuaderno de viaje sobre Granada y la Alhambra',
    metaDescription:
      'Contacta con Elyara Tours Granada por WhatsApp, email o Instagram para rutas privadas, viajes a medida y preguntas sobre tu visita a Granada.',
    faq: [
      {
        question: 'Como puedo reservar una ruta en Granada?',
        answer: 'Puedes escribir por WhatsApp al +34 611 126 979 o por email a elyaratours@gmail.com indicando fechas, numero de personas, idioma y la ruta que te interesa.',
      },
      {
        question: 'Puedo pedir una ruta privada o personalizada?',
        answer: 'Si. Puedes solicitar una ruta privada, una consultoria de viaje o una propuesta a medida segun tu tiempo e intereses en Granada.',
      },
    ],
  },
  en: {
    routeSlug: 'contact',
    title: 'Contact',
    eyebrow: 'Let us talk',
    heading: 'Let us talk about your visit to Granada',
    intro:
      'If you have a question, want to book a private route or need help shaping your trip, you can contact us directly by WhatsApp, email or Instagram.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailCta: 'Send an email',
    whatsappCta: 'Write on WhatsApp',
    instagramCta: 'View Instagram',
    reasonsTitle: 'What you can write about',
    reasons: ['Route reservations', 'Private routes', 'Tailor-made trip planning', 'Questions about Granada'],
    footerLink: 'View contact page',
    imageAlt: 'Watercolor illustration of a Granada travel notebook and the Alhambra',
    metaDescription:
      'Contact Elyara Tours Granada by WhatsApp, email or Instagram for private routes, tailor-made trip planning and questions about visiting Granada.',
    faq: [
      {
        question: 'How can I book a route in Granada?',
        answer: 'You can write by WhatsApp to +34 611 126 979 or by email to elyaratours@gmail.com with your dates, group size, preferred language and the route you are interested in.',
      },
      {
        question: 'Can I request a private or custom route?',
        answer: 'Yes. You can request a private route, a trip consultation or a tailor-made proposal based on your time and interests in Granada.',
      },
    ],
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
    whatsappLabel: string;
    instagramLabel: string;
    emailCta: string;
    whatsappCta: string;
    instagramCta: string;
    reasonsTitle: string;
    reasons: string[];
    footerLink: string;
    imageAlt: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
  }
>;

export const reservationCalendarContent = {
  es: {
    eyebrow: 'Proximas fechas',
    title: 'Calendario de reservas',
    intro: 'Consulta las salidas programadas de los proximos 2 meses y reserva tu plaza por WhatsApp o email.',
    tourTitle: 'Proximas salidas',
    dateSelected: 'Fecha seleccionada',
    availableDate: 'Fecha disponible',
    noAvailability: 'No hay salidas programadas para esta fecha.',
    viewTour: 'Ver ruta',
    reserveDate: 'Reservar esta fecha',
    reserveDateWhatsapp: 'Reservar por WhatsApp',
    reserveDateEmail: 'Reservar por email',
    at: 'a las',
    route: 'Ruta',
    language: 'Idioma',
  },
  en: {
    eyebrow: 'Upcoming dates',
    title: 'Booking calendar',
    intro: 'Check the scheduled departures for the next 2 months and reserve your place by WhatsApp or email.',
    tourTitle: 'Upcoming departures',
    dateSelected: 'Selected date',
    availableDate: 'Available date',
    noAvailability: 'There are no scheduled departures for this date.',
    viewTour: 'View tour',
    reserveDate: 'Reserve this date',
    reserveDateWhatsapp: 'Reserve by WhatsApp',
    reserveDateEmail: 'Reserve by email',
    at: 'at',
    route: 'Tour',
    language: 'Language',
  },
} satisfies Record<Locale, Record<string, string>>;

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
    whatsappCta: 'Consultar por WhatsApp',
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
      'Ajustamos la ruta o consultoria y cerramos la reserva por WhatsApp o email.',
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
    faq: [
      {
        question: 'Que diferencia hay entre consultoria y ruta personalizada?',
        answer: 'La consultoria te ayuda a ordenar el viaje antes de llegar. La ruta personalizada es una visita privada guiada por Granada creada alrededor de tus intereses.',
      },
      {
        question: 'Como se confirma una propuesta a medida?',
        answer: 'Primero nos escribes por WhatsApp o email con fechas, numero de personas, idioma y prioridades. Despues ajustamos la idea y cerramos la reserva por el canal que prefieras.',
      },
    ],
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
    whatsappCta: 'Inquire by WhatsApp',
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
      'We adjust the route or consultation and confirm everything by WhatsApp or email.',
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
    faq: [
      {
        question: 'What is the difference between consultation and a custom route?',
        answer: 'Consultation helps you shape the trip before arrival. A custom route is a private guided visit through Granada built around your interests.',
      },
      {
        question: 'How is a tailor-made proposal confirmed?',
        answer: 'You first write by WhatsApp or email with your dates, group size, preferred language and priorities. Then we adjust the idea and confirm the reservation through your preferred channel.',
      },
    ],
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
    whatsappCta: string;
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
    faq: { question: string; answer: string }[];
  }
>;

export const dayTripsContent = {
  es: {
    routeSlug: 'excursiones-un-dia-granada',
    pageTitle: 'Excursiones de un dia a Granada',
    metaDescription:
      'Excursiones privadas de un dia a Granada desde Malaga, Costa del Sol o Cordoba con guia cultural, opciones culturales y propuesta a medida.',
    eyebrow: 'Excursiones privadas a Granada',
    title: 'Excursiones de un dia a Granada disenadas para tu grupo',
    intro:
      'Ven a Granada desde Malaga, la Costa del Sol o Cordoba con una propuesta privada, cultural y flexible. Elegimos juntos la experiencia principal, el ritmo, el transporte y los complementos para que el dia tenga sentido sin convertirse en una excursion masiva.',
    image: '/images/Granada-main.jpeg',
    imageAlt: 'Vista de Granada y la Alhambra para una excursion privada de un dia',
    primaryCta: 'Solicita tu excursion privada',
    emailCta: 'Solicitar por email',
    secondaryCta: 'Ver ciudades de salida',
    originsTitle: 'Elige tu ciudad de salida',
    originsText: 'Estas propuestas son puntos de partida. Ajustamos horarios, recogida, transporte y experiencia segun disponibilidad e intereses.',
    chooseTitle: 'Elige tu experiencia en Granada',
    chooseText: 'Construye el dia alrededor de una experiencia principal. La Alhambra y el Centro Historico con Albaicin se presentan como alternativas completas, no como una lista obligatoria para hacer todo en pocas horas.',
    completeTitle: 'Completa tu excursion',
    completeText: 'Puedes anadir servicios opcionales para que el dia sea mas comodo, gastronomico o personalizado.',
    requestTitle: 'Precio bajo consulta',
    requestText:
      'El precio depende del numero de personas, ciudad o zona de recogida, transporte, entradas, comida y experiencia seleccionada. Escribenos y prepararemos una propuesta clara para tu dia.',
    detailEyebrow: 'Excursion privada a Granada',
    experienceOptions: [
      {
        title: 'Alhambra privada',
        text: 'Visita privada a la Alhambra y Generalife con guia cultural. El recorrido depende siempre de la disponibilidad de entradas a monumentos.',
        details: ['Guia cultural', 'Palacios, Generalife y espacios disponibles', 'Tiempo libre, comida o actividad tranquila si el itinerario lo permite'],
      },
      {
        title: 'Centro Historico + Albaicin',
        text: 'Ruta privada a pie por el Centro Historico y el Albaicin: historia, patrimonio, miradores y barrios historicos de Granada como experiencia completa.',
        details: ['Alternativa completa a la Alhambra', 'Historia urbana y patrimonio', 'Miradores, plazas y barrios historicos'],
      },
    ],
    complements: [
      {
        title: 'Traslado privado',
        text: 'Recogida opcional en hotel o punto acordado y traslado privado a Granada, segun ciudad de salida y disponibilidad.',
      },
      {
        title: 'Experiencia gastronomica local',
        text: 'Completa tu excursion con una comida en un restaurante local seleccionado segun disponibilidad, preferencias y presupuesto.',
      },
      {
        title: 'Itinerario a medida',
        text: 'Ajustamos la experiencia a tus intereses, horarios, ritmo del grupo y disponibilidad de entradas o servicios.',
      },
    ],
    faq: [
      {
        question: 'Las entradas a la Alhambra estan incluidas?',
        answer: 'Las entradas a monumentos dependen de disponibilidad y se confirman al preparar la propuesta. No se garantiza acceso a la Alhambra sin entradas disponibles.',
      },
      {
        question: 'Puedo pedir transporte privado?',
        answer: 'Si. El traslado privado puede anadirse desde Malaga, la Costa del Sol o Cordoba, con recogida en hotel o punto acordado cuando sea posible.',
      },
    ],
  },
  en: {
    routeSlug: 'day-trips-granada',
    pageTitle: 'Day Trips to Granada',
    metaDescription:
      'Private day trips to Granada from Malaga, Costa del Sol or Cordoba with a cultural guide, cultural options and a tailor-made proposal.',
    eyebrow: 'Private day trips to Granada',
    title: 'Day trips to Granada designed around your group',
    intro:
      'Travel to Granada from Malaga, the Costa del Sol or Cordoba with a private, cultural and flexible proposal. We shape the main experience, pace, transfer and optional complements together so the day feels personal rather than like a mass excursion.',
    image: '/images/Granada-main.jpeg',
    imageAlt: 'View of Granada and the Alhambra for a private day trip',
    primaryCta: 'Request your private day trip',
    emailCta: 'Request by email',
    secondaryCta: 'View departure cities',
    originsTitle: 'Choose your departure city',
    originsText: 'These proposals are starting points. Timings, pickup, transfer and experience are adjusted around availability and your interests.',
    chooseTitle: 'Choose your Granada experience',
    chooseText: 'Build the day around one main experience. The Alhambra and the Historic Centre with Albaicin are presented as complete alternatives, not as a mandatory checklist to rush through in one day.',
    completeTitle: 'Make your day complete',
    completeText: 'You can add optional services to make the day more comfortable, gastronomic or personal.',
    requestTitle: 'Price on request',
    requestText:
      'The price depends on group size, pickup city or area, transport, tickets, lunch and selected experience. Write to us and we will prepare a clear proposal for your day.',
    detailEyebrow: 'Private day trip to Granada',
    experienceOptions: [
      {
        title: 'Alhambra Private Tour',
        text: 'Private visit to the Alhambra and Generalife with a cultural guide. The route always depends on monument ticket availability.',
        details: ['Cultural guide', 'Palaces, Generalife and available spaces', 'Free time, lunch or a calm complementary activity if the itinerary allows'],
      },
      {
        title: 'Historic Centre & Albaicin',
        text: 'Private walking route through the Historic Centre and Albaicin: history, heritage, viewpoints and historic neighborhoods as a complete Granada experience.',
        details: ['Complete alternative to the Alhambra', 'Urban history and heritage', 'Viewpoints, squares and historic neighborhoods'],
      },
    ],
    complements: [
      {
        title: 'Private transfer',
        text: 'Optional hotel or agreed pickup point and private transfer to Granada, depending on departure city and availability.',
      },
      {
        title: 'Local restaurant lunch',
        text: 'Complete your day with lunch at a carefully selected local restaurant, depending on availability, preferences and budget.',
      },
      {
        title: 'Tailor-made itinerary',
        text: 'We adapt the experience to your interests, timing, group pace and availability of tickets or services.',
      },
    ],
    faq: [
      {
        question: 'Are Alhambra tickets included?',
        answer: 'Monument tickets depend on availability and are confirmed while preparing the proposal. Alhambra access is not guaranteed without available tickets.',
      },
      {
        question: 'Can I request private transport?',
        answer: 'Yes. Private transfer can be added from Malaga, the Costa del Sol or Cordoba, with hotel or agreed pickup when possible.',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    routeSlug: string;
    pageTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    primaryCta: string;
    emailCta: string;
    secondaryCta: string;
    originsTitle: string;
    originsText: string;
    chooseTitle: string;
    chooseText: string;
    completeTitle: string;
    completeText: string;
    requestTitle: string;
    requestText: string;
    detailEyebrow: string;
    experienceOptions: { title: string; text: string; details: string[] }[];
    complements: { title: string; text: string }[];
    faq: { question: string; answer: string }[];
  }
>;

export const commercialToursContent = {
  es: {
    routeSlug: 'tours-privados-granada',
    pageTitle: 'Rutas guiadas privadas en Granada',
    metaDescription:
      'Solicita rutas guiadas en Granada como grupo privado: Alhambra, Albaicin, centro historico, miradores y propuestas a medida.',
    eyebrow: 'Reservas para grupos privados',
    title: 'Elige una ruta de Granada y solicitala para tu grupo',
    intro:
      'Si buscas una visita privada en Granada, no necesitas elegir un catalogo distinto. Parte de una ruta publicada y escribenos para adaptarla a vuestro idioma, ritmo e intereses.',
    image: '/images/Granada-main.jpeg',
    imageAlt: 'Vista de Granada y la Alhambra para tours privados culturales',
    primaryCta: 'Solicitar grupo privado',
    secondaryCta: 'Ver rutas disponibles',
    sections: [
      {
        title: 'Una ruta, una reserva privada',
        text: 'Las rutas publicadas son el punto de partida. La modalidad privada se acuerda al reservar, sin crear una version duplicada de la visita.',
      },
      {
        title: 'Idiomas, ritmo y enfoque flexible',
        text: 'Puedes escribirnos para ajustar idioma, duracion, intereses del grupo o una combinacion de rutas por Granada.',
      },
      {
        title: 'Reserva directa por WhatsApp o email',
        text: 'La reserva empieza por WhatsApp o correo, sin formularios largos, pagos internos ni checkout. Te respondemos con una propuesta clara.',
      },
    ],
    tourSectionTitle: 'Empieza por una ruta publicada',
    tourSectionText: 'Elige la ruta que encaje con tu viaje y solicitala como grupo privado desde la ficha de esa misma ruta.',
    editorialTitle: 'Antes de venir a Granada',
    editorialText: 'Lee historias y consejos del cuaderno para preparar mejor tu visita.',
    tailorMadeTitle: 'Quieres algo mas personal?',
    tailorMadeText: 'Tambien podemos disenar una ruta o consultoria de viaje a medida para tus fechas, intereses y ritmo.',
    faq: [
      {
        question: 'Cuanto dura un tour privado en Granada?',
        answer: 'Depende de la ruta. Muchas visitas duran entre 2 y 3 horas, pero podemos ajustar el ritmo y la duracion por WhatsApp o email segun el grupo.',
      },
      {
        question: 'Se pueden hacer tours privados en espanol e ingles?',
        answer: 'Si. Elyara ofrece rutas en espanol e ingles. Indica el idioma preferido cuando escribas para reservar.',
      },
      {
        question: 'Como se reserva una visita guiada privada?',
        answer: 'Escribenos por WhatsApp al +34 611 126 979 o por email a elyaratours@gmail.com con fecha, numero de personas, idioma e intereses. Confirmamos disponibilidad y detalles por el canal que prefieras.',
      },
    ],
  },
  en: {
    routeSlug: 'private-tours-granada',
    pageTitle: 'Private guided routes in Granada',
    metaDescription:
      'Request Granada guided routes as a private group: Alhambra, Albaicin, historic center, viewpoints and tailor-made proposals.',
    eyebrow: 'Private group reservations',
    title: 'Choose a Granada route and request it for your group',
    intro:
      'If you are looking for a private visit in Granada, you do not need a separate catalog. Start from a published route and write to adapt it to your language, pace and interests.',
    image: '/images/Granada-main.jpeg',
    imageAlt: 'View of Granada and the Alhambra for private cultural tours',
    primaryCta: 'Request private group',
    secondaryCta: 'View available routes',
    sections: [
      {
        title: 'One route, one private request',
        text: 'Published routes are the starting point. The private modality is agreed when booking, without creating a duplicated version of the visit.',
      },
      {
        title: 'Flexible language, pace and focus',
        text: 'You can write to adjust the language, duration, group interests or a combination of Granada routes.',
      },
      {
        title: 'Direct booking by WhatsApp or email',
        text: 'Booking starts by WhatsApp or email, without long forms, internal payments or checkout. You receive a clear proposal in response.',
      },
    ],
    tourSectionTitle: 'Start from a published route',
    tourSectionText: 'Choose the route that fits your trip and request it as a private group from that same route page.',
    editorialTitle: 'Before you come to Granada',
    editorialText: 'Read journal stories and tips to prepare your visit with more context.',
    tailorMadeTitle: 'Want something more personal?',
    tailorMadeText: 'We can also design a custom route or trip consultation around your dates, interests and pace.',
    faq: [
      {
        question: 'How long does a private tour in Granada last?',
        answer: 'It depends on the route. Many visits last between 2 and 3 hours, but pace and duration can be adjusted by WhatsApp or email for your group.',
      },
      {
        question: 'Can private tours be in English or Spanish?',
        answer: 'Yes. Elyara offers routes in English and Spanish. Tell us your preferred language when you write to reserve.',
      },
      {
        question: 'How do I book a private guided visit?',
        answer: 'Write by WhatsApp to +34 611 126 979 or by email to elyaratours@gmail.com with your date, group size, language and interests. We confirm availability and details through your preferred channel.',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    routeSlug: string;
    pageTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    primaryCta: string;
    secondaryCta: string;
    sections: { title: string; text: string }[];
    tourSectionTitle: string;
    tourSectionText: string;
    editorialTitle: string;
    editorialText: string;
    tailorMadeTitle: string;
    tailorMadeText: string;
    faq: { question: string; answer: string }[];
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

export function getCommercialToursContent(locale: Locale) {
  return commercialToursContent[locale];
}

export function getCommercialToursPath(locale: Locale) {
  return `/${locale}/${commercialToursContent[locale].routeSlug}/`;
}

export function getDayTripsContent(locale: Locale) {
  return dayTripsContent[locale];
}

export function getDayTripsPath(locale: Locale) {
  return `/${locale}/${dayTripsContent[locale].routeSlug}/`;
}

export function getReservationCalendarContent(locale: Locale) {
  return reservationCalendarContent[locale];
}

export function getEmailReservationUrl() {
  return emailReservationUrl;
}

export function getWhatsAppUrl(message?: string) {
  return message ? `${whatsappUrl}?text=${encodeURIComponent(message)}` : whatsappUrl;
}

export function getWhatsAppReservationUrl(locale: Locale) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].general);
}

export function getPrivateGroupWhatsAppReservationUrl(locale: Locale) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].privateGeneral);
}

export function getTourReservationEmailUrl(tourTitle: string) {
  return `${emailReservationUrl}?subject=${encodeURIComponent(tourTitle)}`;
}

export function getPrivateTourReservationEmailUrl(locale: Locale, tourTitle: string) {
  const subject = locale === 'es' ? `Grupo privado: ${tourTitle}` : `Private group: ${tourTitle}`;
  const body = locale === 'es'
    ? [
        `Hola, quiero reservar la ruta "${tourTitle}" como grupo privado.`,
        '',
        'Fecha aproximada:',
        'Numero de personas:',
        'Idioma preferido:',
        'Intereses del grupo:',
      ].join('\n')
    : [
        `Hello, I would like to book the "${tourTitle}" route as a private group.`,
        '',
        'Approximate date:',
        'Number of people:',
        'Preferred language:',
        'Group interests:',
      ].join('\n');

  return `${emailReservationUrl}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getPrivateGroupEmailReservationUrl(locale: Locale) {
  const subject = locale === 'es' ? 'Ruta para grupo privado' : 'Private group route';

  return `${emailReservationUrl}?subject=${encodeURIComponent(subject)}`;
}

export function getTourWhatsAppReservationUrl(locale: Locale, tourTitle: string) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].tour(tourTitle));
}

export function getPrivateTourWhatsAppReservationUrl(locale: Locale, tourTitle: string) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].privateTour(tourTitle));
}

export function getDayTripWhatsAppUrl(locale: Locale, tourTitle: string) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].dayTrip(tourTitle));
}

export function getScheduledWhatsAppReservationUrl(locale: Locale, reservation: ScheduledWhatsAppReservation) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].scheduled(reservation));
}

export function getTailorMadeEmailUrl() {
  return getEmailReservationUrl();
}

export function getTailorMadeWhatsAppUrl(locale: Locale) {
  return getWhatsAppUrl(whatsappMessageCopy[locale].tailorMade);
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getBlogCategoryLabel(locale: Locale, category: string) {
  const labels: Record<string, string> = blogCategoryLabels[locale];
  return labels[category] ?? category;
}
