import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../scenes/home';
import Transfers from '../scenes/transfers';
import Transactions from '../scenes/transactions';
import Contact from '../scenes/contact';

// this exports the AppRoutes variable using React-Router <Switch> component, which renders first child <Route> that matches location.
export const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/transfers" component={Transfers} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
