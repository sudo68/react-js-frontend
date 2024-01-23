import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
	const [person, setPerson] = useState({});
	const { personId } = useParams();

	useEffect(() => {
		const fetchPerson = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/person/${personId}`
				);
				setPerson(response.data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPerson();
	}, [personId]);

	return (
		<>
			<h1>Single Product page</h1>
			<div>
				<p>Name: {person.name}</p>
			</div>
		</>
	);
};
export default Person;
