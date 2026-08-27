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

### Requirement: Localized home approved hero image
The system SHALL display the provided `Granada-main.jpeg` image as the main hero image on the Spanish and English localized home pages, with localized accessible text.

#### Scenario: Spanish visitor sees approved home hero image
- **WHEN** a visitor opens the Spanish home page at `/es/`
- **THEN** the hero displays `/images/Granada-main.jpeg` as the main image
- **AND** the hero image uses Spanish accessible text

#### Scenario: English visitor sees approved home hero image
- **WHEN** a visitor opens the English home page at `/en/`
- **THEN** the hero displays `/images/Granada-main.jpeg` as the main image
- **AND** the hero image uses English accessible text

#### Scenario: Localized home behavior remains unchanged
- **WHEN** the localized home page is displayed after the hero image update
- **THEN** the system preserves the existing localized hero copy, calls to action, tour catalog, tailor-made section, traveler reviews section, and routing behavior

#### Scenario: Root landing page remains unchanged
- **WHEN** a visitor opens the root landing page at `/`
- **THEN** the system preserves the existing root landing page image unless that page is explicitly updated by a separate change

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

### Requirement: Traveler reviews approved client photos
The system SHALL display the provided client photos `foto-clientes-1.jpeg`, `Foto-clientes-2.jpeg`, and `Foto-clientes-3.jpeg` as the photo items in the localized traveler reviews mosaic, replacing the previous group photo assets.

#### Scenario: Spanish visitor sees approved client photos in traveler reviews
- **WHEN** a visitor views the Spanish home page and reaches the `Opiniones de nuestros viajeros` section
- **THEN** the mosaic displays photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, and `/images/Foto-clientes-3.jpeg`

#### Scenario: English visitor sees approved client photos in traveler reviews
- **WHEN** a visitor views the English home page and reaches the `Travelers who walked Granada with us` section
- **THEN** the mosaic displays photo items using `/images/foto-clientes-1.jpeg`, `/images/Foto-clientes-2.jpeg`, and `/images/Foto-clientes-3.jpeg`

#### Scenario: Visitor opens an approved client photo
- **WHEN** a visitor activates one of the traveler review mosaic photo items
- **THEN** the popup displays the enlarged approved client photo with appropriate accessible text for the current language

#### Scenario: Existing reviews mosaic behavior remains unchanged
- **WHEN** the traveler reviews section is displayed after the photo update
- **THEN** the system preserves existing review cards, localized section copy, popup behavior, and responsive mosaic layout

### Requirement: Tailor-made trips home discovery
The system SHALL present a localized tailor-made trips and routes section on the public home experience after the tour catalog and before traveler reviews.

#### Scenario: Spanish visitor sees tailor-made offer on home
- **WHEN** a visitor views the Spanish home page and reaches the content after the tour catalog
- **THEN** the system displays a Spanish section titled "Viajes y rutas disenadas para ti" that introduces travel consultation and personalized Granada routes

#### Scenario: English visitor sees tailor-made offer on home
- **WHEN** a visitor views the English home page and reaches the content after the tour catalog
- **THEN** the system displays an English section titled "Tailor-made routes for your trip" that introduces travel consultation and personalized Granada routes

#### Scenario: Visitor follows home tailor-made call to action
- **WHEN** a visitor activates the tailor-made call to action from the home section
- **THEN** the system directs the visitor to the localized standalone tailor-made offer page

### Requirement: Tailor-made approved map image
The system SHALL display the provided `mapa.png` image in the localized Tailor-made/Viajes a medida home section and standalone pages, with localized accessible text.

#### Scenario: Spanish visitor sees approved map image in Viajes a medida home section
- **WHEN** a visitor views the Spanish home page and reaches the `Viajes a medida` section
- **THEN** the section displays `/images/mapa.png` as its image
- **AND** the image uses Spanish accessible text

#### Scenario: English visitor sees approved map image in Tailor-made home section
- **WHEN** a visitor views the English home page and reaches the `Tailor-made` section
- **THEN** the section displays `/images/mapa.png` as its image
- **AND** the image uses English accessible text

