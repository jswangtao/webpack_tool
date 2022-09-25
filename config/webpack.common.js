/*
 * @Author: wangtao
 * @Date: 2022-09-24 21:53:31
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 15:03:40
 * @Description: file content
 */
// webpack.common.js

const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const paths = require("./paths");

// 小型项目无需 thread-loader，因此注释了
// const threadLoader = require('thread-loader');

// threadLoader.warmup(
//   {
//     // 池选项，例如传递给 loader 选项
//     // 必须匹配 loader 选项才能启动正确的池
//   },
//   [
//     'sass-loader',
//   ]
// );

module.exports = {
  // 入口
  entry: {
    index: "./src/index.tsx",
  },
  resolve: {
    alias: {
      "@": paths.appSrc,
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", paths.appSrc],
    symlinks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //以指定的模版生成指定名字的html
      template: "./index.html",
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
          // isEnvProduction && MiniCssExtractPlugin.loader, // 仅生产环境
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
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workerParallelJobs: 2
          //   }
          // },
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
}; // 暂不添加配置
