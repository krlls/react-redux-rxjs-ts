const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATH_SRC = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
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
      { test: /\.(png|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
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
            options: {
              sourceMap: true,
            },
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    modules: [].concat(PATH_SRC, 'node_modules'),
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 3000
  },
    plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      chunkFilename: '[id].css',
    }),
]
};
