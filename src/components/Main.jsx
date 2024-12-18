//importo il contesto per poi estarne gli elementi che mi serviranno
import { globalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
	//destrutturo gli elementi che mi servono dal contesto
	const { listMovies, listTvShows } = globalContext();

	return (
		<main>
			{/* aggiungo un errore se la lista dei film o serie TV è vuota */}
			{listMovies.length == 0 && listTvShows.length == 0 ? (
				<div className="container mt-5 fs-1 fw-bold mb-5">
					Prova a cercare un film o una serie TV!
				</div>
			) : (
				// se la lista contiene degli elementi allora stampo in pagina le due liste
				<div className="container mt-5">
					{/* ad ogni lista passo come prop l'argomento della lista */}
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
