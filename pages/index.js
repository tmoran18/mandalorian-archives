import Head from 'next/head';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<MobileNavbar />
		</div>
	);
}
