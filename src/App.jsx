// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return;
	<BrowserRouter>
		<Routes>
			<Route path="/" element="{<HomePage/>}" />
			<Route path="/aboutUs" element="{<AboutUsPage/>}" />
			<Route path="/listProducts" element="{<ListProductsPage/>}" />
		</Routes>
	</BrowserRouter>;
}

export default App;
