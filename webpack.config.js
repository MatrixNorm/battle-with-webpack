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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
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
