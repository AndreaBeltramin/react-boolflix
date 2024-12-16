// import { globalContext } from "../contexts/globalContext";
import { useState } from "react";

const defaultFormData = {
	title: "",
};

export default function HomePage() {
	//uso lo useState per controllare il cambiamento della lista e dell'input
	const [list, setList] = useState([]);
	const [listTvShows, setListTvShows] = useState([]);
	const [formFields, setFormFields] = useState(defaultFormData);

	//dichiaro la fetch per recuperare dall'endpoint dell'API le informazioni che mi servono
	const fetchMovies = () => {
		const url = `https://api.themoviedb.org/3/search/movie?query=${formFields.title}`;
		const accessKey = import.meta.env.VITE_TMDB_API_KEY;

		//nell'header devo inserire l'API KEY per avere l'autorizzazione
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: accessKey,
			},
		};

		//faccio la fetch
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				//recupero i dati di cui ho bisogno (titolo,lingua,voto) mappando results
				const listMovies = data.results.map((movie) => ({
					title: movie.title,
					originalTitle: movie.original_title,
					originalLanguage: movie.original_language,
					vote: movie.vote_average,
				}));
				//setto la lista con i dati che ho recuperato
				setList(listMovies);
			})
			.catch((err) => console.error(err));
	};

	//dichiaro la fetch per recuperare dall'endpoint dell'API le informazioni che mi servono sulle SERIE TV
	const fetchTvShows = () => {
		const url = `https://api.themoviedb.org/3/search/tv?query=${formFields.title}`;
		const accessKey = import.meta.env.VITE_TMDB_API_KEY;

		//nell'header devo inserire l'API KEY per avere l'autorizzazione
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: accessKey,
			},
		};

		//faccio la fetch
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				//recupero i dati di cui ho bisogno (titolo,lingua,voto) mappando results
				const listTvShows = data.results.map((tvShow) => ({
					title: tvShow.name,
					originalTitle: tvShow.original_name,
					originalLanguage: tvShow.original_language,
					vote: tvShow.vote_average,
				}));
				//setto la lista con i dati che ho recuperato
				setListTvShows(listTvShows);
			})
			.catch((err) => console.error(err));
	};

	// const { fetchMovies } = globalContext();

	//dichiaro una funzione per tenere traccia del cambiamento dell'input
	const handleInputChange = (e) => {
		setFormFields({ ...formFields, [e.target.name]: e.target.value });
	};

	//dichiaro una funzione che avviene al submit del form
	const handleFormSubmit = (event) => {
		//prevengo il submit del form
		event.preventDefault();
		//invoco la funzione per fare le 2 fetch
		handleFetch();
		//resetto input
		setFormFields(defaultFormData);
	};

	//dichiaro una funzione per fare le 2 fetch insieme
	const handleFetch = () => {
		fetchMovies();
		fetchTvShows();
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
				<button className="btn btn-primary">Cerca</button>
			</form>
			<ul>
				{list.map((movie, index) => (
					<li key={index}>
						<ul>
							<li>{movie.title}</li>
							<li>{movie.originalTitle}</li>
							<li>{movie.originalLanguage}</li>
							<li>{movie.vote}</li>
						</ul>
					</li>
				))}
			</ul>
			<hr />
			<ul>
				{listTvShows.map((tvShow, index) => (
					<li key={index}>
						<ul>
							<li>{tvShow.title}</li>
							<li>{tvShow.originalTitle}</li>
							<li>{tvShow.originalLanguage}</li>
							<li>{tvShow.vote}</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
