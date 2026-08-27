## Context

The shared public header is rendered in `src/layouts/BaseLayout.astro`, where the brand link currently displays only `siteName`. The project already has favicon assets in `public/`, including `favicon.svg`, so this change can reuse an existing public asset instead of introducing new imagery.

## Goals / Non-Goals

**Goals:**

- Add a small favicon mark to the existing header brand link, immediately before the site title.
- Preserve the current localized routes, navigation links, reservation CTA, sticky header behavior, and visual tone.
- Keep the favicon accessible as part of the existing brand presentation without creating redundant screen-reader output.

**Non-Goals:**

- Redesigning the header, changing navigation labels, or changing the reservation CTA.
- Adding new favicon files or changing document-level favicon metadata.
- Introducing a new image component, dependency, or content model field.

## Decisions

- Reuse `/favicon.svg` for the header mark because it is already a public brand asset and avoids adding another asset for the same identity use case. Alternative considered: use `favicon-96x96.png`; rejected because the SVG scales cleanly for the small header size.
- Render the mark inside the existing home link next to `{siteName}` so the favicon and title behave as one brand target. Alternative considered: render a separate adjacent link; rejected because it would duplicate navigation targets and create unnecessary focus stops.
- Treat the favicon as decorative within the brand link, relying on the existing visible title for the accessible name. Alternative considered: give the image its own descriptive alt text; rejected because it would likely repeat the title for assistive technology.
- Use flex alignment and a constrained image size on the brand link so the mark and title remain aligned without changing the surrounding nav structure.

## Risks / Trade-offs

- Favicon visual detail may be hard to read at small sizes -> keep it large enough to be recognizable while preserving the current title hierarchy.
- Header width could become tighter on small screens -> verify mobile layout after adding the icon and adjust spacing conservatively if needed.
- If `/favicon.svg` changes in the future, the header mark changes too -> acceptable because the header should reflect the site's current brand icon.
