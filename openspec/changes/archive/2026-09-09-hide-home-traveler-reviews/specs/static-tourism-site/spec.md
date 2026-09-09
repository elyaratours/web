## MODIFIED Requirements

### Requirement: Localized home reservation calendar
The system SHALL display a localized reservation calendar on the Spanish and English home pages after the home tour catalog, presenting scheduled tour availability for the next 2 months one month at a time.

#### Scenario: Spanish visitor sees home reservation calendar
- **WHEN** a visitor opens `/es/`
- **THEN** the system displays a Spanish calendar section with scheduled availability for the next 2 months
- **AND** Spanish-language scheduled dates identify `El alma de Granada` at 10:00

#### Scenario: English visitor sees home reservation calendar
- **WHEN** a visitor opens `/en/`
- **THEN** the system displays an English calendar section with scheduled availability for the next 2 months
- **AND** English-language scheduled dates identify `The Soul of Granada` at 10:00

#### Scenario: Visitor sees calendar after the tour catalog
- **WHEN** a visitor opens a localized home page
- **THEN** the system displays the reservation calendar after the home tour catalog
- **AND** the calendar remains before the Tailor-made/Viajes a medida section

#### Scenario: Visitor sees one home calendar month at a time
- **WHEN** a visitor views the localized home reservation calendar
- **THEN** the system displays one calendar month grid at a time
- **AND** the system provides month navigation controls when another generated month is available

#### Scenario: Visitor selects an available home calendar date
- **WHEN** a visitor selects a date with scheduled availability on the localized home calendar
- **THEN** the system displays the available route name, date, time, language, and external WhatsApp and email reservation actions for that date

#### Scenario: Visitor views a day without scheduled availability
- **WHEN** a visitor views or selects a day without scheduled availability
- **THEN** the system does not present that day as bookable

### Requirement: Localized home without experience section
The system SHALL omit the introductory Experience/La experiencia card section from Spanish and English localized home pages while preserving the rest of the home discovery flow.

#### Scenario: Spanish visitor opens home without experience cards
- **WHEN** a visitor opens `/es/`
- **THEN** the page does not display the three-card `La experiencia` section for historical context, walkable pace, and direct booking
- **AND** the page still displays the localized hero, tour catalog, reservation calendar, tailor-made section, footer, and external WhatsApp/email reservation actions

#### Scenario: English visitor opens home without experience cards
- **WHEN** a visitor opens `/en/`
- **THEN** the page does not display the three-card `Experience` section for historical context, walkable pace, and direct booking
- **AND** the page still displays the localized hero, tour catalog, reservation calendar, tailor-made section, footer, and external WhatsApp/email reservation actions

### Requirement: Localized home approved hero image
The system SHALL display `/images/alhambra-clouds.jpeg` as the main hero image on the Spanish and English localized home pages, with localized accessible text and appropriate framing.

#### Scenario: Spanish visitor sees approved home hero image
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero displays `/images/alhambra-clouds.jpeg` as the main image
- **AND** the hero image uses Spanish accessible text describing the Alhambra beneath clouds

#### Scenario: English visitor sees approved home hero image
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero displays `/images/alhambra-clouds.jpeg` as the main image
- **AND** the hero image uses English accessible text describing the Alhambra beneath clouds

#### Scenario: Sunset image is not used on localized home pages
- **WHEN** a visitor opens the Spanish or English localized home page
- **THEN** the hero does not display `/images/alhambra-sunset.jpeg`

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero image update
- **THEN** the system preserves the existing localized hero copy, calls to action, tour catalog, tailor-made section, routing behavior, and visible reservation behavior

#### Scenario: Root landing page remains unchanged
- **WHEN** a visitor opens the root URL at `/` after root routing is updated
- **THEN** the system does not display a standalone root landing page image
- **AND** the visitor reaches the Spanish localized home experience that uses `/images/alhambra-clouds.jpeg` as its main hero image

### Requirement: Localized home approved hero copy
The system SHALL display the approved Spanish and English hero title and body copy on the localized home pages while preserving the previous footer intro copy.

#### Scenario: Spanish visitor sees approved hero copy
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero title displays `Granada, una historia en cada paso`
- **AND** the hero body displays `Tours privados y rutas a pie para descubrir la historia, los personajes y los rincones que dan sentido a la ciudad.`

#### Scenario: English visitor sees approved hero copy
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero title displays `Granada, a story in every step`
- **AND** the hero body displays `Private tours and walking routes to discover the history, characters and corners that give meaning to the city.`

#### Scenario: Footer intro copy remains unchanged
- **WHEN** a visitor views the footer after the localized hero copy update
- **THEN** the footer preserves the previous localized intro copy instead of reusing the new hero body copy

#### Scenario: Localized home SEO title follows approved hero title
- **WHEN** the localized home page metadata is generated
- **THEN** the SEO title and Open Graph title use the approved localized hero title

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero copy update
- **THEN** the system preserves the existing hero image, calls to action, tour catalog, Tailor-made section, routing behavior, and reservation behavior

### Requirement: Traveler reviews mosaic
The system SHALL hide the localized traveler reviews mosaic from the public home experience in Spanish and English.

#### Scenario: Visitor sees traveler reviews after tours
- **WHEN** a visitor views the localized home page and reaches the content after the tour catalog
- **THEN** the system does not display a traveler reviews section titled "Opiniones de nuestros viajeros" in Spanish or "Travelers who walked Granada with us" in English

