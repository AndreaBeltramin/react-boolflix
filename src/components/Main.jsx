import { globalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
	const { listMovies, listTvShows } = globalContext();

	return (
		<main>
			{listMovies.length == 0 && listTvShows.length == 0 ? (
				<div className="container mt-5 fs-1 fw-bold mb-5">
					Prova a cercare qualcosa...
				</div>
			) : (
				<div className="container mt-5">
					<ProductionList productions={listMovies}>
						<h1 className="fw-bold">FILM</h1>
					</ProductionList>
					<ProductionList productions={listTvShows}>
						<h1 className="fw-bold">SERIE TV</h1>
					</ProductionList>
				</div>
			)}
		</main>
	);
}
