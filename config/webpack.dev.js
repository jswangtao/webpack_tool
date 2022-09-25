/*
 * @Author: wangtao
 * @Date: 2022-09-25 14:12:40
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 17:20:13
 * @Description: file content
 */
// webpack.dev.js
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const smp = new SpeedMeasurePlugin();

// 是否分析各工具的构建耗时(不能与ReactRefreshWebpackPlugin同时使用)
const isNeedSpeed = false;

const config = merge(common, {
  mode: "development",
  // 开发工具，开启 source map，编译调试
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "/") },
    hot: true, // 热更新
    host: "127.0.0.1",
    port: "3000",
  },
}); // 暂不添加配置

module.exports = isNeedSpeed ? smp.wrap(config) : config;
