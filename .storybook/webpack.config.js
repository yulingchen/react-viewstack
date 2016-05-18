/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(scss|sass)$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss?sourceMap',
          'sass?sourceMap'
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
