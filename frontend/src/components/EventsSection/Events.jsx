import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import { EventData } from "../../data/EventData";
import styles from "./Events.module.css";
import EventCard from "./EventCard";
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

function Events() {
	return (
		<section className={styles.events}>
			<div className='container'>
				<div className={styles.flex}>
					<div className={styles.leftColumn}>
						<h2>UPCOMING EVENTS</h2>
						<p>
							We&apos;ve got exciting events lined up to fuel your tech passion.
							Get ready to learn, connect, and create with the Tech Club.
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
						{EventData.map((event) => (
							<EventCard
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

export default Events;
