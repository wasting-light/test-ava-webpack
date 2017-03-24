const fs = require('fs')
const externals = require('webpack-node-externals')
const { join } =  require('path')

module.exports = {
  entry: './webpack.import',
  output: {
    path: join(__dirname, '__tests__'),
    filename: '[name].js'
  },
  target: 'node',
  externals: externals(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}
