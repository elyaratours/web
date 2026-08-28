## ADDED Requirements

### Requirement: Localized contact page approved image
The system SHALL display the approved contact illustration on Spanish and English contact pages as the visible page image and metadata image, with localized accessible text.

#### Scenario: Spanish visitor sees approved contact image
- **WHEN** a visitor opens `/es/contacto/`
- **THEN** the page displays `/images/Contacto.png` as the main contact image
- **AND** the image uses Spanish accessible text

#### Scenario: English visitor sees approved contact image
- **WHEN** a visitor opens `/en/contact/`
- **THEN** the page displays `/images/Contacto.png` as the main contact image
- **AND** the image uses English accessible text

#### Scenario: Contact page metadata uses approved image
- **WHEN** search engines or social platforms read either localized contact page
- **THEN** the page metadata references `/images/Contacto.png` as the contact page image

#### Scenario: Existing contact behavior remains unchanged
- **WHEN** the localized contact page image update is applied
- **THEN** the system preserves existing contact page copy, routes, email link, Instagram link, navigation links, and lightweight contact scope without internal forms, checkout, or payment flow
