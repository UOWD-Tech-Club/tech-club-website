import styles from "./Homepage.module.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Events from "../components/Events";

function Homepage() {
	return (
		<>
			{/* <Navbar /> */}
			<main className={styles.homepage}>
				{/* Homepage Component */}
				<Events />
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default Homepage;
