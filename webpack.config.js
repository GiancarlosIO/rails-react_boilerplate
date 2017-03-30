var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map', //just do inline source maps instead of the default
  entry: [
    path.resolve(__dirname, 'vendor/assets/javascripts/src') + '/app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'vendor/assets/javascripts/dist') + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'vendor/assets/javascripts/src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}
