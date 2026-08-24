import type { Locale } from '@/lib/i18n';

type LocalizedText = Record<Locale, string>;

interface BaseReviewMosaicItem {
  id: string;
  featured?: boolean;
}

export interface ReviewItem extends BaseReviewMosaicItem {
  type: 'review';
  excerpt: LocalizedText;
  text: LocalizedText;
  traveler: string;
  origin: LocalizedText;
  route: LocalizedText;
}

export interface PhotoItem extends BaseReviewMosaicItem {
  type: 'photo';
  image: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export type ReviewMosaicItem = ReviewItem | PhotoItem;

export const reviewMosaicItems = [
  {
    id: 'group-after-walk',
    type: 'photo',
    image: '/images/groups/group_a.jpg',
    featured: true,
    alt: {
      es: 'Grupo de viajeros durante una ruta cultural en Granada',
      en: 'Group of travelers during a cultural route in Granada',
    },
    caption: {
      es: 'Un recuerdo compartido despues de caminar Granada con calma.',
      en: 'A shared memory after walking Granada at an easy pace.',
    },
  },
  {
    id: 'maria-albaicin',
    type: 'review',
    excerpt: {
      es: 'Una ruta cercana, tranquila y llena de detalles que no habriamos visto solos.',
      en: 'A relaxed, thoughtful walk full of details we would have missed on our own.',
    },
    text: {
      es: 'Nos encanto la forma de contar la historia: cercana, tranquila y llena de detalles. No fue una clase pesada, sino una manera preciosa de mirar Granada con otros ojos.',
      en: 'We loved the way the history was told: warm, relaxed and full of details. It never felt like a heavy lecture, but like a beautiful way to see Granada with new eyes.',
    },
    traveler: 'Maria',
    origin: {
      es: 'Espana',
      en: 'Spain',
    },
    route: {
      es: 'Ruta por el Albaicin',
      en: 'Albaicin route',
    },
  },
  {
    id: 'group-viewpoint',
    type: 'photo',
    image: '/images/groups/group_b.jpg',
    alt: {
      es: 'Grupo de viajeros disfrutando una parada durante una ruta en Granada',
      en: 'Group of travelers enjoying a stop during a route in Granada',
    },
    caption: {
      es: 'Pausas, preguntas y rincones que se quedan en la memoria.',
      en: 'Pauses, questions and corners that stay in memory.',
    },
  },
  {
    id: 'james-historic-center',
    type: 'review',
    featured: true,
    excerpt: {
      es: 'The walk was personal, generous and paced perfectly for our group.',
      en: 'The walk was personal, generous and paced perfectly for our group.',
    },
    text: {
      es: 'The walk was personal, generous and paced perfectly for our group. We had time to ask questions, take photos and understand the city beyond the obvious monuments.',
      en: 'The walk was personal, generous and paced perfectly for our group. We had time to ask questions, take photos and understand the city beyond the obvious monuments.',
    },
    traveler: 'James',
    origin: {
      es: 'Reino Unido',
      en: 'United Kingdom',
    },
    route: {
      es: 'Centro historico',
      en: 'Historic center',
    },
  },
  {
    id: 'clara-alhambra',
    type: 'review',
    excerpt: {
      es: 'Muy cercano y muy humano. Salimos con la sensacion de haber entendido mejor la ciudad.',
      en: 'Warm and very human. We left feeling we understood the city much better.',
    },
    text: {
      es: 'Fue una experiencia muy cercana y muy humana. Salimos con la sensacion de haber entendido mejor la ciudad, sus barrios y las historias pequenas que normalmente pasan desapercibidas.',
      en: 'It was a warm and very human experience. We left feeling we understood the city, its neighborhoods and the small stories that usually go unnoticed much better.',
    },
    traveler: 'Clara',
    origin: {
      es: 'Mexico',
      en: 'Mexico',
    },
    route: {
      es: 'Granada cultural',
      en: 'Cultural Granada',
    },
  },
  {
    id: 'group-city-route',
    type: 'photo',
    image: '/images/groups/group_c.jpg',
    alt: {
      es: 'Grupo de viajeros al final de una visita guiada por Granada',
      en: 'Group of travelers at the end of a guided visit through Granada',
    },
    caption: {
      es: 'Grupos pequenos para escuchar, mirar y disfrutar sin prisa.',
      en: 'Small groups for listening, looking and enjoying without rushing.',
    },
  },
] satisfies ReviewMosaicItem[];

export const reviewMosaicCopy = {
  es: {
    eyebrow: 'Recuerdos de ruta',
    title: 'Opiniones de nuestros viajeros',
    intro: 'Fotos y palabras de viajeros que descubrieron Granada paso a paso.',
    openPhoto: 'Ampliar foto',
    openReview: 'Leer opinion completa',
    close: 'Cerrar',
  },
  en: {
    eyebrow: 'Route memories',
    title: 'Travelers who walked Granada with us',
    intro: 'Photos and words from travelers who discovered Granada step by step.',
    openPhoto: 'Open photo',
    openReview: 'Read full review',
    close: 'Close',
  },
} satisfies Record<Locale, Record<string, string>>;
