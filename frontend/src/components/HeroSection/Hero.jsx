import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<div className={styles.flex}>
					<div className={styles.textContainer}>
						<span className={styles.supertitle}>UOWD</span>
						<h1 className={styles.title}>TECH CLUB</h1>
						<span className={styles.subtitle}>LET&apos;S BUILD THE MATRIX</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
