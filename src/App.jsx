import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useState } from 'react'
import HomePage from "./pages/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={HomePage} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
