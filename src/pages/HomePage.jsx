// import { globalContext } from "../contexts/globalContext";
import { useState } from "react";

const defaultFormData = {
	title: "",
};

export default function HomePage() {
	const [list, setList] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormData);

	const fetchMovies = () => {
		const url = `https://api.themoviedb.org/3/search/movie?query=${formFields.title}&include_adult=false&language=en-US&page=1`;
		const accessKey = import.meta.env.VITE_TMDB_API_KEY;

		console.log(url);
		console.log(accessKey);

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: accessKey,
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				const listMovies = data.results.map((movie) => ({
					title: movie.title,
					originalTitle: movie.original_title,
					originalLanguage: movie.original_language,
					vote: movie.vote_average,
				}));
				setList(listMovies);
				console.log(listMovies, data.results);
			})
			.catch((err) => console.error(err));
	};

	// const { fetchMovies } = globalContext();

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
			<ul>
				{list.map((title, index) => (
					<li key={index}>
						<ul>
							<li>{title.title}</li>
							<li>{title.originalTitle}</li>
							<li>{title.originalLanguage}</li>
							<li>{title.vote}</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
