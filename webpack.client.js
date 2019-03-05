const path = require("path");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  target: "web",
  // entry: "./src/client/index.js",
  entry: {
    bundle: "./src/client/index.js"
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build/public")
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(?:css|scss)$/,
        use: [
          ExtractCssChunks.loader,
          "css-loader",
          { 
            loader: "sass-loader",
            options:{
              sourceMapEmbed: true
            }
          }
         ]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        // chunkFilename: "[id].css",
        // hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
        // orderWarning: true, // Disable to remove warnings about conflicting order between imports
        // reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
        // cssModules: true // if you use cssModules, this can help.
      }
    ),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
    })
  ]
}
