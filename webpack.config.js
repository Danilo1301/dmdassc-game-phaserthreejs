const path = require('path');

module.exports = {
  entry: './src/client/index.ts',
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
    extensions: [ '.ts', '.tsx', '.js' ],
    alias: {
      '@game': path.join(__dirname, 'src')
    }
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map',
  mode: 'development'
};