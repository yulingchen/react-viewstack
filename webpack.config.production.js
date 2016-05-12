/* eslint strict: 0 */
'use strict';

const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const baseConfig = require( './webpack.config.base' );

const config = Object.create( baseConfig );

config.devtool = '#source-map';

config.entry = './src/ViewStack';

config.output.publicPath = '../dist/';

config.module.loaders.push({
  test: /\.css(\?\S*)?$/,
  loaders: [
    'style',
    'css'
  ]
  // loader: ExtractTextPlugin.extract(
  //   'style-loader',
  //   'css-loader'
  //   // 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  // )
});

config.module.loaders.push({
  test: /\.styl$/,
  loaders: [
    'style',
    'css',
    'postcss',
    'stylus'
  ]
  // loader: ExtractTextPlugin.extract(
  //   'style-loader',
  //   'css-loader',
  //   // 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  //   'postcss-loader',
  //   'stylus-loader'
  // )
});

config.postcss = [ require( 'autoprefixer' )() ];

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      NODE_ENV: JSON.stringify( 'production' )
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new ExtractTextPlugin( 'ViewStack.css', { allChunks: true })
);

module.exports = config;
