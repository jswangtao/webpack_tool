/*
 * @Author: wangtao
 * @Date: 2022-09-25 14:46:14
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-11 18:49:13
 * @Description: file content
 */
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import routes from "./router/routes";
import asyncRouter from "./router/async-router";

const AppRoutes = () => {
  let container = asyncRouter(routes);
  return container;
};

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
