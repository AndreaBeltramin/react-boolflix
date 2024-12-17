export default function ProductionCard({ production }) {
	const buildPosterUrl = (poster) => {
		const imageUrl = "https://image.tmdb.org/t/p";
		const size = "/w342";
		return imageUrl + size + poster;
	};

	return (
		<div className="col">
			<div className="card">
				<img
					src={buildPosterUrl(production.image)}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{production.title}</h5>
					<div className="card-text">
						<div>{production.title}</div>
						<div>{production.originalTitle}</div>
						<div>{production.originalLanguage}</div>
						<div>{production.vote}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
