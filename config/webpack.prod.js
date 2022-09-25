/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 12:54:16
 * @Description: file content
 */
// webpack.prod.js

const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");

module.exports = merge(common, {
  mode: "production",
  // 输出
  output: {
    // bundle 文件名称
    filename: "[name].[contenthash].bundle.js",

    // bundle 文件路径
    path: resolveApp("dist"),

    // 编译前清除目录
    clean: true,
  },
}); // 暂不添加配置
