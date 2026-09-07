## MODIFIED Requirements

### Requirement: Editorial SEO and structured data
The system SHALL provide search engine metadata for blog listing and article detail pages, including structured data for article pages and relevant listing relationships.

#### Scenario: Search engine reads the blog listing
- **WHEN** a crawler reads a localized blog listing page
- **THEN** the page exposes an appropriate title, description, canonical URL, language-aware metadata, and social metadata
- **AND** the page exposes structured data describing the visible published articles as a public list

#### Scenario: Search engine reads an article detail page
- **WHEN** a crawler reads a published editorial article detail page
- **THEN** the page includes title, description, canonical URL, open graph metadata, and JSON-LD structured data describing the article
- **AND** the article structured data includes publication and modification dates when available
- **AND** the article structured data is connected to the Elyara business or publisher identity
- **AND** the page exposes breadcrumb structured data for the localized blog hierarchy

### Requirement: Editorial-to-tour discovery
The system SHALL allow editorial articles to connect readers to relevant published tours, commercial discovery pages, and email-based reservation actions without introducing an internal booking or payment flow.

#### Scenario: Article references related tours
- **WHEN** a published article is associated with one or more published tours in the same language
- **THEN** the article detail page presents links or calls to action to those related tour pages
- **AND** those links are visible page content rather than metadata-only relationships

#### Scenario: Article supports a commercial search intent
- **WHEN** a published article relates to a topic served by a localized commercial tour landing page
- **THEN** the article detail page provides a contextual link to that commercial landing page for the same locale

#### Scenario: Visitor follows a reservation call to action from editorial content
- **WHEN** a visitor activates a reservation-oriented action from editorial content that is not tied to one concrete tour
- **THEN** the system opens a clean `mailto:elyaratours@gmail.com` link rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill subject or body text

#### Scenario: Visitor reserves a specific related tour
- **WHEN** a visitor reaches a specific related tour and activates that tour's reservation action
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name rather than an internal checkout or WhatsApp conversation
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or body text

## ADDED Requirements

### Requirement: Editorial topic clusters for Granada discovery
The system SHALL support published localized editorial content that targets useful Granada visitor search intents and connects those topics to relevant Elyara routes.

#### Scenario: Visitor reads a Granada guide article
- **WHEN** a visitor opens a published localized article about Granada neighborhoods, monuments, routes, practical visit planning, local symbols, legends, or cultural context
- **THEN** the article provides substantial visitor-facing content in the selected language
- **AND** the article can connect the topic to relevant published tours when those tours exist

#### Scenario: Blog listing presents discovery breadth
- **WHEN** a visitor opens a localized blog listing with published articles from multiple Granada discovery topics
- **THEN** the listing presents those articles with titles, excerpts, imagery when available, category labels, and links to article detail pages

#### Scenario: Search engine reads article image metadata
- **WHEN** a published editorial article has a visible article image
- **THEN** the article metadata and structured data reference the same selected image used by the visible article presentation
