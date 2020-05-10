import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AsyncRoute from './async-router';


export default function routeWithSubRoutes(routes, handlePathMatched) {
  return (
    <Switch>
      {
        routes.map((route, index) => {
          // dev check
          if (process.env.NODE_ENV !== 'production') {
            if (route.component === undefined && route.asyncComponent === undefined) {
              throw new Error(`${route.path} can not find component or asyncComponent`);
            }
          }

          if (route.component) {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                strict={route.strict}
                render={(props) => (<route.component {...props} subRoutes={route.routes} />)}
                handlePathMatched={handlePathMatched}
              />
            );
          }
          return (
            <AsyncRoute
              key={index}
              exact={route.exact}
              strict={route.strict}
              path={route.path}
              subRoutes={route.routes}
              load={route.asyncComponent}
              title={route.title}
              hasBottom={route.hasBottom}
              handlePathMatched={handlePathMatched}
              withoutLogin={route.withoutLogin}
              openAccess={route.openAccess}
            />
          );
        })
      }
    </Switch>
  );
}
