## 1. Tour Content Model Planning

- [x] 1.1 Define `translationKey`, localized `routeSlug`, `order`, `featured`, image, image alt text, duration, price, languages, SEO description, and reservation URL for each of the four new tour pairs; verify all planned values satisfy `src/content.config.ts` tour schema.
- [x] 1.2 Confirm the four new tours are additional entries and do not modify or remove the existing Alhambra, Albaicin, or Granada New World tour files; verify the existing six localized tour files remain present.

## 2. Spanish Tour Entries

- [x] 2.1 Add `Granada entre miradores y leyendas` as a Spanish tour Markdown entry; verify it includes complete frontmatter and Spanish body content.
- [x] 2.2 Add `Granada entre dos mundos` as a Spanish tour Markdown entry; verify it includes complete frontmatter and Spanish body content.
- [x] 2.3 Add `La Alhambra más allá de los palacios` as a Spanish tour Markdown entry; verify it includes complete frontmatter and Spanish body content.
- [x] 2.4 Add `Catedral y Capilla Real` as a Spanish tour Markdown entry; verify it includes complete frontmatter and Spanish body content.

## 3. English Tour Entries

- [x] 3.1 Add `Granada Viewpoints and Legends` as an English tour Markdown entry paired with the Spanish miradores/leyendas tour; verify matching `translationKey` and complete English content.
- [x] 3.2 Add `Granada Between Two Worlds` as an English tour Markdown entry paired with the Spanish dos mundos tour; verify matching `translationKey` and complete English content.
- [x] 3.3 Add `The Alhambra Beyond the Palaces` as an English tour Markdown entry paired with the Spanish Alhambra palaces tour; verify matching `translationKey` and complete English content.
- [x] 3.4 Add `Cathedral and Royal Chapel` as an English tour Markdown entry paired with the Spanish Catedral/Capilla Real tour; verify matching `translationKey` and complete English content.

## 4. Catalog And Page Generation

- [x] 4.1 Verify Spanish catalog output includes the four new Spanish titles in addition to existing tours after a production build.
- [x] 4.2 Verify English catalog output includes the four new English titles in addition to existing tours after a production build.
- [x] 4.3 Verify the production build generates localized detail pages for all eight new tour entries using their `routeSlug` values.
- [x] 4.4 Verify each new generated detail page includes title, duration, price, languages, image, description, SEO metadata, and an external reservation link.

## 5. Verification

- [x] 5.1 Run `npm run check` and verify it succeeds.
- [x] 5.2 Run `npm run build` and verify it succeeds with the expanded tour catalog.
- [x] 5.3 Run `openspec validate add-four-granada-tours --type change --strict` and verify the change is valid.
