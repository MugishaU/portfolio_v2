import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta
					name="description"
					content="Mugisha Uwiragiye's developer portfolio highlighting his projects and skills. Find out more about him, and how he builds secure, scalable solutions."
				/>
				<meta
					name="keywords"
					content="coding,developer,engineering,mugisha,programming,software,uwiragiye"
				/>
				<meta name="theme-color" content="#0A192E" />

				{/* <link rel="manifest" href="/manifest.json" /> */}
				<link href="/icons/memoji-laptop.png" rel="icon" type="image/png" />
				<link rel="apple-touch-icon" href="/icons/memoji-laptop.png"></link>
				<link rel="canonical" href="https://www.mugisha.io/" />
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

				<title>Mugisha Uwiragiye</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
