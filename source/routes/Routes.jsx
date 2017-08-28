import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './home/Home';
import Login from './login/Login';


function Routes() {
  return (
    <main role="application">
      <Switch>
        {/* Login */}
        <Route
          path="/"
          exact
          component={Login}
        />
        {/* Error 404 */}
        <Route component={Home} />
      </Switch>
    </main>
  );
}

export default Routes;
