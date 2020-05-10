import React from 'react';
import { Switch } from 'react-router-dom';
import AsyncRoute from './async-router';


export default function routeWithSubRoutes(routes) {
  return (
    <Switch>
      {
        routes.map((route, index) => (
          <AsyncRoute
            key={index}
            path={route.path}
            title={route.title}
            exact={route.exact}
            strict={route.strict}
            load={route.asyncComponent}
            subRoutes={route.routes}
            hasBottom={route.hasBottom}
          />
        ))
      }
    </Switch>
  );
}
