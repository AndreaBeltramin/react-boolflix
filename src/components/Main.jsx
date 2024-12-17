import { globalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
	const { listMovies, listTvShows } = globalContext();

	// const transformLanguageToFlag = () => {
	// 	if (movie.originalLanguage === "en") return "GB";
	// 	return movie.originalLanguage.toUpperCase();
	// };
	return (
		<main>
			<ProductionList productions={listMovies}>
				<h1>FILM</h1>
			</ProductionList>
			<ProductionList productions={listTvShows}>
				<h1>SERIE TV</h1>
			</ProductionList>
		</main>
	);
}
