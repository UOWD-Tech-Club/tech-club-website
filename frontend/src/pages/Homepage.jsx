import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import styles from "./Homepage.module.css";

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
