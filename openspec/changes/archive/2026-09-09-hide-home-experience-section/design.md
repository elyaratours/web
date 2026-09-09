## Context

The localized home page renders a three-card section with `id="experience"` directly after the hero. The shared layout exposes desktop and mobile navigation links to that anchor through localized `navAbout` copy. Removing only the section would leave broken in-page navigation, so the section and its navigation entry need to be treated together.

## Goals / Non-Goals

**Goals:**

- Remove the visible Experience/La experiencia card section from `/es/` and `/en/`.
- Remove both desktop and mobile navigation links that target `#experience`.
- Keep the home page flow otherwise unchanged and avoid introducing feature flags for a simple permanent removal.
- Clean up code that becomes unused after the section and links are removed.

**Non-Goals:**

- Redesign the home page hero, tour catalog, calendar, tailor-made section, reviews, or footer.
- Remove any reservation, WhatsApp, email, tour, blog, contact, private tours, or language-switching navigation.
- Add replacement copy or a new section in place of Experience/La experiencia.

## Decisions

- Remove the section from the localized home template rather than hiding it with CSS. This keeps rendered HTML, crawler-visible content, and accessibility tree aligned with the desired page.
- Remove the corresponding header/menu links instead of redirecting them to another section. The `Experience` label is semantically tied to the removed content and would be misleading if reused for tours or private tours.
- Delete unused localized copy keys and icon imports only if they become unreferenced. This keeps the codebase clean without broader i18n restructuring.

## Risks / Trade-offs

- Shorter home page content could slightly reduce explanatory copy -> mitigated because the hero, tour cards, tailor-made section, blog links, and SEO landings already cover discovery and reservation context.
- Removing a navigation item changes familiar menu order -> mitigated by preserving all remaining routes and CTAs.
- Specs currently require the cards -> mitigated by removing that requirement and adding explicit requirements for the new home/navigation behavior.

## Migration Plan

- Update the localized home page to remove the Experience/La experiencia section.
- Update the shared layout to remove desktop and mobile links to `#experience`.
- Remove unused localized copy and imports if no references remain.
- Run `npm run check`, `npm run build`, and strict OpenSpec validation.
- Rollback is a normal code/content revert because the site remains static.
