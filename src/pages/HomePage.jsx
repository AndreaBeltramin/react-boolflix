import { globalContext } from "../contexts/GlobalContext";
import Header from "../components/Header";
import Main from "../components/Main";

export default function HomePage() {
	const {
		handleFormSubmit,
		handleInputChange,
		listMovies,
		listTvShows,
		formFields,
	} = globalContext();

	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}
