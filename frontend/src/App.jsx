import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
	return (
		<>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