#### Scenario: Mosaic contains only reviews and group photos
- **WHEN** the localized home page is displayed while the traveler reviews mosaic is hidden
- **THEN** the system does not expose traveler review mosaic items, group photo items, social counters, statistics, booking widgets, or unrelated proof elements in the hidden section

#### Scenario: Visitor opens a review item
- **WHEN** the traveler reviews mosaic is hidden on a localized home page
- **THEN** the page does not expose review item controls that open a traveler review popup

#### Scenario: Visitor opens a group photo item
- **WHEN** the traveler reviews mosaic is hidden on a localized home page
- **THEN** the page does not expose group photo controls that open an enlarged photo popup

#### Scenario: Visitor uses the mosaic on mobile
- **WHEN** a visitor views a localized home page on a mobile viewport
- **THEN** the system does not display the hidden traveler reviews mosaic or its popup controls

#### Scenario: Launch has limited approved content
- **WHEN** only a small number of approved group photos and real review entries are available
- **THEN** the system does not require placeholder social proof items while the traveler reviews mosaic is hidden

#### Scenario: Home discovery flow remains complete without reviews
- **WHEN** the traveler reviews mosaic is hidden on a localized home page
- **THEN** the page still presents the localized hero, tour catalog, reservation calendar, Tailor-made/Viajes a medida section, footer, and external WhatsApp/email reservation actions

### Requirement: Traveler reviews approved client photos
The system SHALL not display the approved client photos `foto-clientes-1.jpeg`, `Foto-clientes-2.jpeg`, and `Foto-clientes-3.jpeg` through the localized home traveler reviews mosaic while that mosaic is hidden.

#### Scenario: Spanish visitor sees approved client photos in traveler reviews
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the page does not display the traveler reviews mosaic photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, or `/images/Foto-clientes-3.jpeg`

#### Scenario: English visitor sees approved client photos in traveler reviews
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the page does not display the traveler reviews mosaic photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, or `/images/Foto-clientes-3.jpeg`

#### Scenario: Visitor opens an approved client photo
- **WHEN** the traveler reviews mosaic is hidden on a localized home page
- **THEN** the page does not expose approved client photo controls that open enlarged photo popups

#### Scenario: Existing reviews mosaic behavior remains unchanged
- **WHEN** the traveler reviews mosaic is hidden
- **THEN** the system preserves the existing review component, localized section copy, popup behavior, and responsive mosaic layout for possible future reuse without rendering it on the localized home page

#### Scenario: Approved client photos remain available as assets
- **WHEN** the traveler reviews mosaic is hidden
- **THEN** the system does not require deleting the approved client photo assets from the site repository

### Requirement: Tailor-made trips home discovery
The system SHALL present a localized tailor-made trips and routes section on the public home experience after the tour catalog and reservation calendar.

#### Scenario: Spanish visitor sees tailor-made offer on home
- **WHEN** a visitor views the Spanish home page and reaches the content after the tour catalog
- **THEN** the system displays a Spanish section titled "Viajes y rutas disenadas para ti" that introduces travel consultation and personalized Granada routes

#### Scenario: English visitor sees tailor-made offer on home
- **WHEN** a visitor views the English home page and reaches the content after the tour catalog
- **THEN** the system displays an English section titled "Tailor-made routes for your trip" that introduces travel consultation and personalized Granada routes

#### Scenario: Visitor follows home tailor-made call to action
- **WHEN** a visitor activates the tailor-made call to action from the home section
- **THEN** the system directs the visitor to the localized standalone tailor-made offer page

### Requirement: Mobile-optimized public experience
The system SHALL provide a polished mobile public experience across localized discovery, detail, editorial, contact, and tailor-made pages.

#### Scenario: Mobile visitor uses primary navigation
- **WHEN** a visitor opens a localized public page on a mobile viewport
- **THEN** the visitor can reach tours, tailor-made trips, blog, contact, and the alternate language without relying on footer navigation
- **AND** the reservation call to action remains visible or reachable without obscuring page content

#### Scenario: Mobile visitor reads page hero content
- **WHEN** a visitor views the hero area on the localized home, tour detail, blog detail, blog listing, contact, or tailor-made page on a mobile viewport
- **THEN** headings, intro copy, spacing, and media sizing fit comfortably without horizontal scrolling, clipped text, or excessive first-screen vertical friction

#### Scenario: Mobile visitor browses cards and sections
- **WHEN** a visitor browses tour cards, blog cards, experience cards, contact cards, tailor-made cards, or footer content on a mobile viewport
- **THEN** cards use mobile-appropriate padding, spacing, typography, and tappable areas while preserving readable content hierarchy

#### Scenario: Mobile visitor reviews traveler proof
- **WHEN** a visitor opens a localized home page on a mobile viewport
- **THEN** the page does not display the hidden traveler reviews mosaic or its popup controls

#### Scenario: Mobile visitor starts an inquiry or reservation
- **WHEN** a mobile visitor wants to reserve a tour, send a general inquiry, or start a tailor-made inquiry
- **THEN** the relevant WhatsApp and email calls to action are easy to identify and activate without introducing internal booking, checkout, account creation, or payment behavior

#### Scenario: Desktop experience remains intact
- **WHEN** the mobile polish is applied
- **THEN** the existing desktop visual language, localized content, route structure, data-driven tours, editorial pages, and external reservation flow remain unchanged in purpose and behavior
