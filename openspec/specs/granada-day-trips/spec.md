## Purpose

Provides a dedicated public section for private one-day trips to Granada from nearby cities, allowing visitors to choose an origin, build a cultural Granada experience, and request a tailored proposal through external contact channels.

## Requirements

### Requirement: Localized day-trip section
The system SHALL provide a dedicated localized public section for private one-day trips to Granada from other cities.

#### Scenario: Visitor discovers day trips from navigation
- **WHEN** a visitor views the localized primary navigation
- **THEN** the system displays a localized path to the day-trip section as `Day Trips` or `Excursiones de un dia`
- **AND** the link resolves to the matching localized day-trip landing page

#### Scenario: Visitor opens Spanish day-trip landing page
- **WHEN** a visitor opens `/es/excursiones-un-dia-granada/`
- **THEN** the system displays a Spanish landing page for `Excursiones de un dia a Granada`
- **AND** the page presents the service as private, cultural, personalized, and guided by an official guide

#### Scenario: Visitor opens English day-trip landing page
- **WHEN** a visitor opens `/en/day-trips-granada/`
- **THEN** the system displays an English landing page for `Day Trips to Granada`
- **AND** the page presents the service as private, cultural, personalized, and guided by an official guide

#### Scenario: Visitor sees available origin cities
- **WHEN** a visitor views the day-trip landing page
- **THEN** the system lists at least Malaga/Costa del Sol and Cordoba as available private day-trip origins
- **AND** each origin links to its localized day-trip detail page

### Requirement: Localized origin day-trip pages
The system SHALL provide localized public detail pages for the initial private day trips from Malaga/Costa del Sol and Cordoba to Granada.

#### Scenario: Visitor opens English Malaga day trip
- **WHEN** a visitor opens `/en/tours/day-trip-malaga-granada/`
- **THEN** the system displays `Private Day Trip from Malaga to Granada`
- **AND** the page includes a short introduction, approximate duration, `Price on request`, offered languages, and a clear request CTA

#### Scenario: Visitor opens Spanish Malaga day trip
- **WHEN** a visitor opens `/es/tours/excursion-malaga-granada/`
- **THEN** the system displays `Excursion privada de un dia desde Malaga a Granada`
- **AND** the page includes a short introduction, approximate duration, `Precio bajo consulta`, offered languages, and a clear request CTA

#### Scenario: Visitor opens English Cordoba day trip
- **WHEN** a visitor opens `/en/tours/day-trip-cordoba-granada/`
- **THEN** the system displays `Private Day Trip from Cordoba to Granada`
- **AND** the page includes a short introduction, approximate duration, `Price on request`, offered languages, and a clear request CTA

#### Scenario: Visitor opens Spanish Cordoba day trip
- **WHEN** a visitor opens `/es/tours/excursion-cordoba-granada/`
- **THEN** the system displays `Excursion privada de un dia desde Cordoba a Granada`
- **AND** the page includes a short introduction, approximate duration, `Precio bajo consulta`, offered languages, and a clear request CTA

### Requirement: Granada experience choices
The system SHALL let day-trip visitors understand that they choose a main Granada experience for the day rather than receiving a fixed mass itinerary.

#### Scenario: Visitor chooses between main experiences
- **WHEN** a visitor views a day-trip landing or detail page
- **THEN** the system displays a section equivalent to `Choose your Granada experience` or `Elige tu experiencia en Granada`
- **AND** the section presents two main options: Alhambra private tour and Historic Centre plus Albaicin

#### Scenario: Visitor reads Alhambra option
- **WHEN** a visitor views the Alhambra private option
- **THEN** the system states that the experience is a private visit to the Alhambra and Generalife with an official guide
- **AND** the system states that the route depends on monument ticket availability
- **AND** the system allows the page copy to mention possible free time, lunch, or calm complementary activity after the visit when the itinerary allows it

