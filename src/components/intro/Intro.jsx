import { React, useEffect, useState } from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
	const [width, setWidth] = useState(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 768;

	useEffect(() => {
		if (isMobile) {
			document.getElementById('myImg').height = '250';
		}
		// return () => {
		// 	cleanup
		// }
	}, []);
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img id='myImg' src={ME} height='400px' alt='me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>3 years</small>
						</article>
						<a href='#portfolio'>
							<article className='about__card'>
								<VscFolderLibrary className='about__icon' />
								<h5>Projects</h5>
								<small>20+ Completed Projects</small>
							</article>
						</a>
					</div>
					<p style={{ color: 'white' }}>
						Hi, my name is Quang Huy (Harry). I am a 3<sup>rd</sup> year
						undergraduate student at Nanyang Technological University
						(Singapore), with specialisation in Computer Engineering. I have
						completed numerous software internships and projects, and already
						have 3 years of experience in developing web and mobile
						applications. I am a hard-working person, very committed to work and
						eager to learn new things. I am looking for a summer internship
						starting from May 2023 till August 2023.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Contact me
					</a>
				</div>
			</div>
		</section>
	);
};

export default Intro;
