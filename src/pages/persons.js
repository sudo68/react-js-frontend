import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Persons = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		const fetchPersons = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/person"
				);
				setPersons(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPersons();
	}, []);

	const handleDelete = async (event, personId) => {
		event.preventDefault();
		try {
			const response = await axios.delete(
				`http://localhost:8000/api/person/${personId}`
			);
			alert(response.data.message);
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container mt-4 d-flex flex-row">
			<h1>All Persons page</h1>
			{!persons ? (
				persons.map((person) => {
					return (
						<div
							key={person.id}
							className="card p-3"
							style={{ width: 500 }}
						>
							<p>Name: {person.name}</p>
							<p>Email Address: {person.email_address}</p>
							<p>Address: {person.address}</p>
							<Link
								to={`/person/${person.id}`}
								className="btn btn-success"
							>
								View Details
							</Link>
							<br />
							<Link
								to={`/person/edit/${person.id}`}
								className="btn btn-primary"
							>
								Edit
							</Link>
							<br />
							<button
								onClick={(ev) => handleDelete(ev, person.id)}
								className="btn btn-danger"
							>
								Delete
							</button>
							<br />
						</div>
					);
				})
			) : (
				<h1 className="text-secondary">No Persons to display</h1>
			)}
		</div>
	);
};
export default Persons;
