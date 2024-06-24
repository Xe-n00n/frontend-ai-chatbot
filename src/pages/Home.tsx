import mainBot from "/page-photos/homepage-bot.png";

import { NavLink } from "react-router-dom";

import Section from "../components/home/Sections";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<Section
				src={mainBot}
				alt='main-bot'
				animateImg={true}
				imgStyle={styles.ui1}
				reverse={false}>
				<h2> Your SQL mentor</h2>
				<h1>
				 Correct your SQL statements using this <span className={styles.highlight}>CHAT BOT</span>
				</h1>
				<p>
					Experience the best SQL corrections using our bot and get your tasks done faster!
				</p>
				<NavLink to='/login' className={styles.btn}>
					Get Started For Free
				</NavLink>
			</Section>
		</div>
	);
};

export default Home;
