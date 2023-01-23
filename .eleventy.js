const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img")

module.exports = function(eleventyConfig) {
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter("postDate", (dateObj) => {
	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
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