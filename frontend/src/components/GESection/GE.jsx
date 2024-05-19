import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import styles from "./GE.module.css";
import GECard from "./GECard";
import { GEData } from "../../data/GEData"
/*import Button from "../Button";*/

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

function GE() {
	return (
		<section className={styles.events}>
			<div className='container'>
				<div className={styles.flex}>
					<div className={styles.leftColumn}>
						<h2>GE EXHIBITION</h2>
						<p>
							Click on any of the cards to learn more about the technology available at the exhibition!
						</p>
						{/*<Button align={"left"} />*/}
						<div className={styles.pagination}>
							<div className={`${styles.dot} ${styles.active}`}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
							<div className={styles.dot}></div>
						</div>
					</div>
					<Carousel responsive={responsive} containerClass={styles.rightColumn}>
						{GEData.map((event) => (
							<GECard
								dateTime={event.dateTime}
								title={event.title}
								img={event.img}
								tags={event.tags}
								key={event.id}
							/>
						))}
					</Carousel>
				</div>
			</div>
		</section>
	);
}

export default GE;
