import { BrowserRouter, HashRouter, Routes, Route, createHashRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Dubot from "./pages/Dubot";
import Wehead from "./pages/Wehead";
import VR from "./pages/VR";
import Robodog from "./pages/robodog";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
	return (
		<>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/dubot' element={<Dubot />} />
					<Route path='/wehead' element={<Wehead />} />
					<Route path='/vr' element={<VR />} />
					<Route path='/robodog' element={<Robodog />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
