import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from '/home';
import { Transfers } from '/transfers';
import { Transactions } from '/transactions';
import { Contact } from '/contact';

// this exports the AppRoutes variable using React-Router <Switch> component, which renders first child <Route> that matches location.
export const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/transfers" component={Transfers} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
