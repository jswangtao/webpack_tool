import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routeWithSubRoutes } from 'wmkit';
// import routers from './router';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const routes = routeWithSubRoutes(routers);
    console.log('🚀🚀🚀wimi======>>>routeWithSubRoutes', routeWithSubRoutes);
    return (
      <div>
        {/* {routes} */}
      </div>
    );
  }
}

const D2CWechat = () => (
  <Router>
    <Route component={Container} />
  </Router>
);

ReactDOM.render(<D2CWechat />, document.getElementById('root'));
