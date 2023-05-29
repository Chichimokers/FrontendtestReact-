const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx'],
    modules: ['node_modules', './src/components']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};