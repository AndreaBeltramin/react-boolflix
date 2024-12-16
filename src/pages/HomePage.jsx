import { globalContext } from "../contexts/globalContext";
import { useState } from "react";

const defaultFormData = {
	title: "",
};
export default function HomePage() {
	const { fetchMovies } = globalContext();

	const [list, setList] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormData);

	const handleInputChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const newList = [...list, formFields];
		setList(newList);
		console.log(newList);
	};

	return (
		<div className="container mt-5">
			<form onSubmit={handleFormSubmit}>
				<input
					id="title"
					name="title"
					onChange={handleInputChange}
					value={formFields.title}
					type="text"
					className="me-5"
				/>
				<button
					className="btn btn-primary"
					onClick={() => fetchMovies(formFields.title)}
				>
					Cerca
				</button>
			</form>
		</div>
	);
}
