import styles from "./Sidebar.module.css";
import { IoClose as CloseIcon } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, closeSidebar }) {
	return (
		<div className={`${styles.sidebar} ${isOpen && styles.open}`}>
			<span className={styles.closeIcon} onClick={closeSidebar}>
				<CloseIcon size={30} />
			</span>

			<div className={styles.navlinks}>
				<NavLink to='/tech-club-website/'>Home</NavLink>
				<NavLink to='/tech-club-website/'>Events</NavLink>
				<NavLink to='/tech-club-website/'>Projects</NavLink>
				<NavLink to='/tech-club-website/'>Team</NavLink>
				<NavLink to='/tech-club-website/'>About us</NavLink>
				<NavLink to='/tech-club-website/'>Socials</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
