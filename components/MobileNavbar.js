import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileNavbar = () => {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
	// Toggle the Mobile Nav open / close
	const handleMobileNavClick = () => {
		mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
	};
	return (
		<nav className='mobileNav_container'>
			<div className='menu_icon' onClick={handleMobileNavClick}>
				<Image
					src='/hamburger.svg'
					width={30}
					height={18}
					alt='hamburger menu logo'
				/>
			</div>
			<div className='mobileNav_menu_container'>
				<ul
					className={`
	     ${mobileNavIsOpen ? 'mobileNav_open' : 'mobileNav_closed'} 
	     mobileNav_menu_list`}>
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
					color: #333;
					transition: all ease 0.2s;
				}
				.menu_icon {
					position: absolute;
					top: 20px;
					right: 20px;
					cursor: pointer;
					z-index: 2;
				}

				.mobileNav_menu_container {
					position: relative;
				}

				.mobileNav_menu_list {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: absolute;
					width: 100%;
					margin: auto;
					background: #fed46c;
					border-radius: 4px;
					transition: ease all 0.4s;
					border: 3px dashed #333;
				}

				.mobileNav_container {
					display: none;
					padding: 10px;
				}

				.mobileNav_closed {
					top: -300px;
				}

				.mobileNav_open {
					top: 40px;
				}

				/* Media Queries */
				@media only screen and (max-width: 600px) {
					/* Mobile Navbar Media Queries */
					.mobileNav_container {
						display: flex;
						flex-direction: column;
					}
				}
			`}</style>
		</nav>
	);
};

export default MobileNavbar;
