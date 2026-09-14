## Context

The Home page currently renders all published local tours returned by the shared tour helper, while the same data also supports detail pages and other discovery paths. `Catedral y Capilla Real` already has `featured: false`, but the Home route-card grid does not use that field for visibility.

## Goals / Non-Goals

**Goals:**
- Hide only the Cathedral/Royal Chapel tour cards from the localized Home route-card grid.
- Preserve the tour detail pages and all non-Home discovery behavior.
- Preserve the Home reservation calendar exactly as requested.
- Keep Home structured data aligned with the visible Home route cards.

**Non-Goals:**
- Do not unpublish the tour entries.
- Do not remove related SEO landing pages, blog links, sitemap entries, or detail pages.
- Do not change pricing, copy, images, reservation URLs, route order, or calendar data.

## Decisions

- Filter the Home card collection by the stable `translationKey` value `cathedral-royal-chapel`. This covers both Spanish and English entries without relying on localized titles or route slugs.
- Use the filtered collection only for the visible Home card grid and its matching Home `ItemList` JSON-LD.
- Keep the existing unfiltered `listedTours` collection for the Home reservation calendar so the calendar remains unchanged.

## Risks / Trade-offs

- A code-level filter is explicit but could be missed when adding future Home curation rules. Mitigation: name the filtered collection clearly and keep the filter close to the Home rendering logic.
- The tour will still be reachable from SEO and route-detail paths. This is intentional and matches the requested “solo en rutas” behavior.
