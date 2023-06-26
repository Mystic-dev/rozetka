Feature: Website
  Scenario: visiting the frontpage
    Given User is using "mobile"
    When I visit homepage
    Then I wait "5" seconds
    