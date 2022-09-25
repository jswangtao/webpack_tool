/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 17:18:29
 * @Description: file content
 */
// webpack.common.js
const paths = require("./paths");
const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ctx = {
  isEnvDevelopment: process.env.NODE_ENV === "development",
  isEnvProduction: process.env.NODE_ENV === "production",
};

const { isEnvDevelopment, isEnvProduction } = ctx;

module.exports = {
  // 入口
  entry: {
    index: "./src/index.tsx",
  },
  // 输出
  output: {
    // 仅在生产环境添加 hash
    filename: ctx.isEnvProduction
      ? "[name].[contenthash].bundle.js"
      : "[name].bundle.js",
    path: paths.appDist,
    // 编译前清除目录
    clean: true,
    // publicPath: ctx.isEnvProduction ? 'https://xxx.com' : '', 关闭该 CDN 配置，因为示例项目，无 CDN 服务。
  },
  resolve: {
    alias: {
      "@": paths.appSrc,
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", paths.appSrc],
    // symlinks: false, //如果项目不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false，减少解析工作量。
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //以指定的模版生成指定名字的html
      template: "./index.html",
    }),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: paths.appSrc,
        type: "asset/resource",
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: paths.appSrc,
        type: "asset/resource",
      },
      {
        test: /\.module\.(scss|sass)$/,
        include: paths.appSrc,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          isEnvProduction && MiniCssExtractPlugin.loader, // 仅生产环境
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: "css-loader",
            options: {
              // Enable CSS Modules features
              modules: true,
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          // 将 PostCSS 编译成 CSS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // postcss-preset-env 包含 autoprefixer
                    "postcss-preset-env",
                  ],
                ],
              },
            },
          },
          // 将 Sass 编译成 CSS
          "sass-loader",
        ].filter(Boolean),
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2015",
            },
          },
        ],
      },
    ],
  },
  cache: {
    type: "filesystem", // 使用文件缓存
  },
}; // 暂不添加配置
