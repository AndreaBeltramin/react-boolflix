import { globalContext } from "../contexts/globalContext";

export default function HomePage() {
	const { fetchMovies } = globalContext();
	return (
		<div className="container">
			Ciao
			<button className="btn btn-primary" onClick={fetchMovies()}>
				clicca
			</button>
		</div>
	);
}
