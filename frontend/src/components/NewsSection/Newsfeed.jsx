import styles from "./Newsfeed.module.css";
import { NewsData } from "../../data/NewsData";
import NewsCard from "./NewsCard";
import Button from "../Button";

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
						{NewsData.map((news) => (
							<NewsCard
								cols={news.cols}
								title={news.title}
								author={news.author}
								date={news.date}
								img={news.img}
								tags={news.tags}
								key={news.id}
							/>
						))}
					</div>
					<Button align={"right"} />
				</div>
			</div>
		</section>
	);
}

export default Newsfeed;