#### Scenario: Spanish visitor opens Viajes a medida page
- **WHEN** a visitor opens `/es/viajes-a-medida/`
- **THEN** the page displays `/images/mapa.png` as its main image and social preview image
- **AND** the main image uses Spanish accessible text

#### Scenario: English visitor opens Tailor-made page
- **WHEN** a visitor opens `/en/tailor-made-trips/`
- **THEN** the page displays `/images/mapa.png` as its main image and social preview image
- **AND** the main image uses English accessible text

#### Scenario: Tailor-made behavior remains unchanged
- **WHEN** the Tailor-made/Viajes a medida image update is applied
- **THEN** the system preserves existing localized copy, calls to action, routes, layout, and reservation behavior

### Requirement: Tailor-made trips standalone pages
The system SHALL provide localized standalone pages explaining the tailor-made offer for consultation and personalized routes in Granada.

#### Scenario: Visitor opens Spanish tailor-made page
- **WHEN** a visitor navigates to `/es/viajes-a-medida/`
- **THEN** the system displays Spanish content describing consultation for Granada trip planning and personalized private routes in Granada

#### Scenario: Visitor opens English tailor-made page
- **WHEN** a visitor navigates to `/en/tailor-made-trips/`
- **THEN** the system displays English content describing consultation for Granada trip planning and personalized private routes in Granada

#### Scenario: Visitor compares the two service paths
- **WHEN** a visitor reads the standalone tailor-made page
- **THEN** the system distinguishes travel consultation from guided personalized Granada routes with clear visitor-oriented explanations

#### Scenario: Search engine reads tailor-made pages
- **WHEN** a crawler reads a localized tailor-made page
- **THEN** the page exposes localized title, description, canonical URL, and language-aware alternate metadata

### Requirement: Tailor-made external inquiry flow
The system SHALL start tailor-made trip and route inquiries through external WhatsApp links rather than an internal form, account flow, checkout, or payment process.

#### Scenario: Visitor starts tailor-made inquiry
- **WHEN** a visitor activates a tailor-made inquiry call to action
- **THEN** the system opens an external WhatsApp conversation with prefilled text requesting key trip details such as dates, group size, interests, and language

#### Scenario: Visitor browses tailor-made offer
- **WHEN** a visitor browses the tailor-made home section or standalone page
- **THEN** the system does not require account creation, internal form submission, payment processing, or internal checkout to begin the inquiry

### Requirement: Footer contact information
The system SHALL present direct business contact information in the global footer on public pages.

#### Scenario: Visitor sees footer contact details
- **WHEN** a visitor views the footer on any public page
- **THEN** the footer displays `elyaratours@gmail.com` and Instagram handle `@elyaratours`

#### Scenario: Visitor activates email contact
- **WHEN** a visitor activates the footer email contact
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link

#### Scenario: Visitor activates Instagram contact
- **WHEN** a visitor activates the footer Instagram contact
- **THEN** the system opens `https://instagram.com/elyaratours` as an external link

#### Scenario: Footer keeps lightweight contact scope
- **WHEN** the footer contact area is displayed
- **THEN** the system does not introduce additional social network links, newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow

### Requirement: Localized contact pages
The system SHALL provide localized contact pages that explain how visitors can contact Elyara using email and Instagram only.

#### Scenario: Visitor opens Spanish contact page
- **WHEN** a visitor navigates to `/es/contacto/`
- **THEN** the system displays a Spanish contact page titled `Contacto` with email `elyaratours@gmail.com` and Instagram handle `@elyaratours`

#### Scenario: Visitor opens English contact page
- **WHEN** a visitor navigates to `/en/contact/`
- **THEN** the system displays an English contact page titled `Contact` with email `elyaratours@gmail.com` and Instagram handle `@elyaratours`

#### Scenario: Visitor reads contact page purpose
- **WHEN** a visitor reads a localized contact page
- **THEN** the page explains that visitors can write about route reservations, private routes, tailor-made trip planning, or questions about visiting Granada

