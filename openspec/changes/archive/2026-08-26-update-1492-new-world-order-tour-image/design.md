## Context

The site is a static Astro tourism website with data-driven tour entries. Tour images are rendered from each tour entry's `image` metadata, so the intended change can be made by adding one public asset and updating the English tour entry rather than changing shared templates.

Assumption: the user-provided Image 1 is the approved source artwork for the English `Granada and the New World` tour.

## Goals / Non-Goals

**Goals:**
- Store the artwork as a static public image asset using a stable descriptive filename.
- Prefer a web-optimized format consistent with the project direction, such as WebP or AVIF, while preserving visual fidelity.
- Point only the English `Granada and the New World` tour entry at the new asset path.
- Verify the existing catalog and detail rendering pick up the updated image through the existing data-driven patterns.

**Non-Goals:**
- Redesign tour cards, detail pages, or image components.
- Change Spanish tour imagery unless it already intentionally shares the same image path.
- Add booking, routing, SEO, dependency, or backend behavior.

## Decisions

- Use a public asset path rather than importing the image from source code.
  Alternative considered: component-level imports. Rejected because existing tour content already treats images as metadata paths and the site targets static GitHub Pages-compatible output.

- Use a descriptive filename tied to the tour, for example `1492-new-world-order.webp` under the existing public image organization.
  Alternative considered: preserving an uploaded/generated filename. Rejected because a stable descriptive filename is easier to maintain in Markdown frontmatter and generated public URLs.

- Update the content entry instead of templates.
  Alternative considered: hard-coding this image in the tour page component. Rejected because it would bypass the data-driven tour architecture and make future content changes harder.

## Risks / Trade-offs

- Source image is only available through the chat attachment -> During implementation, confirm the attachment can be saved or otherwise provide the image file before updating content.
- Format conversion could reduce text sharpness in the artwork -> Use high-quality WebP or AVIF conversion and visually check the generated site.
- Tour title or file slug may differ from the user's wording -> Locate the English tour entry by title/content search before editing, rather than assuming a filename.
