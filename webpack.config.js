const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: ["./src"],
    publicPath: "/",
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.devserver.html",
    }),
  ],
};
