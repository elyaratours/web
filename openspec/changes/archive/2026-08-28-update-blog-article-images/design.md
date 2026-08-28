## Context

The blog content collection stores article imagery in each Markdown entry's frontmatter. `BlogCard.astro`, the article detail page, and SEO helpers already read `post.data.image`, so updating the target Spanish and English article entries should propagate each selected photo to the localized blog listings, article detail pages, and social image metadata.

## Goals / Non-Goals

**Goals:**

- Store or reuse the provided sunset and granado photos as public image assets under `public/images/`.
- Point the Spanish and English Albaicin sunset entries at the sunset image path.
- Point the Spanish and English pomegranate entries at the granado image path.
- Use localized `imageAlt` values that match each article language.
- Avoid changing article slugs, text, ordering, categories, related tours, or publication status.

**Non-Goals:**

- Changing the blog rendering components or content collection schema.
- Creating separate Spanish and English copies of the same image for each localized article pair.
- Rewriting either article body or changing their editorial positioning.

## Decisions

- Use `/images/sunset.jpeg` for the Albaicin sunset article pair because the asset already describes the sunset view and is compatible with the existing `/images/` schema constraint. Alternative considered: create a duplicate localized asset; rejected because one shared asset is enough for the translated article pair.
- Use `/images/granada-pomegranates.jpeg` for the Granada pomegranate article pair because it is descriptive, lowercase, URL-friendly, and compatible with the existing `/images/` schema constraint. Alternative considered: keep only the uploaded `Granado.jpeg` filename; rejected because a normalized public filename is easier to maintain.
- Update only frontmatter `image` and `imageAlt` fields because current components already render those fields in all required surfaces. Alternative considered: component-level special casing for these article slugs; rejected because it would be brittle and unnecessary.

## Risks / Trade-offs

- One or both provided photos may not already be tracked in the repository -> verify each final public image path exists before marking asset tasks complete.
- The source photos may not be WebP -> keep compatible public image extensions and update frontmatter paths consistently.
- The same photo will appear in both localized versions of each editorial topic -> acceptable because each pair represents the same article concept in Spanish and English.
