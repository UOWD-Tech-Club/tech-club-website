import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import JoinUs from "./pages/JoinUs";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
	return (
		<>
			<HashRouter>
				<Navbar />
				<Routes>

					<Route path='/tech-club-website/join-us' element={<JoinUs />} />
					<Route path='/' element={<Homepage />} />

				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
