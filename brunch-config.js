/*eslint-env node */

module.exports = {
  config: {
    paths: {
      watched: ["src"]
    },
    files: {
      javascripts: {
        joinTo: "app.js"
      },
      stylesheets: {
        joinTo: "app.css"
      }
    },
    plugins: {
      elmBrunch: {
        mainModules: ["src/Main.elm"],
        outputFolder: "./dist"
      }
    }
  }
};