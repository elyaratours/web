## Why

Visitors increasingly expect to start tour reservations through WhatsApp, especially on mobile, while email remains useful for longer inquiries. Adding WhatsApp as an approved additional channel makes every reservation CTA faster to use without introducing an internal booking or payment system.

## What Changes

- Add WhatsApp reservation and inquiry CTAs using `+34 611 126 979` as an approved public contact number.
- Keep existing email reservation/contact behavior available as an alternative channel.
- Update Spanish and English public copy so reservation CTAs communicate WhatsApp and email rather than email-only behavior.
- Prefill WhatsApp messages with useful localized context for general inquiries, concrete tour reservations, scheduled calendar dates, and tailor-made inquiries.
- Preserve the static-site reservation model: no internal booking form, backend handling, accounts, checkout, or payment flow.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Reservation, contact, and tailor-made inquiry flows expand from email-only behavior to WhatsApp plus email as external channels across public CTAs.
- `editorial-blog`: Editorial reservation CTAs expand from email-only behavior to WhatsApp plus email without introducing internal booking or payment behavior.

## Impact

- Affects shared localized contact/reservation copy and URL helpers in `src/lib/i18n.ts`.
- Affects global header, footer, localized home, tour detail, reservation calendar, commercial tour, tailor-made, contact, and editorial reservation CTAs.
- Affects scheduled reservation URL generation in `src/lib/schedule.ts`.
- May affect tour content frontmatter if tour-specific `reservationUrl` remains the canonical CTA target.
- Affects CTA icon usage where email-only icons/labels currently represent reservation entry points.
- No new dependencies, backend endpoints, forms, checkout, payments, or accounts are expected.
