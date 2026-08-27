## Context

The site is a static Astro tourism website with a localized Tailor-made/Viajes a medida offer. The home discovery section is rendered by `TailorMadeHomeSection.astro`, while the standalone localized pages are rendered by `src/pages/[locale]/[customSlug].astro`. Both currently use the same generic cathedral image and hardcoded English alt text.

The requested `public/images/mapa.png` asset is a map-style illustration of Granada neighborhoods and landmarks. It fits the custom-route concept better than the current generic image and can be referenced directly as `/images/mapa.png`.

## Goals / Non-Goals

**Goals:**
- Use `/images/mapa.png` in the Tailor-made home section on `/es/` and `/en/`.
- Use `/images/mapa.png` on the standalone pages `/es/viajes-a-medida/` and `/en/tailor-made-trips/`.
- Use `/images/mapa.png` as the standalone page social preview image.
- Add localized image alt text to the Tailor-made content config and use it in rendered images.
- Preserve existing copy, layout, routes, and CTAs.

**Non-Goals:**
- Redesign the Tailor-made card, page hero, spacing, cropping, typography, or calls to action.
- Add extra images or a gallery.
- Rename, convert, compress, or move the provided PNG asset.
- Change tour, blog, contact, booking, API, or backend behavior.

## Decisions

- Apply the map image to both discovery and conversion surfaces.
  Alternative considered: update only the home section. Rejected because the standalone pages are the main Tailor-made conversion pages and should match the same approved visual.

- Store localized alt text in `tailorMadeContent`.
  Alternative considered: keep hardcoded English alt text in components. Rejected because the Tailor-made experience is localized and both languages should have accessible copy.

- Reference the PNG directly using exact lowercase filename casing.
  Alternative considered: convert to WebP/AVIF. Rejected because the user explicitly requested the existing `public/images/mapa.png` file and no optimization was requested.

## Risks / Trade-offs

- The PNG is larger than other optimized assets, but this change prioritizes the approved map artwork.
- The map contains embedded labels, so responsive cropping should be checked to ensure important labels remain visible.
- The implementation must use `/images/mapa.png` exactly to avoid 404s on case-sensitive hosting.
