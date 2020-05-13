const path = require("path");
const merge = require('webpack-merge');

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
})
