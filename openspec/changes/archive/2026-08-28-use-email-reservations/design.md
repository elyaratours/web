## Context

The site is static and already exposes `contactEmail = 'elyaratours@gmail.com'` for footer and contact-page mail links. Reservation links currently appear in shared CTAs, tour frontmatter, tailor-made CTAs, and editorial related-tour prompts; several localized strings also explicitly mention WhatsApp.

## Goals / Non-Goals

**Goals:**

- Route every reservation or inquiry CTA to `mailto:elyaratours@gmail.com`.
- Keep general CTAs as clean `mailto:` links with no prefilled subject or body.
- Prefill only concrete tour reservations, using exactly the selected tour title as the email subject.
- Remove visitor-detail prompts from generated email links; do not prefill date, group size, person count, language, itinerary details, or body text.
- Keep the current static architecture with no backend handling, internal forms, accounts, checkout, or payment flow.

**Non-Goals:**

- Adding a contact or booking form.
- Adding availability, date, group-size, or payment handling.
- Adding a new dependency or email delivery service.
- Changing tour titles, slugs, prices, descriptions, images, or publication state.

## Decisions

- Use `mailto:` links instead of WhatsApp links for all reservation and inquiry entry points. Alternative considered: keep WhatsApp for general CTAs and email only for tour pages; rejected because the requested behavior is to stop reserving through WhatsApp.
- Use clean `mailto:elyaratours@gmail.com` for header, home, tailor-made, and general editorial CTAs. Alternative considered: prefill a generic subject like `Reserva`; rejected because the user asked for prefill only when a concrete tour is selected.
- Use the exact tour title as the `subject` query parameter for tour-specific reservation links. Alternative considered: prefixing with `Reserva -` or adding body fields; rejected because the user explicitly wants only the tour name and has no date/person fields to collect.
- Prefer a small shared helper for building email reservation URLs so encoding is consistent across generated tour URLs and direct CTAs. Alternative considered: hand-writing all `mailto:` URLs; rejected because title encoding mistakes would be easy across 14 localized tour entries.
- Replace reservation CTA copy and icons that communicate WhatsApp with email-oriented copy and mail icons. Alternative considered: keep message icons as generic contact symbols; rejected because they currently reinforce the old WhatsApp mental model.

## Risks / Trade-offs

- Some browsers or email clients handle `mailto:` links differently -> keep URLs simple and avoid body text to maximize compatibility.
- `mailto:` in tour structured data may be less useful than an HTTP booking URL -> acceptable because reservations intentionally start by email and there is no booking system.
- Existing OpenSpec archives will still mention WhatsApp historically -> only active specs and current implementation need to reflect the new reservation behavior.

## Migration Plan

- Update localized copy and helpers first so components can reference email-based labels and URLs.
- Update tour frontmatter reservation URLs to `mailto:elyaratours@gmail.com?subject=<encoded tour title>`.
- Update shared CTAs and icons to use email links.
- Validate with `npm run check`, `npm run build`, and targeted searches for remaining current-source WhatsApp reservation references.
