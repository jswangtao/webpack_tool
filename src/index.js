import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { routeWithSubRoutes, history } from 'wmkit';
import { Provider } from 'react-redux';
import store from './store';
import routers from './router';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    const routes = routeWithSubRoutes(routers);
    return (
      <div>
        {routes}
      </div>
    );
  }
}

const D2CWechat = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Container} />
    </Router>
  </Provider>
);

ReactDOM.render(<D2CWechat />, document.getElementById('root'));
