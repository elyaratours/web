## Why

Reservations should no longer start through WhatsApp. Visitors should contact Elyara by email at `elyaratours@gmail.com`, with tour-specific email subjects only when they have selected a concrete tour.

## What Changes

- Replace WhatsApp reservation and inquiry CTAs with `mailto:elyaratours@gmail.com` links across the public site.
- Keep general reservation/contact CTAs as clean email links without prefilled subject or body.
- Use a prefilled email subject containing only the tour name when the visitor is reserving a specific tour.
- Update Spanish and English public copy so it refers to email reservations instead of WhatsApp reservations.
- Preserve the current static-site model: no internal booking form, backend handling, accounts, checkout, or payment flow.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Reservation and tailor-made inquiry flows move from WhatsApp/external reservation links to email links, with tour-specific subject prefill only for concrete tours.
- `editorial-blog`: Editorial-to-tour reservation language and behavior move from WhatsApp/external reservation links to email-based contact for related tours.

## Impact

- Affects shared localized copy and CTA URL helpers in `src/lib/i18n.ts`.
- Affects global, home, tour detail, tailor-made, and related reservation CTAs.
- Affects tour content frontmatter `reservationUrl` values under `src/content/tours/`.
- Affects Lucide icon usage where WhatsApp/message icons currently represent reservation CTAs.
- No dependencies, backend endpoints, forms, checkout, payments, accounts, or content schema changes are expected.
