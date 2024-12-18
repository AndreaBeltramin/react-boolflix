//importo il contesto per poi estarne gli elementi che mi serviranno
import { globalContext } from "../contexts/GlobalContext";

export default function Header() {
	//destrutturo gli elementi che mi servono dal contesto
	const { handleFormSubmit, handleInputChange, formFields } = globalContext();

	return (
		<header>
			<div className="logo">BOOLFLIX</div>
			<div className="search-input">
				<form onSubmit={handleFormSubmit}>
					<input
						id="title"
						name="title"
						onChange={handleInputChange}
						value={formFields.title}
						type="text"
						className="m-3"
						autoFocus
						placeholder="Digita qui..."
					/>
					<button className="btn btn-danger">Cerca</button>
				</form>
			</div>
		</header>
	);
}
