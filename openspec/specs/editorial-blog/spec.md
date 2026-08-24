## Purpose

Provides a multilingual public editorial blog for Granada stories, news, curiosities, recommendations, and cultural context that supports discovery of Elyara's tours.

## Requirements

### Requirement: Editorial blog listing
The system SHALL provide a public localized blog listing page that presents published editorial articles for the selected language.

#### Scenario: Visitor opens the Spanish blog listing
- **WHEN** a visitor navigates to `/es/blog/`
- **THEN** the system displays Spanish published articles with article titles, summaries, imagery when available, category labels, and links to article detail pages

#### Scenario: Visitor opens the English blog listing
- **WHEN** a visitor navigates to `/en/blog/`
- **THEN** the system displays English published articles with article titles, summaries, imagery when available, category labels, and links to article detail pages

#### Scenario: Draft article exists
- **WHEN** an editorial article is marked as unpublished
- **THEN** the system does not include that article in public blog listings or generate a public article detail page for it

### Requirement: Editorial article detail pages
The system SHALL provide a statically generated public detail page for each published editorial article.

#### Scenario: Visitor opens an article detail page
- **WHEN** a visitor opens a published localized article URL
- **THEN** the system displays the article title, editorial category, publication date, summary or introduction, imagery when available, and the article body content

#### Scenario: Visitor opens an unpublished article URL
- **WHEN** a visitor attempts to open an unpublished editorial article URL
- **THEN** the system does not expose the unpublished article as a public generated page

### Requirement: Editorial content model
The system SHALL support data-driven editorial article entries with structured metadata suitable for a personality-led Granada journal.

#### Scenario: Published article entry exists
- **WHEN** a published article entry exists with required metadata and body content
- **THEN** the system can present that article in the blog listing and article detail page without requiring a manually copied full page template

#### Scenario: Article has an editorial category
- **WHEN** an article is categorized as news, curiosity, recommendation, story, legend, history, or route inspiration
- **THEN** the system displays the category in the public article presentation

### Requirement: Multilingual editorial experience
The system SHALL support Spanish and English editorial article content, navigation labels, metadata, and language alternates.

#### Scenario: Article has translated versions
- **WHEN** Spanish and English article entries represent the same editorial topic
- **THEN** the system exposes language-aware alternate metadata between the localized article URLs

#### Scenario: Article exists in only one language
- **WHEN** an editorial article exists in one language but has no translated counterpart
- **THEN** the system still publishes the available localized article without requiring a matching article in the other language

### Requirement: Editorial SEO and structured data
The system SHALL provide search engine metadata for blog listing and article detail pages, including structured data for article pages.

#### Scenario: Search engine reads the blog listing
- **WHEN** a crawler reads a localized blog listing page
- **THEN** the page exposes an appropriate title, description, canonical URL, and language-aware metadata

#### Scenario: Search engine reads an article detail page
- **WHEN** a crawler reads a published editorial article detail page
- **THEN** the page includes title, description, canonical URL, open graph metadata, and JSON-LD structured data describing the article

### Requirement: Editorial-to-tour discovery
The system SHALL allow editorial articles to connect readers to relevant published tours without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from an editorial article or related tour prompt
- **THEN** the system directs the visitor to the configured external booking destination or WhatsApp conversation rather than an internal checkout
