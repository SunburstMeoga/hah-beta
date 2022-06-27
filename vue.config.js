const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Copy files to specified directory
const copyFiles = [
 {
     from: path.resolve("src/plugins/manifest.json"),
     to: `${path.resolve("dist")}/manifest.json`
   },
   {
     from: path.resolve("src/assets"),
     to: path.resolve("dist/assets")
   },
   {
     from: path.resolve("src/plugins/inject.js"),
     to: path.resolve("dist/js")
   }
];

// copy plugin
const plugins = [
   new CopyWebpackPlugin({
     patterns: copyFiles
   })
];

// page file
const pages = {};
// config popup.html
const chromeName = ["popup"];

chromeName.forEach(name => {
   pages[name] = {
     entry: `src/${name}/main.js`,
     template: `src/${name}/index.html`,
     filename: `${name}.html`
   };
});

module.exports = {
 pages,
 productionSourceMap: false,
 // config content.js background.js
 configureWebpack: {
  entry: {
   background: "./src/background/main.js"
  },
  output: {
   filename: "js/[name].js"
  },
  plugins
 },
 // config content.css
 css: {
  extract: {
   filename: "css/[name].css"
  }
 }
}