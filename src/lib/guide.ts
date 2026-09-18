import type { Locale } from './i18n';

export const guidePublicName = 'Laura Hdez. León';

const authorityRouteSlugs = {
  es: 'sobre-elyara',
  en: 'about-elyara',
} satisfies Record<Locale, string>;

export const guideProfileContent = {
  es: {
    publicName: guidePublicName,
    role: 'Guía oficial de turismo',
    credential: 'guía oficial de turismo',
    education: 'Graduada en Relaciones Internacionales en inglés',
    training: 'Ciclo Superior en Guía, Información y Asistencias Turísticas',
    languages: ['Español', 'English'],
    structuredLanguages: ['Spanish', 'English'],
    profileTitle: 'Laura Hdez. León, guía oficial de turismo',
    profileEyebrow: 'Tu guía en Granada',
    profileParagraphs: [
      'Elyara Tours Granada nace de la mirada de Laura Hdez. León, guía oficial de turismo en Granada. Graduada en Relaciones Internacionales en inglés y formada con el Ciclo Superior en Guía, Información y Asistencias Turísticas, Laura ha trabajado durante años como guía en diferentes ciudades de España antes de centrar sus rutas en Granada, su ciudad.',
      'Sus visitas se ofrecen en español e inglés, con nuevos idiomas previstos más adelante. Su forma de guiar combina historia, arte, cultura y tradiciones locales para que cada viajero no solo vea Granada, sino que la entienda: sus barrios, monumentos, símbolos y las historias que hacen única esta tierra.',
    ],
    guideFacts: [
      'Guía oficial de turismo',
      'Graduada en Relaciones Internacionales en inglés',
      'Ciclo Superior en Guía, Información y Asistencias Turísticas',
      'Años de experiencia como guía en diferentes ciudades de España',
      'Rutas en español e inglés, con más idiomas previstos',
      'Enfoque cultural: historia, arte, cultura y tradiciones locales',
    ],
    homeTrustTitle: 'Guiado por Laura Hdez. León',
    homeTrustText: 'Guía oficial de turismo, formada en relaciones internacionales y guía turística, con rutas en español e inglés para entender Granada con contexto.',
    contactTrustTitle: 'Hablas directamente con Laura',
    contactTrustText: 'Laura Hdez. León revisa fechas, idioma, ritmo e intereses antes de orientar cada ruta o propuesta privada.',
    contactTrustCta: 'Conocer a Laura',
    articleAuthorLabel: 'Por',
    structuredDescription: 'Guía oficial de turismo en Granada, formada en Relaciones Internacionales en inglés y en Guía, Información y Asistencias Turísticas.',
    knowsAbout: ['Historia de Granada', 'Arte andalusí', 'Alhambra', 'Albaicín', 'Cultura y tradiciones locales', 'Rutas culturales a pie'],
  },
  en: {
    publicName: guidePublicName,
    role: 'Official tourism guide',
    credential: 'official tourism guide',
    education: 'Degree in International Relations in English',
    training: 'Higher Technician training in Guide, Information and Tourist Assistance',
    languages: ['English', 'Spanish'],
    structuredLanguages: ['English', 'Spanish'],
    profileTitle: 'Laura Hdez. León, official tourism guide',
    profileEyebrow: 'Your guide in Granada',
    profileParagraphs: [
      'Elyara Tours Granada is shaped by Laura Hdez. León, an official tourism guide in Granada. With a degree in International Relations in English and Higher Technician training in Guide, Information and Tourist Assistance, Laura has worked for years as a guide in different cities across Spain before focusing her routes on Granada, her city.',
      'Her tours are offered in English and Spanish, with more languages planned in the future. Her way of guiding brings together history, art, culture and local traditions so travelers do not only see Granada, but understand it: its neighborhoods, monuments, symbols and the stories that make this place unique.',
    ],
    guideFacts: [
      'Official tourism guide',
      'Degree in International Relations in English',
      'Higher Technician training in Guide, Information and Tourist Assistance',
      'Years of experience guiding in different Spanish cities',
      'Tours in English and Spanish, with more languages planned',
      'Cultural focus: history, art, culture and local traditions',
    ],
    homeTrustTitle: 'Guided by Laura Hdez. León',
    homeTrustText: 'Official tourism guide with training in international relations and tourist guiding, offering English and Spanish routes to understand Granada with context.',
    contactTrustTitle: 'You speak directly with Laura',
    contactTrustText: 'Laura Hdez. León reviews dates, language, pace and interests before shaping each route or private proposal.',
    contactTrustCta: 'Meet Laura',
    articleAuthorLabel: 'By',
    structuredDescription: 'Official tourism guide in Granada with training in International Relations in English and Guide, Information and Tourist Assistance.',
    knowsAbout: ['Granada history', 'Andalusian art', 'Alhambra', 'Albaicin', 'Local culture and traditions', 'Cultural walking routes'],
  },
} satisfies Record<
  Locale,
  {
    publicName: string;
    role: string;
    credential: string;
    education: string;
    training: string;
    languages: string[];
    structuredLanguages: string[];
    profileTitle: string;
    profileEyebrow: string;
    profileParagraphs: string[];
    guideFacts: string[];
    homeTrustTitle: string;
    homeTrustText: string;
    contactTrustTitle: string;
    contactTrustText: string;
    contactTrustCta: string;
    articleAuthorLabel: string;
    structuredDescription: string;
    knowsAbout: string[];
  }
>;

export function getGuideProfileContent(locale: Locale) {
  return guideProfileContent[locale];
}

export function getGuideAuthorityPath(locale: Locale) {
  return `/${locale}/${authorityRouteSlugs[locale]}/`;
}

export function isGuideAuthor(author: string) {
  return author.trim() === guidePublicName;
}
