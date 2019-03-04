const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./src/server/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build"
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
           "sass-loader"
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
      )
    ],
  externals: [webpackNodeExternals()]
}
