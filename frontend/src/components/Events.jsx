import styles from "./Events.module.css";

function Events() {
	return (
		<section>
			<div className='container'>
				<div className={styles.flex}>
					<div className={styles.leftColumn}>
						<h2>UPCOMING EVENTS</h2>
						<p>
							We&apos;ve got exciting events lined up to fuel your tech passion.
							Get ready to learn, connect, and create with the Tech Club.
						</p>
						<button className={styles.btn}>
							<span className={styles.btnText}>SEE MORE</span>
							<img
								className={styles.btnImg}
								loading='lazy'
								src='\src\assets\Arrow.svg'
								alt='Arrow'
							/>
						</button>
						<div className={styles.pagination}>
							<div className={`${styles.dot} ${styles.active}`}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
						</div>
					</div>
					<div className={styles.rightColumn}>
						<div className={styles.event}>
							<span className={styles.eventTime}>
								06.05.24 / 3:00 pm - 4:00 pm
							</span>
							<span className={styles.eventTitle}>
								Machine Learning Workshop
							</span>
							<div className={styles.eventTags}>
								<span className={styles.tag}>Coding</span>
								<span className={styles.tag}>Workshop</span>
							</div>
						</div>
						<div className={styles.event}>
							<span className={styles.eventTime}>
								06.05.24 / 3:00 pm - 4:00 pm
							</span>
							<span className={styles.eventTitle}>Introduction to Python</span>
							<div className={styles.eventTags}>
								<span className={styles.tag}>Coding</span>
								<span className={styles.tag}>Workshop</span>
							</div>
						</div>
						<div className={styles.event}>
							<span className={styles.eventTime}>
								06.05.24 / 3:00 pm - 4:00 pm
							</span>
							<span className={styles.eventTitle}>STEM Mixer</span>
							<div className={styles.eventTags}>
								<span className={styles.tag}>Event</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Events;
