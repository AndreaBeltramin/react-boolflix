import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
	return (
		<>
			<section>
				{children}
				<div className="row row-cols-3 g-3">
					{productions.map((production) => (
						<ProductionCard key={production.id} production={production} />
					))}
				</div>
			</section>
		</>
	);
}
