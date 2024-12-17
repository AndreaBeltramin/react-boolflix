import { globalContext } from "../contexts/GlobalContext";

export default function Header() {
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
						className="m-2"
					/>
					<button className="btn btn-secondary">Cerca</button>
				</form>
			</div>
		</header>
	);
}
