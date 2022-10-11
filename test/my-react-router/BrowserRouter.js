/*
 * @Author: wangtao
 * @Date: 2022-10-10 23:15:35
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-11 18:47:27
 * @Description: file content
 */
/*
 * @Author: wangtao
 * @Date: 2022-10-10 23:15:35
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-10 23:47:30
 * @Description: file content
 */
export default class HistoryRouter {
  constructor(routeArr = []) {
    // 管理页面的回调
    this.routers = {};
    routeArr.forEach((item) => this.register(item));
    this.listenPopState();
  }
  // 注册
  register(item) {
    const { path, content } = item;
    this.routers[path] =
      typeof content === "function" ? content : function () {};
  }
  // 监听popstate事件，点击浏览器的前进后退按钮触发
  listenPopState() {
    window.addEventListener(
      "popstate",
      (e) => {
        console.log("🚀🚀🚀wimi======>>>listenPopState");
        let state = e.state || {},
          path = state.path || "";
        this.load(path);
      },
      false
    );
  }
  load(path) {
    let handler = this.routers[path];
    // 执行注册的回调函数
    try {
      handler.apply(this);
    } catch (e) {
      console.error(e);
    }
  }

  // 全局监听a标签的点击事件
  listenALink() {
    window.addEventListener(
      "click",
      (e) => {
        let dom = e.target;
        if (dom.tagName.toUpperCase() === "A" && dom.getAttribute("href")) {
          e.preventDefault();
          // 阻止原生事件
          this.push(dom.getAttribute("href"));
        }
      },
      false
    );
  }

  // 跳转到path
  push(path) {
    history.pushState({ path }, null, path);
    this.load(path);
    // 需要手动加载页面回调
  }
  // 替换为 path
  replace(path) {
    history.replaceState({ path }, null, path);
    this.load(path);
  }
}
