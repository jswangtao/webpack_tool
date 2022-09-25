/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:28:21
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 23:02:40
 * @Description: file content
 */
import React, { Component } from "react";
// import history from "../../router/history";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        测试wangtao345
      </button>
    </div>
  );
}
