  module.exports = {

  entry: './src/app.js',
  //1
  // entry: ['./src/app.js', './src/index.js'],

  //2
  // entry: {
  //   app: './src/app.js',
  //   index: './src/index.js'
  // },

  //3
  // context: __dirname + '/src',
  // entry: {
  //   app: './app.js',
  //   index: './index.js'
  // },
  output: {
    path: './dist',
    filename: 'bundle.js'

    //1
    //filename: '[name].bundle.js'
  }
};