const path = require('path');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//The main configuration object within our file. within this object that tell webpack what to do.
module.exports = {
    //entry points so webpack knows where to start dependencies
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },
      
    //bundle that code and output that bundled code to a folder
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
        
      },
      //directs webpack what to do. For example letting it know to use jQuery package
      plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: "static", // outputs to an HTML file called report.html in the dist folder
          })
      ],
      //the mode in which we want webpack to run. By default, webpack wants to run in production mode.
      mode: 'development'
};
