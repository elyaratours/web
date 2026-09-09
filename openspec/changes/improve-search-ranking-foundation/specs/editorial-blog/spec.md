## ADDED Requirements

### Requirement: Editorial search-intent expansion
The system SHALL publish localized editorial articles that answer useful Granada visitor questions and connect those answers to relevant Elyara routes or commercial discovery pages.

#### Scenario: Spanish visitor reads expanded Granada guidance
- **WHEN** a visitor opens a Spanish editorial article created for Granada planning, neighborhoods, monuments, routes, family travel, day-trip decisions, legends, symbols, or cultural context
- **THEN** the article provides substantial Spanish visitor-facing guidance for that topic
- **AND** it links to relevant Spanish tours, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: English visitor reads expanded Granada guidance
- **WHEN** a visitor opens an English editorial article created for Granada planning, neighborhoods, monuments, routes, family travel, day-trip decisions, legends, symbols, or cultural context
- **THEN** the article provides substantial English visitor-facing guidance for that topic
- **AND** it links to relevant English tours, SEO landing pages, or inquiry paths when those pages exist

#### Scenario: Editorial content supports landing pages
- **WHEN** a localized article explains a topic served by a localized SEO landing page
- **THEN** the article includes visible contextual links to that landing page
- **AND** the matching landing page may link back to the article as supporting visitor context

### Requirement: Editorial SEO publication safeguards
The system SHALL keep expanded editorial SEO content localized, useful, and safe to index.

#### Scenario: New SEO article is published
- **WHEN** a new localized SEO-oriented article is marked as published
- **THEN** it includes a localized title, summary, SEO description, publication date, category, body content, canonical metadata, and visible internal links when relevant matches exist
- **AND** it appears in the localized blog listing and sitemap

#### Scenario: SEO article is incomplete
- **WHEN** a localized SEO-oriented article lacks substantial visitor-facing content, required metadata, or publication approval
- **THEN** the system does not expose it in public listings, sitemap entries, generated article pages, or structured data

#### Scenario: Search engine reads expanded editorial metadata
- **WHEN** a crawler reads a published expanded editorial article
- **THEN** the page exposes article metadata, language alternates when a translation exists, breadcrumb structured data, article structured data, and social preview metadata based on visible page content
