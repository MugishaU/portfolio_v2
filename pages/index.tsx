import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Mugisha Uwiragiye</title>
				<meta
					name="description"
					content="Mugisha Uwiragiye's Developer Portfolio Highlighting Projects and Key Skills"
				/>
				<link rel="icon" href="/memoji-laptop.png" />
				<meta name="theme-color" content="#CCD7F5" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Mugisha Uwiragiye</h1>
				<h2>This site is under construction, check back soon!</h2>

				<footer>
					<span className={styles.logo}>
						<Image
							src="/memoji-hi.png"
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
