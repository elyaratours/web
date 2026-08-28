## ADDED Requirements

### Requirement: Editorial imagery framing
The system SHALL present available editorial article imagery with framing that keeps the intended subject recognizable in localized blog listing cards and article detail pages.

#### Scenario: Vertical article image appears in blog listing
- **WHEN** a published Spanish or English editorial article uses a vertical image
- **THEN** the localized blog listing displays that article image in a way that keeps the meaningful subject visible rather than cropping to an uninformative area

#### Scenario: Vertical article image appears on detail page
- **WHEN** a visitor opens a published Spanish or English editorial article detail page that uses a vertical image
- **THEN** the article detail image displays with framing that keeps the meaningful subject visible rather than cropping to an uninformative area

#### Scenario: Existing article image metadata remains aligned
- **WHEN** an editorial article image is displayed with adjusted framing
- **THEN** the page metadata and structured data continue to reference the same selected image used by the visible article presentation

#### Scenario: Other editorial images retain usable presentation
- **WHEN** published editorial articles use existing horizontal or square images
- **THEN** their listing and detail imagery remains visibly meaningful and does not lose the article title, category, summary, publication date, links, or language behavior
