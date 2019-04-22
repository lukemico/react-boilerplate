import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
	// definte the state for count
	state = {
		count: 0
	};

	// set function to increment the count button
	increment = () => {
		this.setState(state => ({ count: state.count + 1 }));
	};

	// set function to decrement the count button
	decrement = () => {
		this.setState(state => ({ count: state.count - 1 }));
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>Hello world...</h1>
				<h2 className={count > 10 ? "warning" : null}>
					Count: {this.state.count}
				</h2>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

export default hot(module)(App);
