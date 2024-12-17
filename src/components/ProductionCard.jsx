export default function ProductionCard({ production }) {
	const buildPosterUrl = (poster) => {
		const imageUrl = "https://image.tmdb.org/t/p";
		const size = "/w342";
		return imageUrl + size + poster;
	};

	const transformLanguageToFlag = () => {
		if (production.originalLanguage === "en") return "GB";
		return production.originalLanguage.toUpperCase();
	};

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
					src={buildPosterUrl(production.image)}
					className="card-img-top h-100"
					alt="..."
				/>
				<div className="card-body">
					<div className="card-text">
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
							{transformVote(production.vote)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
