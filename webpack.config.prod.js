const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'set-state-async.js',
    library: 'set-state-async',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
