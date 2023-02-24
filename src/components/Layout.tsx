import type { ReactNode, ReactElement } from "react";
import Head from "next/head";
import Navbar from './Navbar';


export default function Layout({ children	}: { children: ReactNode }) {
	return (
		<>
			<Head>
				<title>CMSC 21 Blog</title>
			</Head>
			<div>
				<Navbar/>
				{ children }
			</div>
</>
	);
}