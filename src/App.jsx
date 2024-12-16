import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/globalContext";

// import { useState } from 'react'
import HomePage from "./pages/HomePage";

function App() {
	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={HomePage} />
				</Routes>
			</BrowserRouter>
		</GlobalContextProvider>
	);
}

export default App;