### Requirement: Contact page contact links
The system SHALL expose the approved contact channels on localized contact pages as direct links.

#### Scenario: Visitor activates contact page email link
- **WHEN** a visitor activates the email contact on a localized contact page
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link

#### Scenario: Visitor activates contact page Instagram link
- **WHEN** a visitor activates the Instagram contact on a localized contact page
- **THEN** the system opens `https://instagram.com/elyaratours` as an external link

#### Scenario: Contact page excludes unapproved channels
- **WHEN** a visitor views a localized contact page
- **THEN** the page does not display WhatsApp, phone, physical address, additional social networks, newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow

### Requirement: Contact page discovery and metadata
The system SHALL make localized contact pages discoverable from shared navigation and expose appropriate SEO metadata.

#### Scenario: Visitor uses shared navigation to reach contact page
- **WHEN** a visitor views the shared header or footer on a localized public page
- **THEN** the system provides a localized contact link to `/es/contacto/` for Spanish or `/en/contact/` for English

#### Scenario: Search engine reads contact pages
- **WHEN** a crawler reads a localized contact page
- **THEN** the page exposes localized title, description, canonical URL, and language-aware alternate metadata

### Requirement: Elyara brand logo presentation
The system SHALL present Elyara's approved brand logos in the browser tab and global header.

#### Scenario: Browser displays Elyara favicon
- **WHEN** a visitor opens any public page in a browser tab
- **THEN** the browser tab uses the circular Elyara logo as the site favicon

#### Scenario: Header displays Elyara brand identity
- **WHEN** a visitor views the global header on a public page
- **THEN** the header displays the Elyara logo without the circle next to the text `Elyara Tours Granada` on one line

#### Scenario: Header brand link remains accessible
- **WHEN** a visitor activates the header brand area
- **THEN** the system navigates to the localized home page and exposes `Elyara Tours Granada` as the accessible brand name

#### Scenario: Header remains responsive with logo
- **WHEN** a visitor views the global header on mobile or desktop
- **THEN** the header keeps the logo, brand text, navigation, and reservation call to action usable without visual overlap

### Requirement: Header brand favicon
The system SHALL display the site favicon as a brand mark immediately to the left of the site title in the public header while preserving the title text and navigation access.

#### Scenario: Visitor views the desktop header
- **WHEN** a visitor opens a public page on a desktop-width viewport
- **THEN** the header displays the favicon to the left of the `Elyara Tours Granada` title as part of the site brand presentation

#### Scenario: Visitor views the mobile header
- **WHEN** a visitor opens a public page on a mobile-width viewport
- **THEN** the favicon and title remain visually aligned and do not obstruct navigation links or header readability

#### Scenario: Visitor uses assistive technology
- **WHEN** a visitor navigates the header with assistive technology
- **THEN** the favicon does not introduce redundant or confusing accessible text separate from the existing site title

### Requirement: Additional Granada tour offerings
The system SHALL add four additional localized Granada tour offerings to the public tour catalog without replacing the existing published tours.

#### Scenario: Spanish visitor sees additional tours
- **WHEN** a visitor views Spanish tour catalog content
- **THEN** the system includes `Granada entre miradores y leyendas`, `Granada entre dos mundos`, `La Alhambra más allá de los palacios`, and `Catedral y Capilla Real` in addition to the existing published tours

#### Scenario: English visitor sees additional tours
- **WHEN** a visitor views English tour catalog content
- **THEN** the system includes `Granada Viewpoints and Legends`, `Granada Between Two Worlds`, `The Alhambra Beyond the Palaces`, and `Cathedral and Royal Chapel` in addition to the existing published tours

#### Scenario: Visitor opens new Spanish tour detail pages
- **WHEN** a visitor navigates to the Spanish detail page for any newly added tour
- **THEN** the system displays localized Spanish title, duration, price, languages, image, description, SEO metadata, and reservation call to action for that tour

