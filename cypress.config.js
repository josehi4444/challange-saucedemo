const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  video: false,
  retries: 1,
  viewportWidth: 1440,
  viewportHeight: 900,
  reporter: "list",
  chromeWebSecurity: false,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 40000,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {

      const file = config.env.configFile || 'development';
      const pathToConfigFile = path.resolve('./cypress', 'config', `${file}.json`);
      config.env = JSON.parse(fs.readFileSync(pathToConfigFile, 'utf8'));

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push(
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
          );
        }
        return launchOptions;
      });

      allureCypress(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/ui/*.cy.js',
  },
});

