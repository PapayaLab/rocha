const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../source/server/server.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal', 'react'],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