#### Scenario: Visitor opens new English tour detail pages
- **WHEN** a visitor navigates to the English detail page for any newly added tour
- **THEN** the system displays localized English title, duration, price, languages, image, description, SEO metadata, and reservation call to action for that tour

#### Scenario: New tours use data-driven pages
- **WHEN** the four new tours are published
- **THEN** the system presents them through the existing shared tour catalog and detail page patterns rather than manually copied standalone pages

#### Scenario: New tour reservation starts externally
- **WHEN** a visitor activates the reservation call to action for any newly added tour
- **THEN** the system opens an external WhatsApp conversation or configured external reservation destination without requiring account creation, internal checkout, payment processing, or internal form submission

### Requirement: English Granada and the New World approved image
The system SHALL display the provided approved `1492 New World Order` artwork as the public tour image for the English `Granada and the New World` tour wherever that tour's image is rendered.

#### Scenario: Visitor sees the English Granada and the New World tour in the catalog
- **WHEN** a visitor views a tour catalog or listing that includes the English `Granada and the New World` tour
- **THEN** the tour card displays the provided approved `1492 New World Order` artwork as that tour's image

#### Scenario: Visitor opens the English Granada and the New World tour detail page
- **WHEN** a visitor opens the English `Granada and the New World` tour detail page
- **THEN** the page displays the provided approved `1492 New World Order` artwork as the tour's main image

#### Scenario: Other localized tour imagery remains unchanged
- **WHEN** visitors view other tours or non-English localized tour entries
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved artwork

### Requirement: Spanish 1492 Nuevo Orden Mundial approved image
The system SHALL display the provided approved Spanish `1492 Nuevo Orden Mundial` artwork as the public tour image for the Spanish `1492 Nuevo Orden Mundial` tour wherever that tour's image is rendered.

#### Scenario: Visitor sees the Spanish 1492 Nuevo Orden Mundial tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `1492 Nuevo Orden Mundial` tour
- **THEN** the tour card displays the provided approved Spanish `1492 Nuevo Orden Mundial` artwork as that tour's image

#### Scenario: Visitor opens the Spanish 1492 Nuevo Orden Mundial tour detail page
- **WHEN** a visitor opens the Spanish `1492 Nuevo Orden Mundial` tour detail page
- **THEN** the page displays the provided approved Spanish `1492 Nuevo Orden Mundial` artwork as the tour's main image

#### Scenario: English tour imagery remains unchanged
- **WHEN** visitors view the English `Granada and the New World` tour
- **THEN** the system preserves its existing configured English artwork image

### Requirement: Alma de Granada approved image
The system SHALL display the provided `almagranada.jpg` image as the public tour image for the Spanish `El alma de Granada` tour and the English `Albaicin and Hidden Viewpoints` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish El alma de Granada tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `El alma de Granada` tour
- **THEN** the tour card displays the provided `almagranada.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish El alma de Granada tour detail page
- **WHEN** a visitor opens the Spanish `El alma de Granada` tour detail page
- **THEN** the page displays the provided `almagranada.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Albaicin and Hidden Viewpoints tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Albaicin and Hidden Viewpoints` tour
- **THEN** the tour card displays the provided `almagranada.jpg` image as that tour's image

#### Scenario: Visitor opens the English Albaicin and Hidden Viewpoints tour detail page
- **WHEN** a visitor opens the English `Albaicin and Hidden Viewpoints` tour detail page
- **THEN** the page displays the provided `almagranada.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image

### Requirement: Cathedral and Royal Chapel approved image
The system SHALL display the provided `23.jpg` image as the public tour image for the Spanish `Catedral y Capilla Real` tour and the English `Cathedral and Royal Chapel` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Catedral y Capilla Real tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Catedral y Capilla Real` tour
- **THEN** the tour card displays the provided `23.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Catedral y Capilla Real tour detail page
- **WHEN** a visitor opens the Spanish `Catedral y Capilla Real` tour detail page
- **THEN** the page displays the provided `23.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Cathedral and Royal Chapel tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Cathedral and Royal Chapel` tour
- **THEN** the tour card displays the provided `23.jpg` image as that tour's image

