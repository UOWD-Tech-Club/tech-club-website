import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/tech-club-website/' element={<Homepage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
