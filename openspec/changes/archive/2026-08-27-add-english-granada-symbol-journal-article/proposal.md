## Why

The Spanish `Cuaderno` includes the article "Por que hay granadas por toda Granada", but English visitors do not currently see the same editorial topic in the English `Journal`. Adding the English version keeps the multilingual editorial experience coherent and makes the Granada symbol story discoverable for English readers.

## What Changes

- Add a published English blog entry for the Granada pomegranate symbol article.
- Reuse the existing article translation relationship through `translationKey: granada-symbol` so language alternates connect the Spanish and English article URLs.
- Keep the existing editorial blog templates, routing, categories, SEO model, and related-tour behavior unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `editorial-blog`: Require the Granada pomegranate symbol editorial topic to be available in both Spanish `Cuaderno` and English `Journal`.

## Impact

- Affected content: `src/content/blog/en/` gains one localized Markdown article entry.
- Affected public pages: `/en/blog/` lists the new article, and `/en/blog/why-are-there-pomegranates/` is generated.
- No API, dependency, data model, or routing changes are expected.
