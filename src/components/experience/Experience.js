import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
	return (
		<section id='experience'>
			<h5>What I have done</h5>
			<h2>My Experience</h2>
			<VerticalTimeline lineColor='#3e497a'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='August 2020 - June 2024'
					iconStyle={{ background: '#3e497a', color: '#fff' }}
					icon={<SchoolIcon />}
					// style={{ backgroundColor: '#34568B' }}
					contentStyle={{ background: '#92A8D1', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
				>
					<b>
						<h3 className='vertical-timeline-element-title'>
							Nanyang Technological University, Singapore
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Bachelor's Degree
						</h4>
					</b>

					<p>
						Specialisation in Computer Engineering. <br /> Current GPA: 4.74/5.0
						(First Class Honours)
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='May 2021 - August 2021'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
					contentStyle={{ background: '#92A8D1', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
				>
					<b>
						<h3 className='vertical-timeline-element-title'>
							Software Engineer Intern - FPT Software
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Hanoi, Vietnam
						</h4>
					</b>

					<p>
						Worked in Electronic-Know-Your-Customer (eKYC) project. Developed
						and gained experience in React, NodeJS web & React Native mobile
						application.
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='August 2021 - November 2021'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
					contentStyle={{ background: '#92A8D1', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Web Developer - Earth Observatory of Singapore
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Singapore</h4>
					<p>
						Designed and developed efficient and maintainable web applications
						according to research objectives and needs of various clients.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='November 2021 - February 2022'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
					contentStyle={{ background: '#92A8D1', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Software Engineer Intern - CARRO Singapore
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Singapore</h4>
					<p>
						Employed full-stack development tools to produce holistically
						envisioned mobile applications for both Android and iOS devices.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='July 2022 - December 2022'
					iconStyle={{ background: '#e9d35b', color: '#fff' }}
					icon={<WorkIcon />}
					contentStyle={{ background: '#92A8D1', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  #92A8D1' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Fullstack Developer Intern - Panasonic Asia Pacific
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>Singapore</h4>
					<p>
						Work as full stack web developer in a blockchain-related project.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</section>
	);
}

export default Experience;
