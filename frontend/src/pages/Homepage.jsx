import Hero from "../components/HeroSection/Hero";
import Events from "../components/EventsSection/Events";
import GE from "../components/GESection/GE"
import SocialLinks from "../components/SocialLinks/SocialLinks";
/*import Newsfeed from "../components/NewsSection/Newsfeed";*/

function Homepage() {
	return (
		<>
			<main>
				<Hero />
				<SocialLinks />
				<GE />
				<Events />
				{/*
				<Newsfeed />
	*/}
			</main>
		</>
	);
}

export default Homepage;
