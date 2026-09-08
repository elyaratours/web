## Why

Visitors can already start reservations through WhatsApp, but the Home tour catalog currently emphasizes route discovery over direct reservation. Making WhatsApp reservation actions visible from each Home tour card and clarifying the Tailor-made Home CTA reduces friction for Spanish and English visitors who are ready to contact Elyara immediately.

## What Changes

- Add a localized WhatsApp reservation action to each published tour card shown in the localized Home tour catalog.
- Ensure each Home tour-card WhatsApp action opens the existing external WhatsApp flow for the selected tour, including localized prefilled text with the tour name.
- Keep the existing tour-detail link available on every Home tour card so visitors can still inspect route details before reserving.
- Clarify the Tailor-made/Viajes a medida Home WhatsApp CTA label so it reads as a reservation/inquiry action in Spanish and English rather than only `WhatsApp`.
- Preserve email reservation actions, existing Home hero CTAs, calendar reservation behavior, external-only reservation scope, and the no-checkout/no-payment constraint.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Home route discovery must expose direct localized WhatsApp reservation actions for each tour card and clearer localized WhatsApp wording in the Tailor-made Home section.

## Impact

- Affected code: localized Home page tour catalog composition, shared tour card component, localized copy in `src/lib/i18n.ts`, and Tailor-made Home CTA copy.
- Affected routes: `/es/` and `/en/`.
- External services: continues to use `https://wa.me/34611126979` and `mailto:elyaratours@gmail.com`; no new dependencies or backend services.
- SEO/structured data: no expected schema changes; visible catalog and public URLs remain the same.
