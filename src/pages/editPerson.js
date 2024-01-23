import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditPerson = () => {
	const [person, setPerson] = useState({});
	const { personId } = useParams();

	useEffect(() => {
		const fetchPerson = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/person/${personId}`
				);
				const retrievedPerson = response.data[0];
				console.log(retrievedPerson);
				setPerson(retrievedPerson);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPerson();
	}, [personId]);

	const handleChange = (event) => {
		const inputName = event.target.name;
		const { value } = event.target;
		console.log(`Changing ${inputName} to ${value}`);
		setPerson((prevState) => ({
			...prevState,
			[inputName]: value,
		}));
	};

	const handleEdit = async (event) => {
		event.preventDefault();

		const dataObj = {
			name: person.name,
			dateOfBirth: person.date_of_birth,
			address: person.address,
			gender: person.gender,
			emailAddress: person.email_address,
			phoneNumber: person.phone_number,
			bloodGroup: person.blood_group,
		};

		try {
			const response = await axios.put(
				`http://localhost:8000/api/person/${personId}`,
				dataObj
			);
			alert(response.data.message);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="container mt-3">
			<h4 className="text-center">Edit Person page</h4>
			<div
				style={{
					paddingLeft: 90,
					paddingRight: 90,
					paddingTop: 20,
					paddingBottom: 20,
				}}
			>
				<form method="PUT" onSubmit={handleEdit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						className="form-control"
						defaultValue={person.name}
						onChange={handleChange}
						placeholder="Enter your name"
					/>
					<br />

					<label htmlFor="date_of_birth">Date of Birth</label>
					<input
						type="date"
						name="date_of_birth"
						id="date_of_birth"
						value={
							person.date_of_birth
								? person.date_of_birth.split("T")[0]
								: ""
						}
						className="form-control"
						onChange={handleChange}
					/>
					<br />

					<label htmlFor="address">Address</label>
					<textarea
						name="address"
						id="address"
						rows="5"
						className="form-control"
						defaultValue={person.address}
						onChange={handleChange}
						placeholder="Enter your address"
					></textarea>
					<br />

					<label htmlFor="gender">Gender</label>
					<select
						name="gender"
						id="gender"
						className="form-control"
						value={person.gender}
						onChange={handleChange}
					>
						<option>Select an option</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="others">Others</option>
					</select>
					<br />

					<label htmlFor="email_address">Email address</label>
					<input
						type="email"
						name="email_address"
						id="email_address"
						className="form-control"
						defaultValue={person.email_address}
						onChange={handleChange}
						placeholder="Enter your email address"
					/>
					<br />

					<label htmlFor="phone_number">Phone Number</label>
					<input
						type="tel"
						name="phone_number"
						id="phone_number"
						className="form-control"
						defaultValue={person.phone_number}
						onChange={handleChange}
						placeholder="Enter your phone number"
					/>
					<br />

					<label htmlFor="blood_group">Blood Group</label>
					<input
						type="text"
						name="blood_group"
						id="blood_group"
						className="form-control"
						defaultValue={person.blood_group}
						onChange={handleChange}
						placeholder="Enter your blood group"
					/>
					<br />

					<button type="submit" className="btn btn-warning">
						Edit Person
					</button>
				</form>
			</div>
		</div>
	);
};
export default EditPerson;
