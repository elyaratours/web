import { contactEmail, googleBusinessProfileUrl, type Locale } from './i18n';

export const postTourReviewRequestCopy = {
  es: {
    subject: 'Gracias por caminar Granada con Elyara Tours Granada',
    message: [
      'Hola, muchas gracias por haber compartido una ruta por Granada con Elyara Tours Granada.',
      '',
      `Si te apetece, nos ayudaria mucho recibir una opinion honesta sobre tu experiencia en nuestro perfil publico de Google: ${googleBusinessProfileUrl}. Tu comentario debe reflejar solo lo que viviste realmente durante la visita.`,
      '',
      'No ofrecemos incentivos por opinar y no necesitas escribir nada con lo que no estes de acuerdo. Cualquier comentario sincero nos ayuda a mejorar y a orientar a futuros viajeros.',
      '',
      `Si prefieres enviar la opinion por email, puedes responder a ${contactEmail}.`,
    ].join('\n'),
  },
  en: {
    subject: 'Thank you for walking Granada with Elyara Tours Granada',
    message: [
      'Hello, thank you very much for sharing a Granada route with Elyara Tours Granada.',
      '',
      `If you would like to, an honest review of your experience on our public Google profile would help us a lot: ${googleBusinessProfileUrl}. Your comment should only reflect what you personally experienced during the visit.`,
      '',
      'We do not offer incentives for reviews, and you do not need to write anything you do not agree with. Any sincere feedback helps us improve and guide future travelers.',
      '',
      `If you prefer to send feedback by email, you can reply to ${contactEmail}.`,
    ].join('\n'),
  },
} satisfies Record<Locale, { subject: string; message: string }>;

export function getPostTourReviewRequestCopy(locale: Locale) {
  return postTourReviewRequestCopy[locale];
}
