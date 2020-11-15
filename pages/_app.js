import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

const theme = {
	colors: {
		green: '#52D46F',
		yellow: '#fed46c',
		lightGrey: '#D9D9D9',
		black: 'rgb(0, 0, 0, 0.85)',
		white: '#ffffff',
	},
	fonts: ['Oxygen', 'sans-serif', 'Roboto'],
	fontSize: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	borderRadius: {
		square: '0px',
		rounded: '3px',
		pill: '100%',
	},
};

const GlobalStyle = createGlobalStyle`
  body {
  background: linear-gradient(45deg, rgb(0, 0, 0, 0.85) 63%, #fed46c 63%, #fed46c 75%, rgb(0, 0, 0, 0.85) 75%);
  background-repeat: no-repeat;
  }
`;

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<motion.div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimate'
				transition={{ duration: 0.5 }}
				variants={{
					pageInitial: {
						opacity: 0,
					},
					pageAnimate: {
						opacity: 1,
					},
				}}>
				<Component {...pageProps} />
			</motion.div>
		</ThemeProvider>
	);
}

export default MyApp;
