import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Homepage() {
	return (
		<>
			<Navbar />
			<main className={styles.homepage}>
				<h1>Homepage</h1>
			</main>
			<Footer />
		</>
	);
}

export default Homepage;
