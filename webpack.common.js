const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: [ 'babel-polyfill', './src/index.js' ],
  output: {
    path: path.resolve(path.join(__dirname, 'public/'), 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: 'file-loader?name=fonts/[name].[ext]',
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        }),
        test: /\.scss$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 500 }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [ 'source-map-loader' ],
        enforce: 'pre',
        exclude: [ /node_modules/ ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([ './public/build' ]),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}

module.exports = config
