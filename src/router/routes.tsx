/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:27:20
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 23:09:26
 * @Description: file content
 */
import React, { lazy } from "react";

const routers = [
  {
    path: "/",
    title: "首页",
    asyncComponent: lazy(() => import("../pages/main")),
  },
  {
    path: "/test",
    title: "测试",
    asyncComponent: lazy(() => import("../pages/test")),
  },
];

export default routers;
