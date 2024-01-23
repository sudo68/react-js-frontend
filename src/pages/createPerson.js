import axios from "axios";
import { useState } from "react";

const CreatePerson = () => {
	const [name, setName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState();
	const [address, setAddress] = useState("");
	const [gender, setGender] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [bloodGroup, setBloodGroup] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const dataObj = {
			name: name,
			dateOfBirth: dateOfBirth,
			address: address,
			gender: gender,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			bloodGroup: bloodGroup,
		};

		try {
			const response = await axios.post(
				"http://localhost:8000/api/person",
				dataObj
			);
			alert(response.data.message);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container mt-3">
			<h3 className="text-center">Create Person page</h3>
			<div
				style={{
					paddingLeft: 90,
					paddingRight: 90,
					paddingTop: 20,
					paddingBottom: 20,
				}}
			>
				<form method="POST" onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						className="form-control"
						value={name}
						onChange={(ev) => setName(ev.target.value)}
						placeholder="Enter your name"
					/>
					<br />

					<label htmlFor="dateOfBirth">Date of Birth</label>
					<input
						type="date"
						name="dateOfBirth"
						className="form-control"
						id="dateOfBirth"
						onChange={(ev) => setDateOfBirth(ev.target.value)}
					/>
					<br />

					<label htmlFor="address">Address</label>
					<textarea
						name="address"
						id="address"
						className="form-control"
						rows="5"
						value={address}
						onChange={(ev) => setAddress(ev.target.value)}
						placeholder="Enter your address"
					></textarea>
					<br />

					<label htmlFor="gender">Gender</label>
					<select
						name="gender"
						id="gender"
						className="form-control"
						value={gender}
						onChange={(ev) => setGender(ev.target.value)}
					>
						<option defaultValue={true}>Select an option</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="others">Others</option>
					</select>
					<br />

					<label htmlFor="emailAddress">Email address</label>
					<input
						type="email"
						name="emailAddress"
						id="emailAddress"
						className="form-control"
						value={emailAddress}
						onChange={(ev) => setEmailAddress(ev.target.value)}
						placeholder="Enter your email address"
					/>
					<br />

					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="tel"
						name="phoneNumber"
						id="phoneNumber"
						className="form-control"
						value={phoneNumber}
						onChange={(ev) => setPhoneNumber(ev.target.value)}
						placeholder="Enter your phone number"
					/>
					<br />

					<label htmlFor="bloodGroup">Blood Group</label>
					<input
						type="text"
						name="bloodGroup"
						id="bloodGroup"
						className="form-control"
						value={bloodGroup}
						onChange={(ev) => setBloodGroup(ev.target.value)}
						placeholder="Enter your blood group"
					/>
					<br />

					<button type="submit" className="btn btn-warning">
						Create Person
					</button>
				</form>
			</div>
		</div>
	);
};
export default CreatePerson;
