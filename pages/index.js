import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Button rounded>Button</Button>
		</div>
	);
}
