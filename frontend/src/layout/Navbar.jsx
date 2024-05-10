import styles from "./Navbar.module.css";
import navLogo from "../assets/nav-logo.svg";

function Navbar() {
	return (
		<header>
			<nav className={`container ${styles.navbar}`}>
				<ul className={styles.navlinks}>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Events</a>
					</li>
					<li>
						<a href='#'>Projects</a>
					</li>
				</ul>
				<a href='#' className={styles.logo}>
					<img src={navLogo} alt='Logo' />
				</a>
				<ul className={styles.navlinks}>
					<li>
						<a href='#'>Team</a>
					</li>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Socials</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