#### Scenario: Visitor opens the English Cathedral and Royal Chapel tour detail page
- **WHEN** a visitor opens the English `Cathedral and Royal Chapel` tour detail page
- **THEN** the page displays the provided `23.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image

### Requirement: Granada Between Two Worlds approved image
The system SHALL display the provided `centro-albayzin.jpg` image as the public tour image for the Spanish `Granada entre dos mundos` tour and the English `Granada Between Two Worlds` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Granada entre dos mundos tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Granada entre dos mundos` tour
- **THEN** the tour card displays the provided `centro-albayzin.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Granada entre dos mundos tour detail page
- **WHEN** a visitor opens the Spanish `Granada entre dos mundos` tour detail page
- **THEN** the page displays the provided `centro-albayzin.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Granada Between Two Worlds tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Granada Between Two Worlds` tour
- **THEN** the tour card displays the provided `centro-albayzin.jpg` image as that tour's image

#### Scenario: Visitor opens the English Granada Between Two Worlds tour detail page
- **WHEN** a visitor opens the English `Granada Between Two Worlds` tour detail page
- **THEN** the page displays the provided `centro-albayzin.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image

### Requirement: Essential Alhambra approved image
The system SHALL display the provided `alhambra.jpg` image as the public tour image for the Spanish `Alhambra: símbolos, poder y belleza` tour and the English `Essential Alhambra at Sunset` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish Alhambra símbolos poder y belleza tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `Alhambra: símbolos, poder y belleza` tour
- **THEN** the tour card displays the provided `alhambra.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish Alhambra símbolos poder y belleza tour detail page
- **WHEN** a visitor opens the Spanish `Alhambra: símbolos, poder y belleza` tour detail page
- **THEN** the page displays the provided `alhambra.jpg` image as the tour's main image

#### Scenario: Visitor sees the English Essential Alhambra at Sunset tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `Essential Alhambra at Sunset` tour
- **THEN** the tour card displays the provided `alhambra.jpg` image as that tour's image

#### Scenario: Visitor opens the English Essential Alhambra at Sunset tour detail page
- **WHEN** a visitor opens the English `Essential Alhambra at Sunset` tour detail page
- **THEN** the page displays the provided `alhambra.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image

### Requirement: Alhambra beyond the palaces approved image
The system SHALL display the provided `puerta-del-vino-01.jpg` image as the public tour image for the Spanish `La Alhambra más allá de los palacios` tour and the English `The Alhambra Beyond the Palaces` tour wherever those tours' images are rendered.

#### Scenario: Visitor sees the Spanish La Alhambra más allá de los palacios tour in the catalog
- **WHEN** a visitor views a Spanish tour catalog or listing that includes the `La Alhambra más allá de los palacios` tour
- **THEN** the tour card displays the provided `puerta-del-vino-01.jpg` image as that tour's image

#### Scenario: Visitor opens the Spanish La Alhambra más allá de los palacios tour detail page
- **WHEN** a visitor opens the Spanish `La Alhambra más allá de los palacios` tour detail page
- **THEN** the page displays the provided `puerta-del-vino-01.jpg` image as the tour's main image

#### Scenario: Visitor sees the English The Alhambra Beyond the Palaces tour in the catalog
- **WHEN** a visitor views an English tour catalog or listing that includes the `The Alhambra Beyond the Palaces` tour
- **THEN** the tour card displays the provided `puerta-del-vino-01.jpg` image as that tour's image

#### Scenario: Visitor opens the English The Alhambra Beyond the Palaces tour detail page
- **WHEN** a visitor opens the English `The Alhambra Beyond the Palaces` tour detail page
- **THEN** the page displays the provided `puerta-del-vino-01.jpg` image as the tour's main image

#### Scenario: Other tour imagery remains unchanged
- **WHEN** visitors view other tours
- **THEN** the system preserves their existing configured tour images unless they explicitly reference the same approved image
