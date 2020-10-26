module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html"]);
  eleventyConfig.addWatchTarget("./assets/css/*.css");
  eleventyConfig.addPassthroughCopy("assets/css/");
  return {
    // input: "src",
    // includes: "_includes",
    // // includes: "_includes",
    // // layouts: "_layouts",
    // output: "_site",
    // passthroughFileCopy: true,
    // dir: {
    //   data: "_data", // default
    // },
    htmlTemplateEngine: "liquid",
    // markdownTemplateEngine: "liquid",
    // htmlTemplateEngine: "liquid",
  };
};
