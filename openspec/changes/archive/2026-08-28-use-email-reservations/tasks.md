## 1. Email Reservation Helpers And Copy

- [x] 1.1 Add or update shared email reservation URL helpers in `src/lib/i18n.ts`, using `elyaratours@gmail.com` and a tour-specific subject that is exactly the tour title, and verify helper output contains no body, date, group-size, person-count, language, or itinerary fields.
- [x] 1.2 Update Spanish and English reservation, catalog, related-tour, direct-booking, and tailor-made copy to mention email instead of WhatsApp, and verify no current source copy in `src/` still tells visitors to reserve or confirm through WhatsApp.

## 2. Tour Reservation URLs

- [x] 2.1 Update all localized tour `reservationUrl` frontmatter values under `src/content/tours/` to `mailto:elyaratours@gmail.com?subject=<encoded tour title>`, and verify every subject decodes to exactly that entry's `title` value with no prefix or body text.
- [x] 2.2 Verify `npm run check` accepts the updated `mailto:` reservation URLs in the tour content collection schema.

## 3. Public CTA Updates

- [x] 3.1 Update global header and localized home reservation CTAs to use clean `mailto:elyaratours@gmail.com` links and email-oriented labels/icons, and verify generated Spanish and English home pages no longer contain `wa.me` links.
- [x] 3.2 Update tour detail reservation CTAs to use each tour's email `reservationUrl` and email-oriented icons, and verify at least one Spanish and one English generated tour page contain `mailto:elyaratours@gmail.com?subject=` with no body query parameter.
- [x] 3.3 Update Tailor-made/Viajes a medida home and standalone CTAs to use clean `mailto:elyaratours@gmail.com` links, rename WhatsApp-specific helper usage, and verify generated tailor-made pages contain no `wa.me` links or prefilled subject/body.
- [x] 3.4 Update editorial related-tour reservation CTAs to use clean email links unless the visitor has selected a concrete tour, and verify generated blog detail pages no longer contain `wa.me` links.

## 4. Specifications And Validation

- [x] 4.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 4.2 Run `npm run build` and inspect generated pages to verify general CTAs use clean email links, concrete tour CTAs include only the tour title as subject, and no generated public page contains `https://wa.me/`.
- [x] 4.3 Run `openspec validate use-email-reservations --type change --strict` and verify the OpenSpec change is valid.
