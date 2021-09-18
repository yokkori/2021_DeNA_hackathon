import Head from "next/head";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="">
				<h1 className="text-red-500 text-lg">
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>
			<footer className=""></footer>
		</div>
	);
}