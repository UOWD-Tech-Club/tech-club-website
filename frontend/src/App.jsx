import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import DynamicFormPage from "./pages/DynamicFormPage";


// data fetch from backend (remove after contected to backend)
const mockFormLinks = [
	{ form_link: "https://form.jotform.com/241484020996460" },
	{ form_link: "https://form.jotform.com/241484020996460" },
	{ form_link: "https://form.jotform.com/241484020996460" }
  ];

function App() {
	const [formLinks, setFormLinks] = useState([]);

	useEffect(() => {
		setTimeout(() =>{
			setFormLinks(mockFormLinks);
		}, 1000);
	}, [])


	return (
		<>
			<HashRouter>
				<Navbar />
				<Routes>

					<Route path='/' element={<Homepage />} />
					{/* Dynamically generate routes for each form link  /tech-club-website/#form/0 */}
					{formLinks.map((form, index) => (
						<Route key={index} path={`/form/${index}`} element={<DynamicFormPage formLink={form.form_link} />} />
					))}
					
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
