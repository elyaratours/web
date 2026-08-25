## ADDED Requirements

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
