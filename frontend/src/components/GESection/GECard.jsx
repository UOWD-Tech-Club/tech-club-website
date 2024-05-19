import styles from "./GECard.module.css";
import CardTag from "../CardTag";

function GECard({ dateTime, title, img, tags }) {
	const imageStyle = {
		background: `linear-gradient(180deg, rgba(0, 204, 164, 0) 22.62%, #00cca4 99.93%), url(${img}) lightgray -165.501px 0px / 224.563% 100.387%`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div className={styles.event} style={imageStyle}>
			<span className={styles.eventTime}>{dateTime}</span>
			<span className={styles.eventTitle}>{title}</span>
			<CardTag tags={tags} />
		</div>
	);
}

export default GECard;
