const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

const baseConfig = require('./webpack.main.js');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    compress: true,
    open: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new DashboardPlugin(),
  ]
})
