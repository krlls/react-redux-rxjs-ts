const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
        rules: [
          {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }},
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 3000
  },
    plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
