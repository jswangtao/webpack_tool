/*
 * @Author: wangtao
 * @Date: 2022-09-25 17:28:21
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-11 01:37:28
 * @Description: file content
 */
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // navigate("/test");
          setShow(!show);
        }}
      >
        首页wangtao123
      </button>
      {show && <Parent />}
    </div>
  );
}

interface IPropsParent {}
interface IStateParent {
  count: number;
}

class Parent extends Component<IPropsParent, IStateParent> {
  constructor(props: IPropsParent) {
    super(props);
    console.log("🚀🚀🚀wimi======>>>Parent  constructor");
    this.state = {
      count: 1,
    };
  }

  static getDerivedStateFromProps(): any {
    console.log("🚀🚀🚀wimi======>>>Parent  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("🚀🚀🚀wimi======>>>Parent  componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("🚀🚀🚀wimi======>>>Parent  shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>
  ): any {
    console.log(
      "🚀🚀🚀wimi======>>>Parent  getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("🚀🚀🚀wimi======>>>Parent  componentDidUpdate");
  }

  onChange = (count: number) => {
    this.setState({ count });
  };

  render() {
    console.log("🚀🚀🚀wimi======>>>Parent  render");
    return (
      <div>
        Parent
        <Child count={this.state.count} onChange={this.onChange} />
      </div>
    );
  }

  componentWillUnmount(): void {
    console.log("🚀🚀🚀wimi======>>>Parent  componentWillUnmount");
  }
}

interface IChildProps {
  count: number;
  onChange: Function;
}

class Child extends Component<IChildProps> {
  constructor(props: IChildProps) {
    super(props);
    console.log("🚀🚀🚀wimi======>>>Child  constructor");
    this.state = {
      count: 1,
    };
  }

  static getDerivedStateFromProps(): any {
    console.log("🚀🚀🚀wimi======>>>Child  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("🚀🚀🚀wimi======>>>Child  componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("🚀🚀🚀wimi======>>>Child  shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>
  ): any {
    console.log(
      "🚀🚀🚀wimi======>>>Child  getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("🚀🚀🚀wimi======>>>Child  componentDidUpdate");
  }

  render() {
    console.log("🚀🚀🚀wimi======>>>Child  render");
    return (
      <div onClick={() => this.props.onChange(this.props.count + 1)}>Child</div>
    );
  }

  componentWillUnmount(): void {
    console.log("🚀🚀🚀wimi======>>>Child  componentWillUnmount");
  }
}
