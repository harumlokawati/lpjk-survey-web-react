const path = require('path')
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './app/index.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      path.resolve(__dirname, './app')
    ],
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    port: 3000,
    publicPath: 'http://localhost:3000/build/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.ProvidePlugin({
      axios: 'axios',
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ]
}
