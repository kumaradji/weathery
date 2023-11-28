// webpack.dev.js

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
  },
  devtool: 'inline-source-map',
});
