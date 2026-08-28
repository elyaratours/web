## Why

The Albaicin sunset article pair uses a valid vertical photo, but the current blog image presentation crops it into horizontal containers in a way that can show mostly sky and make the selected photo appear missing or poorly framed. The editorial blog needs image rendering that preserves the intended subject of selected article imagery across listing and detail views.

## What Changes

- Adjust editorial blog image presentation so selected photos remain visibly meaningful in both blog listings and article detail pages.
- Support the Albaicin sunset photo's vertical framing without changing the selected asset, article routes, localized metadata, or reservation behavior.
- Preserve existing behavior for other article images unless they need the same presentation improvement.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `editorial-blog`: require available editorial article imagery to be displayed with appropriate framing in localized listing and detail contexts.

## Impact

- Affected areas: blog card image rendering, article detail hero image rendering, and possibly editorial blog content metadata if per-image positioning is used.
- No new dependencies, APIs, routes, or booking behavior changes are expected.
- Existing SEO image metadata should continue to reference the same selected image shown visibly on the page.
