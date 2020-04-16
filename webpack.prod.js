const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const PATH_SRC = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "index_bundle.js"
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, loader: 'awesome-typescript-loader',
        options: {configFileName: 'src/tsconfig.json'}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {test: /\.svg$/, use: ['@svgr/webpack'] },
      { test: /\.scss$/, use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[name]--[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    modules: [].concat(PATH_SRC, 'node_modules'),
  },
    plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
    }),
]
};
