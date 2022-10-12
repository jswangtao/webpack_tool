/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-12 16:18:24
 * @Description: file content
 */
// webpack.common.js

const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const path = require("path");
const LearnPlugin = require("../test/learn-plugin/index");
module.exports = {
  // 入口
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: "index.html", //以指定的模版生成指定名字的html
    //   template: "./index.html",
    // }),
    new LearnPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve("./test/learn-loader/index.js"),
          },
        ],
      },
    ],
  },
}; // 暂不添加配置
