## 1. Content Metadata

- [x] 1.1 Verify `public/images/2mundos.jpeg` exists and can be referenced from `/images/2mundos.jpeg`.
- [x] 1.2 Update `src/content/tours/es/es-granada-entre-dos-mundos.md` to use `image: "/images/2mundos.jpeg"` and a Spanish `imageAlt` describing the new image; verify no unrelated frontmatter or body fields changed.
- [x] 1.3 Update `src/content/tours/en/en-granada-between-two-worlds.md` to use `image: "/images/2mundos.jpeg"` and an English `imageAlt` describing the new image; verify no unrelated frontmatter or body fields changed.

## 2. Verification

- [x] 2.1 Run `npm run check` and verify Astro/content schema validation passes.
- [x] 2.2 Run `npm run build` and verify the static build succeeds.
- [x] 2.3 Inspect the generated Spanish and English tour catalog/detail output and verify the Two Worlds tour uses `/images/2mundos.jpeg` while other tour images remain unchanged.
- [x] 2.4 Run `openspec validate "update-two-worlds-tour-image" --type change --strict` and verify the change is valid.
