const path = require("path");

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
        exclude: "/node_modules/",
        options: {
          plugins: ['syntax-dynamic-import']
        }
      }
    ]
  }
}
