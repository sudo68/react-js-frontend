import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<>
			<div className="container">
				<h1>Welcome to our people web app</h1>

				<p>Use the following routes to use the web app:</p>
				<ul>
					<li>
						<Link to={"/person/create"}>Create a person</Link>
					</li>
					<li>
						<Link to={"/person"}>View all persons</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Welcome;
