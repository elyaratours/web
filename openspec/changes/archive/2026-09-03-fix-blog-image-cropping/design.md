## Context

See `proposal.md` for motivation. Blog listing cards render article images in `src/components/BlogCard.astro`; article detail pages render the same frontmatter image in `src/pages/[locale]/blog/[slug].astro`. Both contexts currently use fixed visual containers and `object-cover`, which is appropriate for many tourism images but can crop vertical photos in a way that hides their subject.

The affected Albaicin sunset image is a valid asset at `/images/sunset.jpeg` and is copied into the static build. Its portrait aspect ratio means a horizontal crop can emphasize the sky instead of the city and sunset horizon.

## Goals / Non-Goals

**Goals:**

- Keep the selected sunset image and localized article metadata intact.
- Allow article imagery to control focal positioning when the default center crop is not adequate.
- Apply the improvement consistently in blog listing cards and detail pages.
- Keep the solution compatible with static generation and GitHub Pages.

**Non-Goals:**

- Introduce image processing, runtime resizing, or a new media pipeline.
- Replace the selected Albaicin sunset photo with a different asset.
- Redesign the blog cards or article detail layout beyond image framing.

## Decisions

- Add an optional editorial image positioning field to blog article metadata.
  - Rationale: a content-level focal position keeps the fix tied to the image that needs it and avoids changing every blog image globally.
  - Alternative considered: apply `object-position: bottom` to all blog images. This is smaller but can damage images that are already well-framed with centered crops.
  - Alternative considered: create a separate landscape crop asset. This can produce the best editorial result, but it adds duplicate media management and is not necessary to make the current selected image visibly meaningful.

- Render the optional position in both listing and detail image elements.
  - Rationale: the same article image must remain recognizable wherever visitors encounter it.
  - Alternative considered: fix only the listing cards. This would leave the article detail page with the same framing risk.

- Use the optional field only where needed initially.
  - Rationale: existing horizontal or square images should keep current presentation unless content identifies a focal problem.

## Risks / Trade-offs

- Custom focal values could be inconsistent across articles -> constrain the content schema to a small set of supported CSS object-position values or validate a safe string pattern.
- A vertical source image in a horizontal card still crops some content -> choose a focal position that favors the important subject, and consider a dedicated landscape crop later if editorial quality demands it.
- Inline styles can be overused -> keep the dynamic style limited to `object-position` on article images.

## Migration Plan

- Add the optional image positioning field to the blog content schema.
- Set the Albaicin sunset article pair to a bottom-oriented position.
- Update blog listing and article detail image rendering to apply the optional position.
- Build and verify the localized blog listing and detail pages reference the same image and render with improved framing.
