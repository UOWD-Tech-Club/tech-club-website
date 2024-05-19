import styles from "./GECard.module.css";
import CardTag from "../CardTag";
import { Link } from "react-router-dom";

function GECard({ dateTime, title, img, tags, link }) {
	const imageStyle = {
		background: `linear-gradient(180deg, rgba(0, 204, 164, 0) 22.62%, #00cca4 99.93%), url("tech-club-website/Event-1.png") lightgray -165.501px 0px / 224.563% 100.387%`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<Link to={link}>
			<div className={styles.event} style={imageStyle}>
				<span className={styles.eventTime}>{dateTime}</span>
				<span className={styles.eventTitle}>{title}</span>
				<CardTag tags={tags} />
			</div>
		</Link>
	);
}

export default GECard;
