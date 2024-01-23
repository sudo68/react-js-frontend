import React from "react";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "John",
			lastName: "Wick",
			age: 24,
			gender: "Male",
		};
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			firstName: "Maya",
			lastName: "Angelou",
			age: 25,
			gender: "Female",
			address: "california",
		});
	};

	render() {
		return (
			<>
				<h1>
					My name is {this.state.firstName} {this.state.lastName}
				</h1>
				<h2>
					My age is {this.state.age} and i am a {this.state.gender}
				</h2>
				<p>{this.state.address}</p>
				<p>This is my second element;</p>
				<p>Car: {this.props.car}</p>
				<p>Model: {this.props.model}</p>
				<button onClick={this.handleChange}>Change state</button>
			</>
		);
	}
}
