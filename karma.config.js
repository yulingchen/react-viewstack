var webpack = require( 'karma-webpack' );

module.exports = function ( config ) {
  config.set({
    colors: true,
    logLevel: config.LOG_INFO,
    frameworks: [ 'mocha', 'chai' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: [
      webpack,
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/*_spec.js': [ 'webpack' ],
      'src/**/*.js': [ 'webpack' ]
    },
    reporters: [ 'coverage', 'mocha' ],
    coverageReporter: {
      dir: 'dist/reports/coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(dist|node_modules)/,
          loader: 'babel'
        },
        {
          test: /\.styl$/,
          loaders: [
            'style',
            'css',
            'postcss',
            'stylus'
          ]
        }],
        preLoaders: [{
          test: /\.(js|jsx)$/, exclude: /(node_modules|dist|tests)/,
          loader: 'isparta'
        }]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
