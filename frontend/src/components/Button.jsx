import styles from "./Button.module.css";

function Button({ align }) {
	return (
		<button className={`${styles.btn} ${styles[`align_${align}`]}`}>
			<span className={styles.btnText}>SEE MORE</span>
			<img
				className={styles.btnImg}
				loading='lazy'
				src='\src\assets\Arrow.svg'
				alt='Arrow'
			/>
		</button>
	);
}

export default Button;
