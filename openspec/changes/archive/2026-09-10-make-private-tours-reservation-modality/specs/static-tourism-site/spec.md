## ADDED Requirements

### Requirement: Private group booking as tour modality
The system SHALL present private group booking as a reservation modality for eligible published tours rather than as a separate public tour catalog.

#### Scenario: Visitor sees private booking option on tour discovery
- **WHEN** a visitor views a localized published tour in a discovery list where reservation actions are shown
- **THEN** the tour presents a private group reservation action or equivalent private-group availability wording tied to that same tour
- **AND** the visitor is not required to choose from a separate `Tours privados` or `Private tours` catalog to book the route privately

#### Scenario: Visitor reserves a published tour privately
- **WHEN** a visitor activates a private group reservation action from a published tour card or detail page
- **THEN** the system opens an external WhatsApp or email flow for that selected tour
- **AND** the flow communicates that the visitor is requesting the route as a private group reservation
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Tour detail explains private modality
- **WHEN** a visitor opens a localized published tour detail page for an eligible route
- **THEN** the page explains that the route can be requested as a private group experience with adaptable language, rhythm, or interests where applicable
- **AND** the explanation remains attached to the selected route instead of sending the visitor to a duplicate private-tour product page

## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through external WhatsApp links to `+34 611 126 979` and email links to `elyaratours@gmail.com` rather than internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour or scheduled date
- **THEN** the system opens the selected external channel: `https://wa.me/34611126979` with localized prefilled inquiry text or a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text
- **AND** the selected channel does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Visitor sees a general home reserve action
- **WHEN** a visitor views the localized home hero reservation call to action
- **THEN** the system displays WhatsApp and email as available external reservation button actions
- **AND** the system does not display `+34 611 126 979` or `elyaratours@gmail.com` as visible text near those home reservation actions

#### Scenario: Visitor sees home tour-card reserve actions
- **WHEN** a visitor views published tour cards in the localized home tour catalog
- **THEN** each tour card displays a localized private group reservation action for that specific tour
- **AND** each tour card preserves a visible path to the corresponding tour detail page

#### Scenario: Visitor selects a home tour-card WhatsApp reserve action
- **WHEN** a visitor activates a WhatsApp reservation action from a tour card in the localized home tour catalog
- **THEN** the system opens `https://wa.me/34611126979` with localized prefilled text that identifies the selected tour name and private group reservation intent
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour that is not tied to a scheduled calendar date
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text that identifies the selected tour name and private group reservation intent
- **AND** the selected email action opens a `mailto:elyaratours@gmail.com` link with localized prefilled subject or body text that identifies the selected tour name and private group reservation intent
- **AND** the selected channel may prompt for approximate date, group size, preferred language, or group interests to support the private group request
- **AND** the system does not prefill payment details unless they are part of the selected scheduled-date context
- **AND** the system does not force the email link to open in a new browser tab or window

#### Scenario: Visitor sees a concrete tour reserve action
- **WHEN** a visitor views a published tour detail page reservation call to action
- **THEN** the system displays WhatsApp and email reservation actions for that tour
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor selects a scheduled calendar reservation action
- **WHEN** a visitor activates a reservation call to action for a scheduled calendar date
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text containing the selected tour name, date, time, and language
- **AND** the selected email action opens a `mailto:elyaratours@gmail.com` link with prefilled subject or body text containing the selected tour name, date, time, and language
- **AND** the message prompts the visitor to provide at least name and number of people

#### Scenario: Visitor sees a scheduled calendar reservation action
- **WHEN** a visitor views a scheduled-date reservation card in the home or tour detail reservation calendar
- **THEN** the system displays WhatsApp and email reservation button actions for that scheduled date
- **AND** the system does not display `+34 611 126 979` or `elyaratours@gmail.com` as visible text near those scheduled calendar reservation actions

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages or scheduled calendar availability
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation

### Requirement: Navigation excludes removed experience anchor
The system SHALL not expose localized navigation links to the removed home Experience/La experiencia section or to a duplicate private-tour catalog.

#### Scenario: Visitor sees desktop navigation
- **WHEN** a visitor views the desktop navigation on a localized public page
- **THEN** the navigation does not display a `La experiencia` or `Experience` link that points to `#experience`
- **AND** the navigation does not display `Tours privados` or `Private tours` as a primary section link
- **AND** the remaining localized navigation links continue to provide access to tours, tailor-made content, blog, contact, and the alternate language

