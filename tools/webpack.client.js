const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../source/client/client.jsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: '> 5%',
                },
              }],
              'react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
