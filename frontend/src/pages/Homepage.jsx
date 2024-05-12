import Hero from "../components/HeroSection/Hero";
import Events from "../components/EventsSection/Events";
import Newsfeed from "../components/NewsSection/Newsfeed";

function Homepage() {
	return (
		<>
			<main>
				<Hero />
				<Events />
				<Newsfeed />
			</main>
		</>
	);
}

export default Homepage;
