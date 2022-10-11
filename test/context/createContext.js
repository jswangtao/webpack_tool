/*
 * @Author: wangtao
 * @Date: 2022-10-11 18:31:10
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-11 21:15:45
 * @Description: file content
 */
import React from "react";
export function createContext(defaultValue) {
  class Provider extends React.Component {
    static value = defaultValue;
    constructor(props) {
      super(props);
      Provider.value = props.value;
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      Provider.value = nextProps.value;
      return prevState;
    }
    render() {
      return this.props.children;
    }
  }

  class Consumer extends React.Component {
    render() {
      return this.props.children(Provider.value);
    }
  }

  return { Provider, Consumer };
}
