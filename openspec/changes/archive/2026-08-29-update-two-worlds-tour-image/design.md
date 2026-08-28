## Context

See `proposal.md` for motivation. Tour imagery is data-driven from Markdown frontmatter under `src/content/tours/<locale>/`. The shared tour card and detail page render `tour.data.image`, and page metadata uses the same image via the existing SEO helpers.

The `Granada entre dos mundos` / `Granada Between Two Worlds` entries currently point to `/images/centro-albayzin.jpg`. The replacement asset already exists at `public/images/2mundos.jpeg` and is compatible with the content schema because tour images must use `/images/` paths.

## Goals / Non-Goals

**Goals:**

- Update both localized Two Worlds tour entries to use `/images/2mundos.jpeg`.
- Update Spanish and English alternative text to describe the new window view accurately.
- Preserve existing tour routing, ordering, pricing, reservation URLs, body content, and SEO descriptions.

**Non-Goals:**

- Change shared `TourCard` or tour detail rendering components.
- Replace imagery for other tours.
- Rename, process, crop, or remove existing image assets.

## Decisions

- Change only the Markdown frontmatter for the affected localized tour pair.
  - Rationale: all public tour image surfaces already consume the frontmatter image field, so updating metadata is the smallest correct implementation.
  - Alternative considered: special-case the image in rendering components. That would duplicate content rules in presentation code and is unnecessary.

- Keep the asset filename as `/images/2mundos.jpeg`.
  - Rationale: the user explicitly selected that file and it already exists in the public image directory.
  - Alternative considered: rename to a more descriptive filename. That could improve maintainability but would diverge from the provided path.

## Risks / Trade-offs

- The portrait-like framing may crop in horizontal cards or the detail hero -> verify catalog and detail output after build, and add image positioning only if the image appears poorly framed.
- The filename is less descriptive than other assets -> accepted because the user explicitly requested the existing path.

## Migration Plan

- Verify `public/images/2mundos.jpeg` exists and is served in dev/build output.
- Update the Spanish and English Two Worlds tour frontmatter image and alt text.
- Run checks/build and inspect generated catalog/detail pages for both locales.
