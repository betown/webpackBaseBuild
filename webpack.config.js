const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: './src/',
          from: "**/*.html",
          force: true
        }
      ],
    }),
    new BrowserSyncPlugin({
      files: ['*.js', '*.html'],
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080'
    }),
    new CopyPlugin({
      patterns: [
        {from: "src/assets", to:"assets"}
      ]
    })
  ]
}