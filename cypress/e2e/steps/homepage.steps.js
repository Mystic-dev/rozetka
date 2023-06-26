import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/^I visit homepage$/, () => {
    cy.visit("/");
  });