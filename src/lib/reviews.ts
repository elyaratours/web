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
    image: '/images/foto-clientes-1.jpeg',
    featured: true,
    alt: {
      es: 'Atardecer sobre Granada visto desde el Albaicin',
      en: 'Sunset over Granada seen from the Albaicin',
    },
    caption: {
      es: 'Granada cambia de color cuando la ruta termina al atardecer.',
      en: 'Granada changes color as the route ends at sunset.',
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
    image: '/images/Foto-clientes-2.jpeg',
    alt: {
      es: 'Vista de la Alhambra y Granada desde un mirador al anochecer',
      en: 'View of the Alhambra and Granada from a viewpoint at dusk',
    },
    caption: {
      es: 'Miradores para detenerse, mirar y entender la ciudad con calma.',
      en: 'Viewpoints for pausing, looking and understanding the city slowly.',
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
    image: '/images/Foto-clientes-3.jpeg',
    alt: {
      es: 'Carmen granadino rodeado de vegetacion y jardines',
      en: 'Granada carmen house surrounded by greenery and gardens',
    },
    caption: {
      es: 'Rincones verdes que cuentan otra forma de vivir Granada.',
      en: 'Green corners that reveal another way of experiencing Granada.',
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
