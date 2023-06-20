const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin  = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      })

      on("file:preprocessor", bundler)
      await addCucumberPreprocessorPlugin(on, config)
      getCompareSnapshotsPlugin(on, config);
      allureWriter(on, config);

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          // force screen to behave like retina
          // when running Chrome headless browsers
          // (2560x1440 in size by default)
          launchOptions.args.push('--force-device-scale-factor=2')
        }

        return launchOptions
      })



      return config;
    },
    
    specPattern: "./cypress/e2e/test/*.feature",
    baseUrl: "https://rozetka.com.ua/",
    video: false
  },
});
