import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { routeWithSubRoutes, history } from 'wmkit';
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
  <Router history={history}>
    <Route component={Container} />
  </Router>
);

ReactDOM.render(<D2CWechat />, document.getElementById('root'));
