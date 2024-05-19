import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Dubot from "./pages/Dubot";
import Wehead from "./pages/Wehead";
import VR from "./pages/VR";
import Robodog from "./pages/robodog";

function App() {
	return (
		<>
			<BrowserRouter>

				<Navbar />
				<Routes>
					<Route path='/tech-club-website/' element={<Homepage />} />
					<Route path='/tech-club-website/dubot' element={<Dubot />} />
					<Route path='/tech-club-website/wehead' element={<Wehead />} />
					<Route path='/tech-club-website/vr' element={<VR />} />
					<Route path='/tech-club-website/robodog' element={<Robodog />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
