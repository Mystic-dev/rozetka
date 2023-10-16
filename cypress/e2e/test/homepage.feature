Feature: Website
  Scenario: visiting the frontpage
    Given User is using "desktop"
    When I visit homepage
    Then I wait "5" seconds
    And I click custom button
    