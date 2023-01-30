const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    module1:  './src/module1.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[contenthash].js',
  },
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }), 
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      minSize: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendor.[contenthash].js',
        },
        common: {
          test:/[\\\/]module3.js$/i,
          filename: 'common.[contenthash].js'
        }
      }
    },
  }
};