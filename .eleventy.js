const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function(eleventyConfig) {
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
	passthroughFileCopy: true,
	dir: {
	  input: "src",
	  includes: "_includes",
	  data: "_data",
	  output: "_site"
	}
  };
};