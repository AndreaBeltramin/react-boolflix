import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import * as bootstrap from "bootstrap";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GlobalContextProvider>
			<App />
		</GlobalContextProvider>
	</StrictMode>
);
