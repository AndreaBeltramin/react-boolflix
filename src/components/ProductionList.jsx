import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
	return (
		<>
			{/* verifico se nell'array delle produzioni ci sono elementi */}
			{productions.length > 0 ? (
				// se ci sono elementi allora stampo le sezioni
				<section className="mb-4">
					{children}
					<div className="row row-cols-3 g-3 ">
						{/* mappo l'array di produzioni per creare la card per ogni elemento */}
						{productions.map((production) => (
							<ProductionCard key={production.id} production={production} />
						))}
					</div>
				</section>
			) : (
				// aggiungo un errore se non ci sono elementi nell'array delle produzioni
				<div className="container mt-5 fs-2 mb-5">
					Nessun risultato trovato...
				</div>
			)}
		</>
	);
}
