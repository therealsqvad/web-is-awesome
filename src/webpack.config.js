const path = require('path');

module.exports = {
  entry: './typeracer/typeracer.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/typeracer`, 'dist'),
    sourceMapFilename: 'main.map'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(`${__dirname}`, ''),
    port: 9000
  }
};
