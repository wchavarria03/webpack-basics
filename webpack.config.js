var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.module.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      title: 'Webpack Basics'
    })
    // ,
    // new UglifyJsPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        exclude: [/node_modules/]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
        //use: ['style-loader', 'css-loader?sourceMap?minimize', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devtool: "source-map"
};