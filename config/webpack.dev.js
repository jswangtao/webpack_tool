const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html文件的插件

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 以指定的模版生成指定名字的html
      template: path.join(__dirname, '../index.html'),
      env: true,
    }),
    new webpack.DefinePlugin({
      // 定义全局常量
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
    }),
    new FriendlyErrorsWebpackPlugin(), // 优化构建日志
  ],
  devServer: {
    contentBase: '../public', // 默认服务于根目录下的index.html(可修改路径), 热加载是给开发人员使用的，它会开启服务器，将本地资源打包，监控到服务器中，给本地打包资源无关
    // open: true, // 自动打开浏览器
    port: 8088,
    host: '0.0.0.0',
    quiet: true, // 优化日志
    disableHostCheck: true, // 不加这两个刷新会404
    historyApiFallback: true, // 不加这两个刷新会404
  },
};

module.exports = merge(baseConfig, devConfig);