#### Scenario: Visitor sees mobile navigation
- **WHEN** a visitor opens the mobile navigation menu on a localized public page
- **THEN** the menu does not display a `La experiencia` or `Experience` link that points to `#experience`
- **AND** the menu does not display `Tours privados` or `Private tours` as a primary section link
- **AND** the remaining localized navigation links and reservation actions remain available

### Requirement: Localized home approved hero copy
The system SHALL display the approved Spanish and English hero title and route-first body copy on the localized home pages while preserving a distinct footer intro.

#### Scenario: Spanish visitor sees approved hero copy
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero title displays `Granada, una historia en cada paso`
- **AND** the hero body displays `Rutas a pie y reservas para grupos privados para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`

#### Scenario: English visitor sees approved hero copy
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero title displays `Granada, a story in every step`
- **AND** the hero body displays `Walking routes and private group reservations to discover the history, characters and corners that give meaning to the city.`

#### Scenario: Footer intro copy remains unchanged
- **WHEN** a visitor views the footer after the localized hero copy update
- **THEN** the footer uses localized route-first copy that mentions private booking as an option
- **AND** the footer does not reuse the hero body copy verbatim

#### Scenario: Localized home SEO title follows approved hero title
- **WHEN** the localized home page metadata is generated
- **THEN** the SEO title and Open Graph title use the approved localized hero title

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero copy update
- **THEN** the system preserves the existing hero image, calls to action, tour catalog, Tailor-made section, routing behavior, and reservation behavior

### Requirement: Commercial Granada tour landing pages
The system SHALL provide localized commercial landing content for high-intent Granada tour searches while preserving existing published tour detail URLs and avoiding a duplicate private-tour catalog.

#### Scenario: Spanish visitor opens private tours landing page
- **WHEN** a visitor navigates to a Spanish commercial landing page for private or guided tours in Granada
- **THEN** the system displays Spanish contextual content explaining that Elyara routes can be requested privately
- **AND** the page links to relevant published tour detail pages, tailor-made inquiry content, or contact content instead of presenting itself as a separate private-tour catalog

#### Scenario: English visitor opens private tours landing page
- **WHEN** a visitor navigates to an English commercial landing page for private or guided tours in Granada
- **THEN** the system displays English contextual content explaining that Elyara routes can be requested privately
- **AND** the page links to relevant published tour detail pages, tailor-made inquiry content, or contact content instead of presenting itself as a separate private-tour catalog

#### Scenario: Search engine reads commercial landing metadata
- **WHEN** a crawler reads a localized commercial landing page
- **THEN** the page exposes localized title, description, canonical URL, language alternates, breadcrumb structured data, and relevant business or service structured data
- **AND** the metadata reflects the page as a contextual landing for private group inquiries or guided routes, not as a distinct private-tour catalog

#### Scenario: Visitor starts inquiry from commercial landing page
- **WHEN** a visitor activates a reservation or inquiry call to action from a commercial landing page
- **THEN** the system opens an external WhatsApp or email flow to `+34 611 126 979` or `elyaratours@gmail.com`
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

### Requirement: SEO-oriented internal linking
The system SHALL expose contextual internal links between public discovery, SEO landing, tour, tailor-made, contact, and editorial pages without turning private tours into a parallel product section.

#### Scenario: Visitor reads a tour detail page
- **WHEN** a visitor reads a published tour detail page
- **THEN** the page provides relevant internal links to related discovery, inquiry, SEO, or editorial content when such content exists for the same locale
- **AND** private group booking remains available from the selected tour rather than through a duplicate private-tour catalog link

#### Scenario: Visitor reads a commercial landing page
- **WHEN** a visitor reads a localized commercial landing page
- **THEN** the page links to relevant published tours, tailor-made inquiry content, contact content, and relevant editorial content for the same locale when available
- **AND** links from private-tour search intent pages lead visitors toward existing route details or inquiry paths rather than a separate private-tour section

#### Scenario: Visitor reads home discovery content
- **WHEN** a visitor reads a localized home page
- **THEN** the page provides a clear internal path to tours, tailor-made content, contact content, blog content, and relevant SEO landing pages when appropriate
- **AND** the home page does not require a separate `Tours privados` or `Private tours` navigation path for visitors to request a route privately
