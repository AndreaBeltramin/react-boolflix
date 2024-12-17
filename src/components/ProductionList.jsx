import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
	const buildPosterUrl = (poster) => {
		const imageUrl = "https://image.tmdb.org/t/p";
		const size = "/w342";
		return imageUrl + size + poster;
	};

	return (
		<>
			<section>
				{children}

				<ul>
					{productions.map((production, index) => (
						<li key={index}>
							<ul>
								<li>{production.title}</li>
								<li>{production.originalTitle}</li>
								<li>
									{production.originalLanguage}
									{/* <img
                        src={`https://flagsapi.com/${transformLanguageToFlag()}/shiny/16.png`}
                    /> */}
								</li>
								<li>{production.vote}</li>
								<img src={buildPosterUrl(production.image)} alt="" />
							</ul>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
