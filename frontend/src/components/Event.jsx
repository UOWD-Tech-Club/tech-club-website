import styles from "./Event.module.css";

function Event({ dateTime, title, tags }) {
	return (
		<div className={styles.event}>
			<span className={styles.eventTime}>{dateTime}</span>
			<span className={styles.eventTitle}>{title}</span>
			<div className={styles.eventTags}>
				{tags.map((tag, index) => (
					<Tag text={tag.text} key={index} />
				))}
			</div>
		</div>
	);
}

function Tag({ text }) {
	<span className={styles.tag}>{text}</span>;
}

export default Event;
