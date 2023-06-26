import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/// Preconditions
Given(/^User is using "(mobile|desktop)"$/, (device) => {
    const screen = Cypress.env(device)
    cy.viewport(screen.width, screen.height)
  });

Then(/^I wait "(.*)" seconds$/, (time) => {
    const sec = time*1000
    cy.wait(sec)
  });