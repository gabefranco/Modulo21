const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
   devServer: {
      framework: "vue-cli",
      bundler: "webpack",
      componentFolder: "src", // adicionei aula
      testFiles: "**/*.cy.js" // adicionei aula
    },
  },
});
