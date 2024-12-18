import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const defaultFormData = {
	title: "",
};

export const GlobalContextProvider = ({ children }) => {
	//uso lo useState per controllare il cambiamento della lista e dell'input
	const [listMovies, setListMovies] = useState([]);
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
					id: movie.id,
					title: movie.title,
					originalTitle: movie.original_title,
					originalLanguage: movie.original_language,
					vote: movie.vote_average,
					image: movie.poster_path,
					overview: movie.overview,
					date: movie.release_date,
				}));
				console.log(listMovies);

				//setto la lista con i dati che ho recuperato
				setListMovies(listMovies);
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
					id: tvShow.id,
					title: tvShow.name,
					originalTitle: tvShow.original_name,
					originalLanguage: tvShow.original_language,
					vote: tvShow.vote_average,
					image: tvShow.poster_path,
					overview: tvShow.overview,
					date: tvShow.first_air_date,
				}));
				console.log(listTvShows);

				//setto la lista con i dati che ho recuperato
				setListTvShows(listTvShows);
			})
			.catch((err) => console.error(err));
	};

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

	const globalData = {
		handleFormSubmit,
		handleInputChange,
		fetchMovies,
		fetchTvShows,
		handleFetch,
		listMovies,
		listTvShows,
		formFields,
	};

	return (
		<GlobalContext.Provider value={globalData}>
			{children}
		</GlobalContext.Provider>
	);
};

export const globalContext = () => {
	return useContext(GlobalContext);
};
