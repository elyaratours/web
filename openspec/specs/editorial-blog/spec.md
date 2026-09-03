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
The system SHALL allow editorial articles to connect readers to relevant published tours and email-based reservation actions without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from editorial content that is not tied to one concrete tour
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill subject or body text

#### Scenario: Visitor reserves a specific related tour
- **WHEN** a visitor reaches a specific related tour and activates that tour's reservation action
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text

### Requirement: Granada pomegranate symbol article localization
The system SHALL publish the Granada pomegranate symbol editorial topic in both the Spanish `Cuaderno` and the English `Journal`.

#### Scenario: English visitor sees the Granada pomegranate symbol article in Journal
- **WHEN** a visitor navigates to `/en/blog/`
- **THEN** the system displays a published English article about why pomegranates appear throughout Granada

#### Scenario: English visitor opens the Granada pomegranate symbol article
- **WHEN** a visitor opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the system displays the English article title, summary, category, publication date, image when available, and article body content

#### Scenario: Granada pomegranate symbol article exposes language alternates
- **WHEN** Spanish and English visitors view either localized Granada pomegranate symbol article page
- **THEN** the system exposes language-aware alternate metadata between the Spanish and English article URLs

### Requirement: Selected imagery for localized editorial article pairs
The system SHALL use the selected sunset photo for the localized Albaicin sunset article pair and the selected granado photo for the localized Granada pomegranate article pair, with localized alternative text for each article.

#### Scenario: Spanish Albaicin article uses sunset photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/albaicin-atardecer/`
- **THEN** the article `El Albaicin al atardecer: una forma lenta de entrar en Granada` displays the selected sunset photo with Spanish alternative text

#### Scenario: English Albaicin article uses sunset photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/albaicin-sunset/`
- **THEN** the article `The Albaicin at sunset: a slower way into Granada` displays the selected sunset photo with English alternative text

#### Scenario: Spanish pomegranate article uses granado photo
- **WHEN** a visitor views the Spanish `Cuaderno` listing or opens `/es/blog/por-que-hay-granadas/`
- **THEN** the article `Por que hay granadas por toda Granada` displays the selected granado photo with Spanish alternative text

#### Scenario: English pomegranate article uses granado photo
- **WHEN** a visitor views the English `Journal` listing or opens `/en/blog/why-are-there-pomegranates/`
- **THEN** the article `Why are there pomegranates all over Granada?` displays the selected granado photo with English alternative text

#### Scenario: Article metadata uses selected photos
- **WHEN** search engines or social platforms read any updated article page
- **THEN** the page metadata references the same selected photo shown as that article's visible image
