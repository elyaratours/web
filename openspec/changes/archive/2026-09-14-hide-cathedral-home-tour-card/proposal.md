## Why

The localized Home route-card grid should focus on the routes Elyara wants to promote there, while the `Catedral y Capilla Real` tour remains available as a regular route. The requested behavior is to remove that tour only from the Home cards in Spanish and English, not to unpublish it or remove it from route/detail discovery.

## What Changes

- Hide the `cathedral-royal-chapel` tour from the general route-card grid on `/es/` and `/en/`.
- Keep the Spanish and English Cathedral/Royal Chapel tour detail pages published and routable.
- Keep the tour available in non-Home route/discovery contexts and preserve related SEO landing/editorial links.
- Keep the Home reservation calendar unchanged, including any scheduled availability that may reference the tour.
- Keep the Home tour `ItemList` structured data aligned with the route cards visible in the Home tour grid.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `static-tourism-site`: Home route-card visibility becomes curatable independently from whether a published tour remains available elsewhere.

## Impact

- Affected code: localized Home page tour-card selection in `src/pages/[locale]/index.astro`.
- No content entry needs to be unpublished or deleted.
- No route URL, sitemap behavior, SEO landing page, blog link, reservation calendar behavior, or payment/booking behavior changes are intended.
