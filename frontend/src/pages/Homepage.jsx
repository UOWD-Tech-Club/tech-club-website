import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../components/HeroSection/Hero";
import Events from "../components/EventsSection/Events";
import Newsfeed from "../components/NewsSection/Newsfeed";

function Homepage() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Events />
				<Newsfeed />
			</main>
			<Footer />
		</>
	);
}

export default Homepage;
