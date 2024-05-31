import styles from "./CardTag.module.css";

function CardTag({ tags }) {
	return (
		<div className={styles.tagContainer}>
			{tags.map((tag, index) => (
				<span key={index} className={styles.tag}>
					{tag.text}
				</span>
			))}
		</div>
	);
}

export default CardTag;
