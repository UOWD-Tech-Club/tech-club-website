import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";

const Navbar = () => {
	return (
		<nav>
			<ul>
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
			<a href='#' className='logo'>
				<img src={navLogo} alt='Logo' />
			</a>
			<ul>
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
	);
};

export default Navbar;
