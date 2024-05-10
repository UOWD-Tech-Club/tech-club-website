import styles from "./NewsCard.module.css";
import CardTag from "./CardTag";

function NewsCard({ cols, title, author, date, img, tags }) {
	const imageStyle = {
		background: `linear-gradient(180deg, rgba(0, 204, 164, 0) 22.62%, #00cca4 99.93%), url(${img}) lightgray -165.501px 0px / 224.563% 100.387%`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div
			className={`${styles.card} ${styles[`cols_${cols}`]}`}
			style={imageStyle}>
			<CardTag tags={tags} location={"top"} />
			<span className={`${styles.title} ${styles[`title_${cols}`]}`}>
				{title}
			</span>
			<span className={styles.subtitle}>
				{author} - {date}
			</span>
		</div>
	);
}

export default NewsCard;
