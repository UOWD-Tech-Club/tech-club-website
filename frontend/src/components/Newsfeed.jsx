import styles from "./Newsfeed.module.css";

function Newsfeed() {
	return (
		<section>
			<div className='container'>
				<div className={styles.flex}>
					<div className={styles.topContainer}>
						<h2>NEWS FEED</h2>
						<p>
							Get your daily dose of tech news, updates, and innovations from
							around the world. Explore the latest breakthroughs and trends
							shaping the future of technology.
						</p>
					</div>
					<div className={styles.bottomContainer}>
						<div className={`${styles.card} ${styles.card_5cols}`}>
							News Card
						</div>
						<div className={`${styles.card} ${styles.card_4cols}`}>
							News Card
						</div>
						<div className={`${styles.card} ${styles.card_3cols}`}>
							News Card
						</div>
						<div className={`${styles.card} ${styles.card_3cols}`}>
							News Card
						</div>
						<div className={`${styles.card} ${styles.card_4cols}`}>
							News Card
						</div>
						<div className={`${styles.card} ${styles.card_5cols}`}>
							News Card
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsfeed;
