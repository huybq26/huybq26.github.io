import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				Bui Quang Huy (Harry)
			</a>
			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/bui-quang-huy-b54860194/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				<a href='https://github.com/huybq26' target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
				<a href='tel:84390091' target='_blank' rel='noreferrer'>
					<FiPhoneCall />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
