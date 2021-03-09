const path = require('path');
const webpack = require("webpack");
//The main configuration object within our file. within this object that tell webpack what to do.
module.exports = {
    //root of the bundle and the beginning of the dependency graph
    entry: './assets/js/script.js',
    //bundle that code and output that bundled code to a folder
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },
      //directs webpack what to do. For example letting it know to use jQuery package
      plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
      ],
      //the mode in which we want webpack to run. By default, webpack wants to run in production mode.
      mode: 'development'
};
