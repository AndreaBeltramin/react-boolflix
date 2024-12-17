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
		if (Math.round(vote) / 2 === 1)
			return (
				<div>
					<i class="fa-regular fa-star"></i>
				</div>
			);
		if (Math.round(vote) / 2 === 2)
			return (
				<div>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
				</div>
			);
		if (Math.round(vote) / 2 === 3)
			return (
				<div>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
				</div>
			);
		if (Math.round(vote) / 2 === 4)
			return (
				<div>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
				</div>
			);
		if (Math.round(vote) / 2 === 5)
			return (
				<div>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
					<i class="fa-regular fa-star"></i>
				</div>
			);
	};

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={buildPosterUrl(production.image)}
					className="card-img-top"
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
							{Math.round(production.vote)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
