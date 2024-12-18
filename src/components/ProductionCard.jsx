export default function ProductionCard({ production }) {
	//funzione per costruire l' URL della copertina
	const buildPosterUrl = (poster) => {
		const imageUrl = "https://image.tmdb.org/t/p";
		const size = "/w342";
		return imageUrl + size + poster;
	};

	//funzione per trasformare la lingua in una bandiera
	const transformLanguageToFlag = () => {
		if (production.originalLanguage === "en") return "GB";
		return production.originalLanguage.toUpperCase();
	};

	//funzione per trasformare i voti in stelle
	const transformVote = (vote) => {
		const roundedVote = Math.round(vote / 2); // Per avere un numero tra 1 e 5
		let stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= roundedVote) {
				stars.push(<i key={i} className="fa-solid fa-star"></i>); // Stelle piene
			} else {
				stars.push(<i key={i} className="fa-regular fa-star"></i>); // Stelle vuote
			}
		}
		return <span>{stars}</span>;
	};

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={
						// aggiungo un errore se non esiste un immagine di copertina
						production.image
							? buildPosterUrl(production.image)
							: "https://placehold.co/400X600?text=Nessuna+Copertina+Disponibile"
					}
					className="card-img-top h-100"
					alt="..."
				/>
				<div className="card-body">
					<div>
						<strong>Titolo: </strong>
						{production.title}
					</div>
					<div>
						<strong>Titolo originale: </strong>
						{production.originalTitle}
					</div>
					<img
						src={`https://flagsapi.com/${transformLanguageToFlag(
							production.originalLanguage
						)}/shiny/16.png`}
					/>
					<div>
						<strong>Voto: </strong>
						{/* passo al funzione come argomento il voto da trasformare */}
						{transformVote(production.vote)}
					</div>
					<div>
						<strong>Data di uscita: </strong>
						{production.date}
					</div>
					<div>
						<strong>Trama: </strong>
						{/* aggiungo la trama e un errore se non è presente */}
						{production.overview !== ""
							? production.overview
							: "nessuna trama disponibile"}
					</div>
				</div>
			</div>
		</div>
	);
}