#### Scenario: Visitor reads Historic Centre and Albaicin option
- **WHEN** a visitor views the Historic Centre plus Albaicin option
- **THEN** the system presents it as a complete private walking route through Granada's historic centre and Albaicin
- **AND** the system describes history, heritage, viewpoints, and historic neighborhoods
- **AND** the system does not present it as something that must be combined with the Alhambra on the same day

### Requirement: Optional day-trip complements
The system SHALL present optional complements that help visitors build a private day trip around their interests, logistics, and budget.

#### Scenario: Visitor sees optional complements
- **WHEN** a visitor views a day-trip landing or detail page
- **THEN** the system displays a section equivalent to `Make your day complete` or `Completa tu excursion`
- **AND** the section presents private transfer, local restaurant lunch, and tailor-made itinerary as optional complements

#### Scenario: Visitor reads lunch complement
- **WHEN** a visitor views the lunch complement
- **THEN** the system presents lunch as an optional local restaurant experience
- **AND** the system does not name a specific restaurant or fixed menu
- **AND** the system states or implies that the choice depends on availability, preferences, and budget

#### Scenario: Visitor reads transfer complement
- **WHEN** a visitor views the transfer complement
- **THEN** the system presents private transfer as optional unless a specific page states it is included in a requested proposal
- **AND** the system does not require visitors to use Elyara's transport to request the guided experience

### Requirement: Origin-specific day-trip positioning
The system SHALL present relevant logistics for each origin city without promising unavailable services or fixed schedules.

#### Scenario: Visitor views Malaga or Costa del Sol day trip logistics
- **WHEN** a visitor views the Malaga/Costa del Sol day-trip detail page
- **THEN** the system mentions optional hotel or agreed pickup point, private transfer to Granada, choice between Alhambra or Historic Centre plus Albaicin, optional lunch, possible free time when the itinerary allows it, and return to Malaga/Costa del Sol at the end

#### Scenario: Visitor views Cordoba day trip logistics
- **WHEN** a visitor views the Cordoba day-trip detail page
- **THEN** the system mentions optional transfer, choice between Alhambra or Historic Centre plus Albaicin, optional lunch, and an itinerary adaptable to interests, timing, and availability

### Requirement: Day-trip inquiry and pricing constraints
The system SHALL keep private day-trip pricing and reservation flow inquiry-based until details are confirmed externally.

#### Scenario: Visitor sees day-trip pricing
- **WHEN** a visitor views a day-trip card, landing page, or detail page
- **THEN** the system displays `Price on request` or `Precio bajo consulta` rather than a fixed price
- **AND** the page copy explains or implies that pricing depends on group size, pickup city, transport, tickets, lunch, and selected experience

#### Scenario: Visitor requests a private day trip
- **WHEN** a visitor activates a day-trip request CTA
- **THEN** the system opens an approved external contact channel through WhatsApp or email
- **AND** the system does not require an internal booking form, checkout, account creation, or payment flow

#### Scenario: Visitor reads monument availability note
- **WHEN** a visitor views day-trip content that mentions monument visits or tickets
- **THEN** the system states that monument entries depend on availability
- **AND** the system does not imply guaranteed Alhambra access without available tickets

### Requirement: Day-trip SEO and localization
The system SHALL expose localized metadata, alternate-language relationships, and sitemap entries for the day-trip section and detail pages.

#### Scenario: Search engine reads day-trip pages
- **WHEN** a crawler reads a published day-trip landing or detail page
- **THEN** the page exposes a localized title, SEO description, canonical URL, and truthful structured data based on visible content

#### Scenario: Sitemap includes day-trip pages
- **WHEN** the sitemap is generated
- **THEN** the day-trip landing pages and published day-trip detail pages are included with their localized public URLs
- **AND** Spanish and English alternates are associated for corresponding translated pages

#### Scenario: Visitor uses a small screen
- **WHEN** a visitor views day-trip pages on mobile
- **THEN** the day-trip content, cards, navigation links, and CTAs remain readable and usable without horizontal scrolling
