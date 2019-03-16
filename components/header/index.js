import React from 'react';
import Container from '../container';
import style from './style.scss';
import rvLogo from '../../lib/images/RV-logo.svg';

const Header = () => (
	<Container withGrid={false}>
		<header className={style.header}>
			<a href="#">
				<img
					src={rvLogo}
					className={style.logo}
					alt="Red Ventures Logo"
				/>
			</a>
			<nav className={style.nav}>
				<ul>
					<li>
						<a href="#" className={style.active}>
							Model R
						</a>
					</li>
					<li>
						<a href="#">Model IQ</a>
					</li>
					<li>
						<a href="#">Model Mobi</a>
					</li>
					<li>
						<a href="#">Model Charlie</a>
					</li>
					<li>
						<a href="#">Model Italy</a>
					</li>
				</ul>
			</nav>
		</header>
	</Container>
);

export default Header;
