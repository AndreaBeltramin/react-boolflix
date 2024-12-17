import { globalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
	const { listMovies, listTvShows } = globalContext();

	return (
		<main>
			<ProductionList productions={listMovies}>
				<h1>FILM</h1>
			</ProductionList>
			<ProductionList productions={listTvShows}>
				<h1>SERIE TV</h1>
			</ProductionList>

			{/* {listMovies.lenght > 0 ? (
				<ProductionList productions={listMovies}>
					<h1>FILM</h1>
				</ProductionList>
			) : (
				<div className="container">
					<div>Nesssun film da visualizzare</div>
				</div>
			)}

			{listTvShows.lenght > 0 ? (
				<ProductionList productions={listTvShows}>
					<h1>SERIE TV</h1>
				</ProductionList>
			) : (
				<div className="container">
					<div>Nessuna serie TV da visualizzare</div>
				</div>
			)} */}
		</main>
	);
}
