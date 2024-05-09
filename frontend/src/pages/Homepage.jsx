import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Hero from "../layout/Hero/Hero";
import Events from "../components/Events";

function Homepage() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Events />
			</main>
			<Footer />
		</>
	);
}

export default Homepage;
