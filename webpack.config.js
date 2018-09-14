const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '/public')
  },
  mode: 'development',
  // devtool: 'source-map',
  devServer: {
    publicPath: 'http://localhost:8080/',
    historyApiFallback: true,
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      api: path.resolve(__dirname, 'src/api/')
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: ["transform-object-rest-spread",
            "transform-class-properties"]
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["src/constants"]
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ]
                }),
                require('postcss-modules-values')
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
          },
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'main',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
}