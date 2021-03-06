const path = require('path');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");



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
      module: {
        //identifes the type of files to pre-process using the test property to find a regular expression
        //trying to process any image file with the file extension of .jpg
        rules: [
          {
            test: /\.jpg$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name (file) {
                    return "[path] [name].[ext]"
                  },
                  publicPath: function(url) {
                    return url.replace("../", "/assets/")
                  }
                }
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          }
        ]
      },
      //directs webpack what to do. For example letting it know to use jQuery package
      plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: "static", // outputs to an HTML file called report.html in the dist folder
          }),
          new WebpackPwaManifest({
            name: "Food Event",
            short_name: "Foodies",
            description: "An app that allows you to view upcoming food events.",
            start_url: "../index.html",
            background_color: "#01579b",
            theme_color: "#ffffff",
            fingerprints: false,
            inject: false,
            icons: [{
              src: path.resolve("./assets/img/icons/icon-512x512.png"),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join("assets", "icons")
            }]
          })
      ],
      //the mode in which we want webpack to run. By default, webpack wants to run in production mode.
      mode: 'development'
};
