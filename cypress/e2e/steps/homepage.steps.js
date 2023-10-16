import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../pom/homepage";

When(/^I visit homepage$/, () => {
    cy.visit("/");
  });

Then(/^I click custom button$/, ()=> {
  Homepage.clickOnCustomBtn();
});