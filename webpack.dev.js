// webpack.dev.js

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
  },
  devtool: 'inline-source-map',
});
