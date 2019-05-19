import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
// import paths from './paths';
import Home from './scenes/Home';
import Transfers from './scenes/Transfers';
import Transactions from './scenes/Transactions';
import Contact from './scenes/Contact';

class App extends React.Component {
  // definte the state for count
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/transfers" component={Transfers} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
