/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:28:21
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-09-25 23:02:36
 * @Description: file content
 */
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/test");
        }}
      >
        首页wangtao123
      </button>
    </div>
  );
}
