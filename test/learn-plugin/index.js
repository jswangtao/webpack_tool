/*
 * @Author: wangtao
 * @Date: 2022-10-12 15:29:04
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-12 18:26:23
 * @Description: file content
 */
// function LearnPlugin(options) {}
// LearnPlugin.prototype.apply = function (compiler) {
//   // 所有文件资源被loader处理过后，触发这个事件
//   compiler.hooks.emit.tap("LearnPlugin", function (compilation) {
//     console.log("🚀🚀🚀wimi======>>>LearnPlugin");
//     // 获取打包后的 js 文件名
//     const filename = compiler.options.output.filename;
//     // 生成一个 index.html 并引入打包后的 js 文件
//     const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="${filename}"></script>
// </head>
// <body>

// </body>
// </html>`;
//     // 所有处理后的资源都放在 compilation.assets 中
//     // 添加一个 index.html 文件
//     compilation.assets["index.html"] = {
//       source: function () {
//         return html;
//       },
//       size: function () {
//         return html.length;
//       },
//     };
//   });

//   // compiler.hooks.emit.tapAsync(
//   //   "LearnPlugin",
//   //   function (compilation, callback) {
//   //     setTimeout(() => {
//   //       console.log("🚀🚀🚀wimi======>>>testEmitAndAfterEmit222");
//   //       callback();
//   //     }, 3000);
//   //     // 功能完成后调用webpack提供的回调
//   //   }
//   // );
// };

// module.exports = LearnPlugin;

class LearnPlugin {
  constructor(options) {}
  apply(compiler) {
    compiler.hooks.emit.tap("LearnPlugin", (compilation) => {
      // 获取打包后的js文件名
      const filename = compiler.options.output.filename;
      console.log("🚀🚀🚀wimi======>>>compiler", filename);
      // 生成一个 index.html 并引入打包后的 js 文件
      const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <script src="${filename}"></script>
      </head>
      <body>

      </body>
      </html>`;
      compilation.assets["index.html"] = {
        source: function () {
          return html;
        },
        size: function () {
          return html.length;
        },
      };
    });
  }
}
module.exports = LearnPlugin;
