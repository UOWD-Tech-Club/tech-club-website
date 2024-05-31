import { NavLink } from "react-router-dom";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { useState } from "react";

import styles from "./Navbar.module.css";
import navLogo from "../assets/nav-logo.svg";
import Sidebar from "./Sidebar";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleSidebar() {
		setIsOpen(!isOpen);
	}

	function closeSidebar() {
		setIsOpen(false);
	}

	return (
		<header>
			<nav className={`container ${styles.navbar}`}>
				<div className={styles.navlinks}>
					<NavLink to='/tech-club-website/'>Home</NavLink>
					<NavLink to='/tech-club-website/'>Events</NavLink>
					<NavLink to='/tech-club-website/'>Projects</NavLink>
				</div>
				<NavLink to='/tech-club-website/' className={styles.logo}>
					<img src={navLogo} alt='Logo' />
				</NavLink>
				<div className={styles.navlinks}>
					<NavLink to='/tech-club-website/'>Team</NavLink>
					<NavLink to='/tech-club-website/'>About us</NavLink>
					<NavLink to='/tech-club-website/'>Socials</NavLink>
				</div>

				<div className={styles.menuBtn} onClick={toggleSidebar}>
					<MenuIcon size={40} />
				</div>
				<Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
			</nav>
		</header>
	);
}

export default Navbar;
