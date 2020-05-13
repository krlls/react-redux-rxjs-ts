const path = require("path");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.main.js');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 3000
  },
})
