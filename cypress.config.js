const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  reporter: 'cypress-mochawesome-reporter',
  projectId: "xz77ss",

  env: {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
  e2e: {

    //experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/integration/Login/*.cy.js','cypress/e2e/integration/Dashboard/*.cy.js']
  
  },
});

