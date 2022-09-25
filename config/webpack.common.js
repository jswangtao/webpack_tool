/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 13:30:48
 * @Description: file content
 */
// webpack.common.js

const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
module.exports = {
  // 入口
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //以指定的模版生成指定名字的html
      template: "./index.html",
    }),
  ],
}; // 暂不添加配置
