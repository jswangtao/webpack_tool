const path = require("path"); //node内置的模块，用来设置路径。

const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const CleanWebpackPlugin = require("clean-webpack-plugin"); //清除之前打包的文件

module.exports = {
  //入口   此为单页面应用（SPA）,多页面应用（MPA）查 https://www.webpackjs.com/guides/output-management/#%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87
  entry: "./src/js/entry.js",
  //出口
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist") //输出文件路径配置
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //new HtmlWebpackPlugin(), //以默认的模版生成默认的index.html
    new HtmlWebpackPlugin({
      filename: "index.html", //以指定的模版生成指定名字的html
      template: "./index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ],
  devServer: {
    contentBase: "./dist" //默认服务于根目录下的index.html(可修改路径), 热加载是给开发人员使用的，它会开启服务器，将本地资源打包，监控到服务器中，给本地打包资源无关
  }
};
