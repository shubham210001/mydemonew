// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MIN_CHUNK_SIZE = 20 * 1024; // 20kb
const MAX_CHUNK_SIZE = 1000 * 1024; // 1000kb

module.exports = {
  mode: "production", // or 'production'
  entry: "./src/index.js",
  optimization: {
    chunkIds: "named",
    splitChunks: {
      minSize: MIN_CHUNK_SIZE,
      maxSize: MAX_CHUNK_SIZE,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add other loaders for CSS, images, etc.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./public",
    compress: true,
    port: 3021,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allows importing without specifying extensions
  },
};
