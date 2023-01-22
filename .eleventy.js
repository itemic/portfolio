module.exports = function(eleventyConfig) {
  // Set custom directories for input, output, includes, and data
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