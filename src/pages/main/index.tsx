/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:28:21
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-11 21:16:58
 * @Description: file content
 */
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "../../../test/context/createContext";
const CountContext = createContext(1);
export default function Main() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  return (
    <CountContext.Provider value={count}>
      <div>
        <button
          onClick={() => {
            // navigate("/test");
            setCount(count + 1);
          }}
        >
          首页
        </button>
        <Child01 />
      </div>
    </CountContext.Provider>
  );
}

function Child01() {
  return (
    <div>
      Child01
      <Child02 />
    </div>
  );
}

function Child02() {
  return (
    <CountContext.Consumer>
      {(value: number) => {
        return <div>{value}</div>;
      }}
    </CountContext.Consumer>
  );
}
