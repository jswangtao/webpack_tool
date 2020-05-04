const path = require('path') //node内置的模块，用来设置路径。
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') //清除之前打包的文件

module.exports = {
  //入口   此为单页面应用（SPA）,多页面应用（MPA）查 https://www.webpackjs.com/guides/output-management/#%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87
  entry: './src/js/entry.js',
  //出口
  output: {
    filename: '[name]_[chunkhash:8].js', // 输出文件名，配置文件指纹chunkhash
    path: path.resolve(__dirname, 'dist'), //输出文件路径配置
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader', //部分ES6的语法不能编译，比如import
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 version', '>1%', 'ios 7'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash:8].[ext]', //配置文件指纹hash
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //new HtmlWebpackPlugin(), //以默认的模版生成默认的index.html
    new HtmlWebpackPlugin({
      filename: 'index.html', //以指定的模版生成指定名字的html
      template: './index.html',
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      //定义全局常量
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     minSize: 0,
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'all',
  //         minChunks: 2,
  //       },
  //     },
  //   },
  // },
}
