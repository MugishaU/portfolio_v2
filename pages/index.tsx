import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Mugisha Uwiragiye</h1>
				<h2>This site is under construction, check back soon!</h2>
				<footer>
					<span className={styles.logo}>
						<Image
							// src="/images/memoji-hi.png"
							src="/icons/icon-512x512.png"
							alt="Memoji of Mugisha"
							width={100}
							height={100}
							priority
						/>
					</span>
				</footer>
			</main>
		</div>
	);
};

export default Home;
