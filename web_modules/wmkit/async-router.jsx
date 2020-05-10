import React from 'react';
import { Route } from 'react-router-dom';
import Loading from './loading';

/**
 * 封装异步路由的解决方案
 * @param props 路由参数
 */
export default class AsyncRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      load,
      subRoutes,
      title,
      handlePathMatched,
      withoutLogin,
      openAccess,
      hasBottom,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => (
          <AsyncLoader
            {...props}
            load={load}
            subRoutes={subRoutes}
            title={title}
            handlePathMatched={handlePathMatched}
            hasBottom={hasBottom}
          />
        )}

      />
    );
  }
}


/**
 * 异步load模块组件
 */
class AsyncLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    const {
      load, title, hasBottom, match,
    } = this.props;
    const { handlePathMatched } = this.props;
    handlePathMatched({ path: match.path, hasBottom });

    load()
      .then((Component) => this.setState({
        Component: Component.default || Component,
      }))
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          console.trace(err);
        }
      });
    if (title) {
      document.title = title;
    }
  }

  render() {
    const { Component } = this.state;
    return Component ? <Component {...this.props} /> : <Loading />;
  }
}
