// import { globalContext } from "../contexts/globalContext";
import { useState, useEffect } from "react";

const defaultFormData = {
	title: "",
};
export default function HomePage() {
	const fetchMovies = () => {
		const url = `https://api.themoviedb.org/3/search/movie?query=${formFields.title}&include_adult=false&language=en-US&page=1`;

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjkzMzAxNzExNDY5ZDY3OGUzNTA1MDU3NTUzNjJjNyIsIm5iZiI6MTczNDM0NzI1OC4zODEsInN1YiI6IjY3NjAwOWZhYWZhZmRiMmFhNjQ5ZGZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CamLwnpK3yElEKZNKWCU_Whkd27JrmQRIqiKBtA8oK0",
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, url);
				const newList = [...list, data];
				setList(newList);
				console.log(newList[0].results[0].title);
			})
			.catch((err) => console.error(err));
	};

	// const { fetchMovies } = globalContext();

	const [list, setList] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormData);

	const handleInputChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetchMovies();
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
				<button className="btn btn-primary" onClick={() => fetchMovies()}>
					Cerca
				</button>
			</form>

			{list.map((el, index) => (
				<ul key={index}>
					<li>{el.title}</li>
				</ul>
			))}
		</div>
	);
}
