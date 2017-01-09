var webpack = require('webpack');
var path = require('path');

module.exports = {
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
  }
}
