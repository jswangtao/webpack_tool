/*
 * @Author: wangtao
 * @Date: 2022-10-12 14:32:47
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-12 15:49:50
 * @Description: file content
 */
module.exports = function (source) {
  // 同步loader
  return source.replace(/var/g, "const");

  // // 异步loader
  // const callback = this.async();
  // // 由于有 3 秒延迟，所以打包时需要 3+ 秒的时间
  // setTimeout(() => {
  //   callback(null, `${source.replace(/var/g, "let")}`);
  // }, 3000);
};
