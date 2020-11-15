import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link href='/'>
				<a>
					<Image
						src='/skull.svg'
						width={92}
						height={132}
						alt='A mandalorian skull logo'
					/>
				</a>
			</Link>

			<div>
				<ul className='menu_list'>
					<Link href='/characters'>
						<a>Characters</a>
					</Link>
					<Link href='/characters'>
						<a>Planets</a>
					</Link>
					<Link href='/characters'>
						<a>Spacecrafts</a>
					</Link>
				</ul>
			</div>
			<style jsx>{`
				ul {
					list-style-type: none;
					padding: 0px;
				}

				ul a {
					padding: 15px;
					font-family: 'Bangers', cursive;
					font-size: 25px;
					-webkit-text-stroke: 1px #333;
					transition: all ease 0.2s;
					transform: translateY(-20px);
				}

				ul a:hover {
					color: #fed46c;
					transform: translateY(-23px);
				}

				/* Navbar */
				.navbar {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 10px;
				}

				.menu_list {
					display: flex;
				}
				/* Media Queries */
				@media only screen and (max-width: 600px) {
					.navbar {
						display: none;
					}
				}
			`}</style>
		</nav>
	);
};

export default Navbar;
