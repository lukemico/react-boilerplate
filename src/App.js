import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  // definte the state for count
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello world...</h1>
      </div>
    );
  }
}

export default hot(module)(App);
