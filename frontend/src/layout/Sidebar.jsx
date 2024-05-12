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
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/'>Events</NavLink>
				<NavLink to='/'>Projects</NavLink>
				<NavLink to='/'>Team</NavLink>
				<NavLink to='/'>About us</NavLink>
				<NavLink to='/'>Socials</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
