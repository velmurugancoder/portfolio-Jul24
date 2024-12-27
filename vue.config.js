const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio-Jul24/" : "/",
  // homepage: "https://velmurugancoder.github.io/portfolio-Jul24",
});
