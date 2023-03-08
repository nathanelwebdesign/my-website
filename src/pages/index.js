import Head from "next/head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Website of Nathanel</title>
				<meta name="description" content="Portfolio website of Nathanel" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1
					className={montserrat.className}
					style={{ textAlign: "center", paddingTop: "2rem" }}
				>
					Work in progress website of Nathanel
				</h1>
			</main>
		</>
	);
}
