import { googleBusinessProfileUrl, type Locale } from './i18n';

export interface ApprovedReviewEntry {
  id: string;
  source: 'Google Business Profile';
  sourceUrl: string;
  attribution: string;
  originalLanguage: Locale;
  originalText: string;
  localizedText?: Partial<Record<Locale, { text: string; approved: boolean }>>;
  approved: boolean;
  published: boolean;
  date?: string;
}

export interface DisplayReview {
  id: string;
  source: ApprovedReviewEntry['source'];
  sourceUrl: string;
  attribution: string;
  text: string;
  originalLanguage: Locale;
  displayLanguage: Locale;
  isApprovedTranslation: boolean;
  date?: string;
}

export const approvedReviewEntries: ApprovedReviewEntry[] = [
  {
    id: 'carlos-garcia-garcia',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Carlos Garcia Garcia',
    originalLanguage: 'es',
    originalText:
      'Muy buena experiencia, hemos hecho un tour con Laura y la verdad que nos ha encantado, se nota que le encanta su trabajo, te cuenta muchísimas cosas interesantes y ves sitios preciosos.',
    approved: true,
    published: true,
  },
  {
    id: 'marina-vargas',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Marina Vargas',
    originalLanguage: 'es',
    originalText:
      'Nos hizo un tour excelente a mis amigas y a mi! Laura es de Granada y nos enseñó todos los rincones y lugares más especiales en una visita estupenda, sin duda repetiré cuando tenga más visitas! Un placer',
    approved: true,
    published: true,
  },
  {
    id: 'cristina-leon-garcia',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Cristina Leon Garcia',
    originalLanguage: 'es',
    originalText:
      'Muy buena experiencia!!! ☺️ La guía fue súper simpática y nos explicó todo de forma muy clara y entretenida. Si venís a Granada lo recomiendo!!',
    approved: true,
    published: true,
  },
  {
    id: 'sofia-fernandez-leon',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Sofía Fernández León',
    originalLanguage: 'es',
    originalText: 'Me encantó esta experiencia, aprendí mucho y sobretodo me sentí muy cómoda. Lo recomiendo!',
    approved: true,
    published: true,
  },
  {
    id: 'serena-vargas',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Serena Vargas',
    originalLanguage: 'es',
    originalText:
      'Soy un poco escéptica con los tours, pero encontrarme con Laura fue una casualidad maravillosa! Se nota que ama la ciudad y fue muy flexible con el tour. Una súper experiencia y muy recomendada!',
    approved: true,
    published: true,
  },
  {
    id: 'adriana-munoz',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Adriana muñoz',
    originalLanguage: 'es',
    originalText:
      'Fuimos un grupo y quedamos encantados con la guía. Servicio increíble, además de que nos enamoramos de la ciudad. Súper recomendado ! ☺️',
    approved: true,
    published: true,
  },
  {
    id: 'luis-fernandez-leon',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Luis Fernández León',
    originalLanguage: 'es',
    originalText:
      'Excelente experiencia. Laura es una guía profesional que le gusta su trabajo y sabe muchísimo. Salimos encantados y se nos pasó volando',
    approved: true,
    published: true,
  },
  {
    id: 'tere-maldonado',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Tere Maldonado',
    originalLanguage: 'es',
    originalText: 'Fuimos de viaje a Granada y tuvimos la suerte de descubrirla de la mano de Laura, nos encantó.',
    approved: true,
    published: true,
  },
  {
    id: 'laura-acebal',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Laura Acebal',
    originalLanguage: 'es',
    originalText:
      'Hicimos un tour por Granada con Laura y la experiencia no pudo ser mejor. Súper amable y cercana, y además aprendimos un montón de cosas y curiosidades que en un tour convencional no te cuentan. Se nota que le gusta lo que hace y hace que el tour sea muy ameno.',
    approved: true,
    published: true,
  },
  {
    id: 'maria-israel-navarro',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'María Israel Navarro',
    originalLanguage: 'es',
    originalText: 'Más bella aûn cuando te acompañan explicándote cada detalle.',
    approved: true,
    published: true,
  },
  {
    id: 'lidia-leon-delgado',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Lidia León Delgado',
    originalLanguage: 'es',
    originalText:
      'Recomiendo 100 x100 esta empresa. La guia es una gran profesional. Visita muy amena, divertida y con muchísimas enseñanzas. Repetiré seguro !',
    approved: true,
    published: true,
  },
  {
    id: 'lucia-carmona',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Lucía Carmona',
    originalLanguage: 'es',
    originalText:
      'Una experiencia estupenda.Laura nos explicó todo súper bien y es una chica muy agradable. Mi familia y yo salimos muy contentos, lo recomiendo 100%!!!',
    approved: true,
    published: true,
  },
  {
    id: 'miguel-garcia-hernandez',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Miguel Garcia Hernandez',
    originalLanguage: 'es',
    originalText: 'Ahora sí que conozco las cosas más interesantes y bonitas de Granada!',
    approved: true,
    published: true,
  },
  {
    id: 'elvira-leon',
    source: 'Google Business Profile',
    sourceUrl: googleBusinessProfileUrl,
    attribution: 'Elvira León',
    originalLanguage: 'es',
    originalText: 'Totalmente recomendable, ha sido un recorrido muy bonito !',
    approved: true,
    published: true,
  },
];

function isCompleteApprovedReview(review: ApprovedReviewEntry) {
  return Boolean(
    review.approved &&
      review.published &&
      review.source === 'Google Business Profile' &&
      review.sourceUrl === googleBusinessProfileUrl &&
      review.attribution.trim() &&
      review.originalText.trim(),
  );
}

export function getApprovedReviews(locale: Locale): DisplayReview[] {
  return approvedReviewEntries
    .filter(isCompleteApprovedReview)
    .map((review) => {
      const localized = review.localizedText?.[locale];
      const canUseLocalizedText = Boolean(localized?.approved && localized.text.trim());
      const text = canUseLocalizedText ? localized!.text : review.originalText;

      return {
        id: review.id,
        source: review.source,
        sourceUrl: review.sourceUrl,
        attribution: review.attribution,
        text,
        originalLanguage: review.originalLanguage,
        displayLanguage: canUseLocalizedText ? locale : review.originalLanguage,
        isApprovedTranslation: canUseLocalizedText && locale !== review.originalLanguage,
        date: review.date,
      } satisfies DisplayReview;
    });
}
