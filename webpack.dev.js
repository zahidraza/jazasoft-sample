var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
    alias: {
      'jazasoft': 'jazasoft/lib'
    }
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: "[name]--[local]--[hash:base64:8]"
          }
        },
        "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      }
    ]
  }
};