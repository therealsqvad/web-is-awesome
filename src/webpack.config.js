var path = require('path');

module.exports = {
  entry: './typeracer/typeracer.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/typeracer', 'dist')
  }
};