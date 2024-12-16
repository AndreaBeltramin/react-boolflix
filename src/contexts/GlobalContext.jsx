import { createContext, useContext } from "react";
import HomePage from "../pages/HomePage";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const fetchMovies = () => {
		const url =
			"https://api.themoviedb.org/3/search/movie?query=harry&include_adult=false&language=en-US&page=1";

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDBjMTZkNzcyNTA4YzUzZmZhNjliNThiMTBhN2U2MCIsIm5iZiI6MTczNDM0NzI1OC4zODEsInN1YiI6IjY3NjAwOWZhYWZhZmRiMmFhNjQ5ZGZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fa6qhfhwym0Lw6ct7TOhHmRsGRSUidLEYfz1gHa44YA",
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((err) => console.error(err));
	};

	const globalData = {
		fetchMovies,
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
