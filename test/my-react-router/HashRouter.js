/*
 * @Author: wangtao
 * @Date: 2022-10-10 00:58:39
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-10 23:13:01
 * @Description: file content
 */
import React from "react";

const Context = React.createContext();

class HashRouter {
  constructor() {
    super();
    this.state = {
      location: {
        pathName: window.location.hash.slice(1) || "/",
      },
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {});
  }
}
