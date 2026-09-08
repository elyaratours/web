## MODIFIED Requirements

### Requirement: External reservation flow
The system SHALL start reservations through external WhatsApp links to `+34 611 126 979` and email links to `elyaratours@gmail.com` rather than internal booking forms, checkout, or payment flows.

#### Scenario: Visitor selects reserve action
- **WHEN** a visitor activates a general reservation call to action that is not tied to a concrete tour or scheduled date
- **THEN** the system opens the selected external channel: `https://wa.me/34611126979` with localized prefilled inquiry text or a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text
- **AND** the selected channel does not require account creation, internal form submission, checkout, or payment processing

#### Scenario: Visitor sees a general home reserve action
- **WHEN** a visitor views the localized home hero reservation call to action
- **THEN** the system displays WhatsApp and email as available external reservation channels
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor selects a concrete tour reserve action
- **WHEN** a visitor activates a reservation call to action for a specific published tour that is not tied to a scheduled calendar date
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text that identifies the selected tour name
- **AND** the selected email action opens a `mailto:elyaratours@gmail.com` link with a prefilled subject containing only the selected tour name
- **AND** the system does not prefill dates, group size, number of people, language, itinerary details, or payment details unless they are part of the selected scheduled-date context
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
- **THEN** the system displays WhatsApp and email reservation actions for that scheduled date
- **AND** the system displays `+34 611 126 979` and `elyaratours@gmail.com` near the reservation actions so either contact value can be copied directly

#### Scenario: Visitor completes no internal checkout
- **WHEN** a visitor browses tour pages or scheduled calendar availability
- **THEN** the system does not require account creation, payment processing, internal form submission, or internal checkout to start a reservation

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
- **AND** the calendar remains before the Tailor-made/Viajes a medida section and traveler reviews section

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

### Requirement: Tour detail reservation calendar
The system SHALL display route-specific upcoming availability on tour detail pages one month at a time while preserving external WhatsApp and email reservation behavior for tours without scheduled dates.

#### Scenario: Visitor opens Spanish Soul of Granada route
- **WHEN** a visitor opens the Spanish tour detail page for `El alma de Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in Spanish

#### Scenario: Visitor opens English Soul of Granada route
- **WHEN** a visitor opens the English tour detail page for `The Soul of Granada`
- **THEN** the system displays upcoming scheduled dates for that route within the next 2 months
- **AND** each scheduled date is shown at 10:00 in English

#### Scenario: Visitor sees one tour calendar month at a time
- **WHEN** a visitor views route-specific upcoming availability with more than one generated month
- **THEN** the system displays one calendar month grid at a time
- **AND** the system provides month navigation controls when another generated month is available

#### Scenario: Visitor opens a tour without scheduled availability
- **WHEN** a visitor opens a published tour detail page that has no scheduled dates in the next 2 months
- **THEN** the system preserves clear WhatsApp and email reservation or inquiry actions for that tour
- **AND** the system does not display unrelated dates from other tours as bookable for that tour

### Requirement: Commercial Granada tour landing pages
The system SHALL provide localized commercial landing content for high-intent Granada tour searches while preserving existing published tour detail URLs.

#### Scenario: Spanish visitor opens private tours landing page
- **WHEN** a visitor navigates to the Spanish commercial landing page for private or guided tours in Granada
- **THEN** the system displays Spanish content explaining Elyara's private tours, cultural walking routes, languages, reservation channels, and links to relevant published tour pages

#### Scenario: English visitor opens private tours landing page
- **WHEN** a visitor navigates to the English commercial landing page for private or guided tours in Granada
- **THEN** the system displays English content explaining Elyara's private tours, cultural walking routes, languages, reservation channels, and links to relevant published tour pages

#### Scenario: Search engine reads commercial landing metadata
- **WHEN** a crawler reads a localized commercial landing page
- **THEN** the page exposes localized title, description, canonical URL, language alternates, breadcrumb structured data, and relevant business or service structured data

#### Scenario: Visitor starts inquiry from commercial landing page
- **WHEN** a visitor activates a reservation or inquiry call to action from a commercial landing page
- **THEN** the system opens an external WhatsApp or email flow to `+34 611 126 979` or `elyaratours@gmail.com`
- **AND** the system does not require account creation, internal form submission, checkout, or payment processing

### Requirement: Tailor-made external inquiry flow
The system SHALL start tailor-made trip and route inquiries through external WhatsApp links to `+34 611 126 979` and email links to `elyaratours@gmail.com` rather than internal forms, account flows, checkout, or payment processing.

#### Scenario: Visitor starts tailor-made inquiry
- **WHEN** a visitor activates a tailor-made inquiry call to action
- **THEN** the selected WhatsApp action opens `https://wa.me/34611126979` with localized prefilled text for a tailor-made trip or route inquiry
- **AND** the selected email action opens a clean `mailto:elyaratours@gmail.com` link without prefilled subject or body text

