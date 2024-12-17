import { globalContext } from "../contexts/GlobalContext";

export default function Header() {
	const { handleFormSubmit, handleInputChange, formFields } = globalContext();

	return (
		<div className="container mt-5">
			<form onSubmit={handleFormSubmit}>
				<input
					id="title"
					name="title"
					onChange={handleInputChange}
					value={formFields.title}
					type="text"
					className="me-5"
				/>
				<button className="btn btn-primary">Cerca</button>
			</form>
		</div>
	);
}
