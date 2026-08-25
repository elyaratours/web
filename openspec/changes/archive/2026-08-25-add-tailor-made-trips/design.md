## Context

The site is a static Astro tourism website with localized Spanish and English routes, shared layout/navigation, home-page marketing sections, content-driven tour pages, and external WhatsApp reservation flows. The new offer should feel like part of the same public tourism experience while avoiding backend, form handling, payments, or account features.

## Goals / Non-Goals

**Goals:**

- Keep the tailor-made offer statically generated and GitHub Pages compatible.
- Add a concise home discovery section after tours and before traveler reviews.
- Add localized standalone pages with SEO metadata and language alternates.
- Present consultation and personalized Granada routes as two related but distinct service paths.
- Reuse existing visual language, buttons, layout shell, and external WhatsApp pattern.

**Non-Goals:**

- Do not add an internal form submission flow.
- Do not add payment, checkout, availability, or booking management.
- Do not model this offer as a normal tour content entry unless later needed for catalog behavior.
- Do not broaden the service to general Andalucia trip planning in this change.

## Decisions

- Create localized static pages for the offer rather than a tour entry.
  - Rationale: this is a flexible service with consultation and custom route paths, not a fixed route with duration and price like existing tours.
  - Alternative considered: add a `Ruta personalizada` Markdown entry to the tours collection. Rejected because it would force tour-specific fields and place the offer inside the fixed catalog.

- Use localized route slugs `/es/viajes-a-medida/` and `/en/tailor-made-trips/`.
  - Rationale: the URLs are readable, SEO-friendly, and match the language-aware routing used elsewhere.
  - Alternative considered: a single unlocalized `/tailor-made/` page. Rejected because the rest of the public experience is localized.

- Reuse the external WhatsApp CTA pattern with prefilled inquiry text.
  - Rationale: it matches the existing reservation direction and avoids privacy/backend complexity from internal forms.
  - Alternative considered: embed a contact form similar to masquetours.com. Rejected for this change because it would introduce form handling and privacy requirements.

- Keep copy in the existing localization layer where practical.
  - Rationale: home, navigation, CTA labels, page metadata, and static offer copy should remain easy to render by locale without introducing a new content collection.
  - Alternative considered: create a new content collection for service pages. Rejected as unnecessary for one bilingual static offer.

- Build the home block as a reusable component if the standalone page needs similar visual cards or CTA treatment.
  - Rationale: this keeps markup consistent without over-abstracting all page copy.
  - Alternative considered: duplicate all markup directly in each page. Acceptable for very small content, but less desirable if the service cards and CTA are shared.

## Risks / Trade-offs

- Static copy can become bulky in `i18n.ts` -> Keep the structure simple and only extract data that is shared between home and the standalone page.
- WhatsApp-only inquiry may not suit every visitor -> Use clear CTA copy and include enough guidance in the prefilled message to lower friction.
- The offer could be mistaken for a fixed-priced tour -> Explicitly label it as consultation and personalized planning, and avoid presenting fixed tour metadata unless a real price/duration is decided later.
- Navigation crowding on desktop/mobile -> Prefer discovery links from the home section and page CTAs; add header navigation only if it fits the existing layout without weakening primary tour discovery.

## Migration Plan

- Add localized copy and route helpers for the tailor-made offer.
- Add the home discovery section in the agreed position.
- Add the localized standalone page with alternates and SEO metadata.
- Verify with the existing check/build commands.
- Rollback is removal of the new section, localized page, and associated copy.
