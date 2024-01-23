import { Route, Routes } from "react-router-dom";
import Persons from "./pages/persons";
import Person from "./pages/person";
import CreatePerson from "./pages/createPerson";
import EditPerson from "./pages/editPerson";
import Welcome from "./pages/welcome";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/person">
					<Route index element={<Persons />} />
					<Route path=":personId" element={<Person />} />
					<Route path="create" element={<CreatePerson />} />
					<Route path="edit/:personId" element={<EditPerson />} />
				</Route>
			</Routes>
		</>
	);
};
export default App;
