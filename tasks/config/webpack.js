/**
 * `webpack`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-webpack
 *
 */
 
var path = require('path'); 
var debug = process.env.NODE_ENV !== "production";

module.exports = function(grunt) {

  grunt.config.set('webpack', {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./assets/js/home.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "./assets/js/home.min.js"
  }
});

  grunt.loadNpmTasks('grunt-webpack');
};
