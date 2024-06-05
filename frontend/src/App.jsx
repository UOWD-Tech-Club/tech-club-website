import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import BackendWSForm from "./pages/BackendWSForm";

function App() {
	return (
		<>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path='/form' element={<BackendWSForm />} />
					<Route path='/' element={<Homepage />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
