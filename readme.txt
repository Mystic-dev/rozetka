Set up guide
Project example: https://github.com/BilVaD1/Tests_for_TShirt/tree/main/.vscode

1. Install Cypress | https://www.cypress.io/
npm install cypress --save-dev

2. Scripts for quick launch
package.json 
"scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run -b chrome --headed --env allure=true allureLogGherkin=true",
    "allure:gen": "allure generate",
    "allure:run": "allure open"
  }

script launch:
npm run cy:open

2.1 Configure Cypress
Click e2e testing > continue button

3. Install Cucumber | https://github.com/badeball/cypress-cucumber-preprocessor 
npm install @badeball/cypress-cucumber-preprocessor

3.1. Follow the steps "Installing Cucumber" | https://dev.to/kailashpathak7/how-to-integrate-bdd-cucumber-in-cypress-10-50ef 
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

4. Fill the cypress.config.js

5. Create folders and feature file "./cypress/e2e/test/*.feature" (e.g. homepage.feature)
https://github.com/badeball/cypress-cucumber-preprocessor#introduction

6. Create folder and steps file "./cypress/e2e/steps/*.ts"
https://github.com/badeball/cypress-cucumber-preprocessor#introduction

7. Create file .cypress-cucumber-preprocessorrc.json
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md
{
    "stepDefinitions": [
      "cypress/e2e/steps/**/*.{js,ts}"
    ]
}

8. Set up environment
https://docs.cypress.io/guides/guides/environment-variables#__docusaurus_skipToContent_fallback
Create cypress.env.json
{
    "mobile": {
        "width": 390,
        "height": 844
    },
    "desktop": {
        "width": 1920,
        "height": 1080
    }
}

9. Configure VS code
Install extentions: Cucumber
Follow "How to use" steps
settings.json
{
    "cucumberautocomplete.steps": [
        "cypress/e2e/steps/**/*.js"
    ]
}

10. Set up POM
Create folder cypress/pom
homepage.js
const selectors = {
    logo: 'img[alt="logo"]',
    button: 'button[data-testid="custom-btn"]'
}
class Homepage {
    get selectors() {
        return selectors
    }
    clickOnCustomBtn() {
        cy.get(selectors.button).click()
    }
}
module.exports = new Homepage()

11. Visual regression testing
https://docs.cypress.io/plugins > Visual testing
Install Cypress image diff | https://github.com/uktrade/cypress-image-diff | https://cypress.visual-image-diff.dev/
npm i -D cypress-image-diff-js

Update cypress.config.js file
https://cypress.visual-image-diff.dev/getting-started/cypress-integration/javascript

11.1 
Update cupress/support/commands.js

// cypress/support/{scheme}.js, where {scheme} defaults to e2e
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();


12. Install Allure:
Follow the instruction - https://github.com/Shelex/cypress-allure-plugin
npm i -D @shelex/cypress-allure-plugin
npm run allure generate
npm run allure open