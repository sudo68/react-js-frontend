import { useState } from "react";

const App = (props) => {
	// useState() hooks
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Wick");
	const [age, setAge] = useState(25);
	const [gender, setGender] = useState("Male");

	const changeState = (event) => {
		event.preventDefault();
		setFirstName("Maya");
		setLastName("Angelou");
		setAge(30);
		setGender("Female");
	};

	return (
		<>
			<h1>
				My name is {firstName} {lastName} and i am {age} years old
			</h1>
			<h2>I am a {gender} human being.</h2>
			<p>Car: {props.car}</p>
			<p>Model: {props.model}</p>
			<button onClick={changeState}>Update state</button>
		</>
	);
};
export default App;
