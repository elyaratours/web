## Purpose

Provides the public static website capability for a tourism route business, allowing visitors to discover tours, read tour details, switch between Spanish and English experiences, and start reservations through external channels.

## Requirements

### Requirement: Static public website foundation
The system SHALL provide a statically generated public website suitable for hosting on GitHub Pages with a custom domain and root-path routing.

#### Scenario: Visitor opens the home page
- **WHEN** a visitor navigates to the site's root URL
- **THEN** the system displays a tourism-focused home page introducing the route business and highlighting available tours or routes

#### Scenario: Site is deployed to custom-domain GitHub Pages
- **WHEN** the site is built for production deployment
- **THEN** generated links and assets resolve correctly from the custom domain root path

### Requirement: Data-driven tour catalog
The system SHALL expose tours from structured tour entries instead of requiring a manually copied full page for each tour.

#### Scenario: Tour entry appears in catalog
- **WHEN** a published tour entry exists with required tour metadata and description
- **THEN** the system includes that tour in the public tour catalog without duplicating a full page template

#### Scenario: New tour is added
- **WHEN** a new published tour entry is added for a route such as "Granada and the New World"
- **THEN** the system can present the new tour using the shared tour listing and detail page patterns

### Requirement: Tour detail pages
The system SHALL provide a public detail page for each published tour with at least title, duration, price, offered languages, image, description, and reservation call to action.

#### Scenario: Visitor opens a tour page
- **WHEN** a visitor opens a published tour detail URL
- **THEN** the system displays the tour's core metadata, imagery, descriptive content, and a clear reservation action

#### Scenario: Tour has multiple offered languages
- **WHEN** a tour is offered in more than one language
- **THEN** the system displays all offered languages on the tour detail page

### Requirement: External reservation flow
The system SHALL start reservations through external links or WhatsApp rather than an internal booking or payment flow.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a reservation call to action
- **THEN** the system directs the visitor to the configured external booking destination or WhatsApp conversation

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages
- **THEN** the system does not require account creation, payment processing, or internal checkout to start a reservation

### Requirement: Spanish and English public experience
The system SHALL provide Spanish and English foundations for public navigation, routes, metadata, and tour content.

#### Scenario: Visitor navigates Spanish content
- **WHEN** a visitor opens a Spanish public route
- **THEN** the system displays Spanish navigation, page metadata, and available Spanish tour content

#### Scenario: Visitor navigates English content
- **WHEN** a visitor opens an English public route
- **THEN** the system displays English navigation, page metadata, and available English tour content

### Requirement: Tourism-focused presentation
The system SHALL present tours with a visual style appropriate for a Granada tourism and walking-route business rather than a generic SaaS landing page.

#### Scenario: Visitor views main marketing sections
- **WHEN** a visitor views the home page or tour catalog
- **THEN** the system emphasizes destination imagery, route discovery, human guide context, local atmosphere, and clear visitor-oriented calls to action

### Requirement: Search engine metadata and structured data
The system SHALL provide SEO metadata for public pages and structured data for tour detail pages.

#### Scenario: Search engine reads a public page
- **WHEN** a crawler reads a public home, catalog, or tour detail page
- **THEN** the page exposes appropriate title, description, canonical metadata, and language-aware metadata

#### Scenario: Search engine reads a tour detail page
- **WHEN** a crawler reads a published tour detail page
- **THEN** the page includes JSON-LD structured data describing the tour using the available tour metadata

### Requirement: Traveler reviews mosaic
The system SHALL present a localized traveler reviews section on the public home experience after the tour catalog, using a small emotional mosaic that interleaves traveler review cards and approved group photos.

#### Scenario: Visitor sees traveler reviews after tours
- **WHEN** a visitor views the localized home page and reaches the content after the tour catalog
- **THEN** the system displays a traveler reviews section titled "Opiniones de nuestros viajeros" in Spanish or "Travelers who walked Granada with us" in English

#### Scenario: Mosaic contains only reviews and group photos
- **WHEN** the traveler reviews section is displayed
- **THEN** the system presents a compact mosaic made of traveler review items and group photo items without social counters, statistics, booking widgets, or unrelated proof elements

#### Scenario: Visitor opens a review item
- **WHEN** a visitor activates a review item in the mosaic
- **THEN** the system opens a popup that displays the full review text with its traveler attribution and localized content for the current language

#### Scenario: Visitor opens a group photo item
- **WHEN** a visitor activates a group photo item in the mosaic
- **THEN** the system opens a popup that displays the enlarged group photo with appropriate accessible text

#### Scenario: Visitor uses the mosaic on mobile
- **WHEN** a visitor views the traveler reviews section on a mobile viewport
- **THEN** the system displays the mosaic in two columns while preserving readable review excerpts and tappable photo or review items

#### Scenario: Launch has limited approved content
- **WHEN** only a small number of approved group photos and real review entries are available
- **THEN** the system still presents a complete compact mosaic without requiring placeholder social proof items
