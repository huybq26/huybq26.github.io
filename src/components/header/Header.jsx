import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
	return (
		<header id='home'>
			<div className='container header__container'>
				<h5>Hello I'm</h5>
				<h1>Bui Quang Huy (Harry)</h1>
				<h4 className='text-light'>
					NTU Undergraduate, Software Engineer Intern
				</h4>
				<CTA />
				<a href='#about' className='scroll__down'>
					Scroll Down
				</a>
				<HeaderSocials />
			</div>
		</header>
	);
};

export default Header;
