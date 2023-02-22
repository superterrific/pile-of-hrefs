const CleanCSS = require("clean-css");

// Transforms - add transforms!
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {

  // Minify
  config.addFilter("cssmin", function(code) {
      return new CleanCSS({}).minify(code).styles;
  });

  if (isProduction) {
  config.addTransform('htmlmin', htmlMinTransform);
  }

  // Set directories to pass through to the public folder
  config.addPassthroughCopy("./src/img");
  config.addPassthroughCopy("./src/fonts");

  // Launch in a new browser
  config.setBrowserSyncConfig({
    open: true,
    ghostMode: false
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public'
    }
  };
};
