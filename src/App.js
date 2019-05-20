import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './App';

class App extends React.Component {
  // definte the state for count
  state = {
    count: 0
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
