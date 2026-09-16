## ADDED Requirements

### Requirement: Approved traveler proof display
The system SHALL allow approved real traveler reviews to be displayed on public pages as trust proof while preserving the prohibition on fake, placeholder, or unapproved review sections.

#### Scenario: Approved reviews are available for display
- **WHEN** approved real review entries are configured for publication
- **THEN** the public site may display a concise review/traveler proof section on a relevant public page such as Home, authority, or contact
- **AND** the section displays only approved review text, approved attribution, source context, and direct links to the verified Google Business Profile when appropriate

#### Scenario: No approved reviews are available
- **WHEN** no approved real review entries are configured for publication
- **THEN** the public site does not display a review section, testimonial carousel, star rating, aggregate rating, or review count as if reviews existed
- **AND** existing navigation, tour discovery, legal links, contact links, and reservation actions remain available

### Requirement: Review display localization
The system SHALL present approved review content in Spanish and English without misleading visitors about the original language or source.

#### Scenario: Review has approved localized text
- **WHEN** a review has approved text for the visitor's locale
- **THEN** the page may display that localized text with approved attribution and Google Business Profile source context
- **AND** the localized text does not add claims absent from the approved source review

#### Scenario: Review has no approved localized text
- **WHEN** a review has no approved text for the visitor's locale
- **THEN** the page either displays the approved original text with clear source context or omits that review from the localized section
- **AND** the page does not generate an unapproved translation silently

### Requirement: Verified profile link consistency
The system SHALL keep the verified Google Business Profile link consistent across visible public surfaces and structured data.

#### Scenario: Visitor sees external profile links
- **WHEN** a public page displays external profile links for Elyara
- **THEN** the Google Business Profile link points to `https://maps.app.goo.gl/9bterUh4xSYH5jCf6` wherever the verified Google profile is shown
- **AND** the Instagram link and approved contact links remain available where they were already part of the public layout

#### Scenario: Crawler reads pages with profile links
- **WHEN** a crawler reads a page that visibly links to the verified Google Business Profile
- **THEN** business structured data may include the same profile URL in `sameAs`
- **AND** the structured data does not include profile URLs that are not visible or approved
