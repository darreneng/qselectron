var webpack = require('webpack');

module.exports = {
  //context: __dirname + '/src/',
  target: 'electron',

  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

/*
  debug: true,
  devtool: '#eval-source-map',
*/

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extension: ['', '.js', '.json']
  },

  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'

      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }
    ]
  }
};
