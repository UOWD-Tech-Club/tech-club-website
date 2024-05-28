import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import JoinUs from "./pages/JoinUs";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/tech-club-website/' element={<Homepage />} />
					<Route path='/tech-club-website/join-us' element={<JoinUs />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
