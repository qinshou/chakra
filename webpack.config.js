const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

const baseConfig = {
  entry: {
    app: './src/index.js',
    background: './src/background.js'
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx']
  },

  module: {},

  plugins: []
}

const prodConfig = {
  bail: true,
  devtool: 'source-map',
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          compact: true
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: require.resolve('style-loader'),
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    minimize: true,
                    sourceMap: true
                  }
                }
              ]
            }
          )
        )
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false
      },
      output: {
        comments: false,
        ascii_only: true
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css'
    })
  ]
}

const devConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'utilities', 'vendor')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader')
          }
        ]
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'components')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000
  }
}

module.exports = Object.assign({}, baseConfig, isProd ? prodConfig : devConfig)
