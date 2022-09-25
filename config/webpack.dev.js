// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");

module.exports = merge(common, {
  mode: "development",
  // 开发工具，开启 source map，编译调试
  devtool: "eval-cheap-module-source-map",
  // 输出
  output: {
    // bundle 文件名称
    filename: "[name].bundle.js",

    // bundle 文件路径
    path: resolveApp("dist"),

    // 编译前清除目录
    clean: true,
  },
  devServer: {
    static: { directory: path.join(__dirname, "/") },
  },
}); // 暂不添加配置
