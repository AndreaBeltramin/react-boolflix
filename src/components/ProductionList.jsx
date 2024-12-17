import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
	return (
		<>
			{productions.length > 0 ? (
				<section className="mb-4">
					{children}
					<div className="row row-cols-3 g-3 ">
						{productions.map((production) => (
							<ProductionCard key={production.id} production={production} />
						))}
					</div>
				</section>
			) : (
				<div className="container mt-5 fs-2 mb-5">
					Nessun risultato trovato...
				</div>
			)}
		</>
	);
}
