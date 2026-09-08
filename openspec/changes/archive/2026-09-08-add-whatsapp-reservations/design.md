## Context

See `proposal.md` for motivation. The site is a static Astro app with localized copy and contact helpers in `src/lib/i18n.ts`. Tour-specific reservation URLs currently live in tour Markdown frontmatter, scheduled-date reservation URLs are generated in `src/lib/schedule.ts`, and CTAs are rendered across shared layout, home, tour detail, calendar, commercial, tailor-made, contact, and blog pages.

## Goals / Non-Goals

**Goals:**

- Add one approved WhatsApp number, `+34 611 126 979`, and derive all WhatsApp links from a normalized `34611126979` value.
- Keep existing email behavior available while adding WhatsApp as a parallel reservation/contact channel.
- Use localized prefilled WhatsApp text for general reservations, concrete tour reservations, scheduled-date reservations, and tailor-made inquiries.
- Keep the implementation static, data-driven, and compatible with GitHub Pages.
- Keep visible copy aligned with the new dual-channel behavior in Spanish and English.

**Non-Goals:**

- Adding an internal booking form, payment flow, checkout, account system, CRM integration, or backend message handling.
- Adding a WhatsApp widget, chat embed, tracking script, or new runtime dependency.
- Changing tour titles, slugs, prices, descriptions, images, availability rules, or publication state unless a reservation URL must be derived differently.
- Removing email as a reservation or contact channel.

## Decisions

- Define WhatsApp contact constants and URL builders in `src/lib/i18n.ts`. Alternative considered: hard-code `wa.me` links in each component; rejected because the phone number and encoding rules would be duplicated across many CTAs.
- Normalize the phone number once as `34611126979` for `wa.me` URLs while displaying `+34 611 126 979` in public copy. Alternative considered: storing only the formatted display number; rejected because link generation needs the international number without spaces or plus signs.
- Build WhatsApp messages with `encodeURIComponent` from localized templates. Alternative considered: unencoded query strings; rejected because spaces, accents, punctuation, and line breaks would produce fragile URLs.
- Preserve existing email helpers and add parallel WhatsApp helpers instead of replacing `mailto:` URLs. Alternative considered: changing `reservationUrl` everywhere to WhatsApp; rejected because the chosen behavior keeps email as an alternative channel.
- Prefer generating tour-specific WhatsApp URLs at render time from tour data instead of adding a new frontmatter field to every tour. Alternative considered: adding `whatsappReservationUrl` to content entries; rejected because it would duplicate derivable data and increase the chance of localized content drift.
- Keep scheduled-date email URLs as-is where they already carry useful date context, and add equivalent scheduled-date WhatsApp URLs. Alternative considered: simplifying scheduled email links to clean mailto links; rejected because existing calendar behavior already captures selected date, time, and language.
- Update labels/icons to communicate channel clearly: WhatsApp actions should mention WhatsApp and email actions should mention email. Alternative considered: a single generic “Reservar” CTA; rejected because visitors should understand which app or client will open.

## Risks / Trade-offs

- WhatsApp URL handling varies by device and installed apps -> use standard `https://wa.me/34611126979?text=...` links so desktop web and mobile app flows both have a supported path.
- More CTAs can create visual clutter, especially on mobile -> keep the WhatsApp action primary where reservation intent is high and present email as a secondary action or compact contact value.
- Prefilled messages can become too long for small contexts -> keep general/tour messages concise and reserve detailed fields for scheduled-date reservations.
- Tour structured data may still expose an email `offers.url` if `reservationUrl` remains email-based -> acceptable initially because both email and WhatsApp are visible public channels; if needed, SEO data can later point to the canonical tour page rather than either contact channel.

## Migration Plan

- Add shared WhatsApp constants, display labels, and localized URL helpers in `src/lib/i18n.ts`.
- Add scheduled-date WhatsApp URL generation in `src/lib/schedule.ts` while preserving existing scheduled email reservation URLs.
- Update CTAs in shared layout, home, tour detail, reservation calendar, commercial landing, tailor-made, contact, footer, and blog detail pages.
- Update localized copy that currently says reservations are email-only.
- Run `npm run check`, `npm run build`, and targeted searches for stale `rather than WhatsApp`, `email only`, or email-only reservation copy in current source.
- Rollback is limited to reverting the CTA/helper/copy changes because no persisted data, backend state, or external dependency is introduced.