#### Scenario: Visitor browses tailor-made offer
- **WHEN** a visitor browses the tailor-made home section or standalone page
- **THEN** the system does not require account creation, internal form submission, payment processing, or internal checkout to begin the inquiry

### Requirement: Footer contact information
The system SHALL present direct business contact information in the global footer on public pages.

#### Scenario: Visitor sees footer contact details
- **WHEN** a visitor views the footer on any public page
- **THEN** the footer displays `elyaratours@gmail.com`, WhatsApp number `+34 611 126 979`, and Instagram handle `@elyaratours`

#### Scenario: Visitor activates email contact
- **WHEN** a visitor activates the footer email contact
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link

#### Scenario: Visitor activates WhatsApp contact
- **WHEN** a visitor activates the footer WhatsApp contact
- **THEN** the system opens `https://wa.me/34611126979` as an external link

#### Scenario: Visitor activates Instagram contact
- **WHEN** a visitor activates the footer Instagram contact
- **THEN** the system opens `https://instagram.com/elyaratours` as an external link

#### Scenario: Footer keeps lightweight contact scope
- **WHEN** the footer contact area is displayed
- **THEN** the system does not introduce newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow

### Requirement: Localized contact pages
The system SHALL provide localized contact pages that explain how visitors can contact Elyara using email, WhatsApp, and Instagram.

#### Scenario: Visitor opens Spanish contact page
- **WHEN** a visitor navigates to `/es/contacto/`
- **THEN** the system displays a Spanish contact page titled `Contacto` with email `elyaratours@gmail.com`, WhatsApp number `+34 611 126 979`, and Instagram handle `@elyaratours`

#### Scenario: Visitor opens English contact page
- **WHEN** a visitor navigates to `/en/contact/`
- **THEN** the system displays an English contact page titled `Contact` with email `elyaratours@gmail.com`, WhatsApp number `+34 611 126 979`, and Instagram handle `@elyaratours`

#### Scenario: Visitor reads contact page purpose
- **WHEN** a visitor reads a localized contact page
- **THEN** the page explains that visitors can write about route reservations, private routes, tailor-made trip planning, or questions about visiting Granada

### Requirement: Contact page contact links
The system SHALL expose the approved contact channels on localized contact pages as direct links.

#### Scenario: Visitor activates contact page email link
- **WHEN** a visitor activates the email contact on a localized contact page
- **THEN** the system opens a `mailto:elyaratours@gmail.com` link

#### Scenario: Visitor activates contact page WhatsApp link
- **WHEN** a visitor activates the WhatsApp contact on a localized contact page
- **THEN** the system opens `https://wa.me/34611126979` as an external link

#### Scenario: Visitor activates contact page Instagram link
- **WHEN** a visitor activates the Instagram contact on a localized contact page
- **THEN** the system opens `https://instagram.com/elyaratours` as an external link

#### Scenario: Contact page excludes unapproved channels
- **WHEN** a visitor views a localized contact page
- **THEN** the page does not display physical address, additional social networks, newsletter signup, internal forms, backend contact handling, account creation, checkout, or payment flow

### Requirement: Mobile public experience
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
- **WHEN** a visitor views or opens the traveler reviews mosaic on a mobile viewport
- **THEN** review excerpts, photo items, popup content, and close controls remain readable, tappable, and visually balanced

#### Scenario: Mobile visitor starts an inquiry or reservation
- **WHEN** a mobile visitor wants to reserve a tour, send a general inquiry, or start a tailor-made inquiry
- **THEN** the relevant WhatsApp and email calls to action are easy to identify and activate without introducing internal booking, checkout, account creation, or payment behavior

#### Scenario: Desktop experience remains intact
- **WHEN** the mobile polish is applied
- **THEN** the existing desktop visual language, localized content, route structure, data-driven tours, editorial pages, and external reservation flow remain unchanged in purpose and behavior
