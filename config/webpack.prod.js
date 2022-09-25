/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 17:22:02
 * @Description: file content
 */
// webpack.prod.js

const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./paths");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    // 打包体积分析
    // new BundleAnalyzerPlugin(),
    // 提取 CSS
    new MiniCssExtractPlugin({
      filename: "[hash].[name].css",
    }),
  ],
  optimization: {
    runtimeChunk: true,
    moduleIds: "deterministic",
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      // new CssMinimizerPlugin({
      //   parallel: 4,
      // }),
      new TerserPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      // 重复打包问题
      cacheGroups: {
        vendors: {
          // node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          // name: 'vendors', 一定不要定义固定的name
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
  },
}); // 暂不添加配置
