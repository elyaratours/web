## 1. Localized Hero Copy Update

- [x] 1.1 Update Spanish `heroTitle` to `Granada, más allá de la postal`.
- [x] 1.2 Update Spanish `heroText` to `Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`.
- [x] 1.3 Update English `heroTitle` to `Granada, beyond the postcard`.
- [x] 1.4 Update English `heroText` to `Private tours and walking experiences that reveal the history, characters and hidden corners behind the city`.
- [x] 1.5 Add localized footer intro copy that preserves the current footer text in Spanish and English.
- [x] 1.6 Update `BaseLayout.astro` so the footer reads the footer-specific copy instead of `heroText`.

## 2. Verification

- [x] 2.1 Run `openspec validate update-localized-home-hero-copy --type change --strict` and verify the change is valid.
- [x] 2.2 Run `npm run check` and verify Astro validation passes.
- [x] 2.3 Run `npm run build` and verify localized home pages build successfully.
- [ ] 2.4 Manually review `/es/` and `/en/` in local preview to confirm the hero copy changed and the footer kept the previous intro copy.
