/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:33:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 23:08:11
 * @Description: file content
 */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./loading";

export default function asyncRouter(routes) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense fallback={<Loading />}>
              <route.asyncComponent />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
