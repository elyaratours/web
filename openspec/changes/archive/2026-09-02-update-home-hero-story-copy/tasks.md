## 1. Localized Hero Copy

- [x] 1.1 Update the Spanish `heroTitle` in the centralized locale config to `Granada, una historia en cada paso` and verify `/es/` renders that title in the home hero.
- [x] 1.2 Verify the Spanish `heroText` remains `Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.` on `/es/`.
- [x] 1.3 Update the English `heroTitle` in the centralized locale config to `Granada, a story in every step` and verify `/en/` renders that title in the home hero.
- [x] 1.4 Update the English `heroText` to the approved localized equivalent and verify `/en/` renders it in the home hero.

## 2. Regression Checks

- [x] 2.1 Verify the footer still renders `footerIntro` rather than `heroText` in both locales.
- [x] 2.2 Run `npm run check` and verify Astro reports 0 errors.
- [x] 2.3 Run `openspec validate update-home-hero-story-copy --type change --strict` and verify the change passes validation.
