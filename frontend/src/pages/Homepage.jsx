import Hero from "../components/HeroSection/Hero";
import Events from "../components/EventsSection/Events";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Newsfeed from "../components/NewsSection/Newsfeed";

function Homepage() {
	return (
		<>
			<main>
				<Hero />
				<SocialLinks />
				<Events />
			</main>
		</>
	);
}

export default Homepage;
