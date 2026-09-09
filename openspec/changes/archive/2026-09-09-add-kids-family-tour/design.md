## Context

The site already renders tours from `src/content/tours` through Astro Content Collections. Tour entries currently use a `category` field with `local` and `day-trip`, and the Home tour catalog receives local tours from the shared tour helpers. The requested family route should stay inside this data-driven model rather than becoming a hand-coded card or standalone page.

## Goals / Non-Goals

**Goals:**

- Add a children/family tour category that can support `Granada en familia` now and more children's routes later.
- Display children's tours as a localized subsection inside the Home tours area.
- Publish Spanish and English tour entries with localized title, duration, price, description, image alt text, SEO description, FAQ, and reservation links.
- Preserve existing local tours, day trips, tour detail pages, sitemap generation, SEO metadata, and external reservation behavior.

**Non-Goals:**

- Add a separate children landing page, booking engine, payment flow, calendar schedule, or internal inquiry form.
- Redesign all tour cards or split the whole catalog into many category tabs.
- Move existing local or day-trip tours into new routes.

## Decisions

- Extend the existing tour `category` field with a new `kids` value. This matches the existing `day-trip` separation and keeps the route data-driven.
- Keep children's tours out of the general local tour list by filtering them separately for the Home subsection. This prevents `Granada en familia` from appearing twice.
- Reuse the shared `TourCard` and generated tour detail route. This keeps SEO metadata, JSON-LD, reservation actions, and responsive styling consistent with other tours.
- Add localized helpers/copy only for labels needed by the subsection, such as `Niños`, `Kids`, and short intro text. This avoids overbuilding a full category system before more children's routes exist.
- Use the existing `/images/Niños.jpg` asset. The file name contains non-ASCII text already present in the repository, so the implementation should reference it exactly unless the asset is deliberately renamed in a separate decision.

## Risks / Trade-offs

- A new category value requires schema and helper updates -> verify with `npm run check` so all tour entries validate.
- The image has a non-ASCII file name -> verify build output references the exact public path correctly on Windows and static hosting.
- Showing a section for one tour could feel sparse -> mitigate with concise intro copy and allow the category to scale to more children's tours later.
- Price messaging needs clarity -> store the visible price as localized copy that states `7 EUR per person` and that children under 6 are free.

## Migration Plan

- Add `kids` as an allowed tour category.
- Add filtering helpers for published children's tours.
- Add localized Home subsection labels and intro copy.
- Add Spanish and English tour entries for the family route.
- Render the children subsection on localized Home pages only when published entries exist.
- Run `npm run check`, `npm run build`, inspect representative Home and tour detail output, and validate OpenSpec.
- Rollback is a normal code/content revert because the site remains static.
