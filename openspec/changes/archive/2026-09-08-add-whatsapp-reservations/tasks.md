## 1. Shared Contact Helpers And Copy

- [x] 1.1 Add shared WhatsApp contact constants and URL helpers in `src/lib/i18n.ts` for display number `+34 611 126 979`, normalized number `34611126979`, general inquiries, tour-specific reservations, scheduled-date reservations, and tailor-made inquiries; verify helper output uses `https://wa.me/34611126979` and URL-encodes message text.
- [x] 1.2 Preserve existing email helpers in `src/lib/i18n.ts` while adding parallel WhatsApp helpers; verify current clean `mailto:elyaratours@gmail.com` and tour-subject email URLs still work for existing email CTAs.
- [x] 1.3 Update Spanish and English reservation, catalog, direct-booking, contact, commercial, editorial, calendar, and tailor-made copy to describe WhatsApp and email as reservation/contact channels; verify current `src/` copy no longer describes reservation behavior as email-only.

## 2. Scheduled And Tour Reservation Links

- [x] 2.1 Update scheduled departure data in `src/lib/schedule.ts` to expose a scheduled WhatsApp reservation URL alongside the existing scheduled email URL; verify scheduled WhatsApp text includes tour name, date, time, and language.
- [x] 2.2 Update tour detail reservation handling to render WhatsApp URLs from tour data at build time while preserving each tour's existing email `reservationUrl`; verify at least one Spanish and one English tour page expose both `https://wa.me/34611126979?text=` and `mailto:elyaratours@gmail.com?subject=`.
- [x] 2.3 Verify tour content collection validation still passes without requiring a new duplicated WhatsApp frontmatter field by running `npm run check`.

## 3. Public CTA Updates

- [x] 3.1 Update global header and localized home hero reservation CTAs to include WhatsApp and email paths; verify generated Spanish and English home pages contain the WhatsApp number, WhatsApp link, and email link.
- [x] 3.2 Update tour detail reservation sidebar CTAs and contact values to include WhatsApp and email; verify a generated tour detail page displays both copyable `+34 611 126 979` and `elyaratours@gmail.com`.
- [x] 3.3 Update home and tour detail reservation calendar cards to include scheduled WhatsApp and scheduled email reservation actions; verify scheduled-date cards still show selected route, date, time, and language.
- [x] 3.4 Update commercial tour landing CTAs and copy to expose WhatsApp and email inquiry flows; verify `/es/tours-privados-granada/` and `/en/private-tours-granada/` build with both external channels.
- [x] 3.5 Update Tailor-made/Viajes a medida home and standalone CTAs to expose WhatsApp and email inquiry flows; verify `/es/viajes-a-medida/` and `/en/tailor-made-trips/` build with both external channels.
- [x] 3.6 Update contact pages and footer to display email, WhatsApp, and Instagram as approved contact channels; verify localized contact pages and footer include `+34 611 126 979`, `elyaratours@gmail.com`, and `@elyaratours` without adding forms, checkout, or payment UI.
- [x] 3.7 Update editorial blog detail reservation CTAs to expose WhatsApp and email while preserving related-tour discovery links; verify a generated blog detail page includes `https://wa.me/34611126979` and `mailto:elyaratours@gmail.com`.

## 4. Validation

- [x] 4.1 Run `npm run check` and verify there are no Astro, TypeScript, or content collection errors.
- [x] 4.2 Run `npm run build` and verify the static build completes successfully.
- [x] 4.3 Search current source and generated output for stale email-only reservation language such as `rather than WhatsApp`, `email only`, `Reservar por email`, and `Reserve by email`; verify remaining matches are only historical OpenSpec archives or intentionally email-specific alternative CTAs.
- [x] 4.4 Search generated output for `https://wa.me/34611126979` and verify representative home, tour detail, calendar, commercial, tailor-made, contact, footer, and blog pages expose WhatsApp reservation/contact entry points.
- [x] 4.5 Run `openspec validate add-whatsapp-reservations --type change --strict` and verify the OpenSpec change is valid.
