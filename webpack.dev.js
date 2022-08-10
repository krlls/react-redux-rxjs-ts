const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.main.js');

module.exports = merge(baseConfig, {
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
  ]
})
