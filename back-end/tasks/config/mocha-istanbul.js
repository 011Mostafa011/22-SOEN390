/**
 * `tasks/config/babel`
 *
 * ---------------------------------------------------------------
 *
 * Transpile >=ES6 code for broader browser compatibility.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/babel.js
 *
 */
module.exports = function (grunt) {
  grunt.config.set("mocha_istanbul", {
    coverage: {
      src: "test", // the folder, not the files
      options: {
        coverageFolder: "coverage",
        mask: "**/*.test.js",
        root: "api/",
      },
    },
  });

  // Adds "grunt-mocha-istanbul" npm task
  grunt.loadNpmTasks("grunt-mocha-istanbul");

  // Adding test task enabling "grunt test" command
  grunt.registerTask("test", ["mocha_istanbul:coverage"]);
};
