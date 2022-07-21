import React from 'react';
import IMG1 from '../../assets/crystaldb.png';
import IMG2 from '../../assets/CoffeeStore.png';
import IMG3 from '../../assets/CulturalDiffusion.png';
import IMG4 from '../../assets/scamguard2.png';
import IMG5 from '../../assets/priv2x.gif';
import IMG6 from '../../assets/ReportApp.png';
import IMG7 from '../../assets/bns.png';
import IMG8 from '../../assets/solana.png';
import IMG9 from '../../assets/source.png';
import IMG10 from '../../assets/recipe.png';
import IMG11 from '../../assets/fuse2.png';
import IMG12 from '../../assets/snake.gif';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './portfolio.css';

const Portfolio = () => {
	const [open, setOpen] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');
	const [projectNum, setProjectNum] = React.useState(0);

	const handleClickOpen = (num) => () => {
		setOpen(true);
		setScroll('paper');
		setProjectNum(num);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	const soloProjects = [
		{
			id: 1,
			title: 'Crystal Workspace & Database',
			img: IMG1,
			link: 'https://crystal.wovodat.org/',
			github: 'https://github.com/huybq26/EOS-Crystal-Interface',
			description:
				'A functional website developed with React and NodeJS. It is currently used by Earth Observatory of Singapore (EOS) researchers to query and analyze about 2000 crystals in an internal MongoDB Database.',
		},
		{
			id: 2,
			title: 'SMS Scammer Detecting Mobile App',
			img: IMG4,
			link: 'https://devpost.com/software/red-deviloper-scamguard',
			github: 'https://github.com/huybq26/Scammer-Detecting-App',
			description:
				'A mobile application to help detect SMS scams and frauds using Natural Language Processing model. The app is made with React Native, NodeJS and MongoDB.',
			additionalDesc:
				'First, the user will take a screenshot of the suspected message. After the image is sent to the server, it will be converted into text format. The trained NLP model will process and return the result to the user, with the accuracy of more than 90% achieved on Kaggle SMS Scam Dataset.',
		},
		{
			id: 3,
			title: 'Fusing images with different focuses with OpenCV',
			img: IMG11,
			link: 'https://github.com/huybq26/Fuse-Images-With-Different-Focuses',
			github: 'https://github.com/huybq26/Fuse-Images-With-Different-Focuses',
			description:
				'Problem statement: Earth researchers has a lot of small rock particles. Since the particle is too small, the best they can do is to take 2-3 pictures with different focus point. How could they get the full-focused image?',
			additionalDesc:
				'I have come up with the solution, under guidance of a PhD student, by using a technique called fusing. This machine learning code, powered by OpenCV and PyTorch, can detect the common points among those images, and "fuse" them to produce the final image. The accuracy varies with the quality of the images, but it will be more than 80% normally.',
		},

		{
			id: 4,
			title: 'Cultural data analysis based on cuisine ingredients',
			img: IMG3,
			link: 'https://github.com/huybq26/Cutural-Diffusion-Based-on-Cuisine',
			github: 'https://github.com/huybq26/Cutural-Diffusion-Based-on-Cuisine',
			description:
				'A Python-Jupyer Notebook application to find the similarites/differences between different cultures on the world, using their cuisine ingredients. ',
			additionalDesc:
				'In this project, we have used TF-IDF and Count vectorizer to clean the string datasets, and predict the cuisine’s culture based on ingredients using Logistic Regression, Random Forest, Naive Bayes, XGBoost and Neural Networks model. Finally, visualize the diffusion between cultures using K-means clustering. ',
		},
		{
			id: 5,
			title: 'Privacy-aware service provisioning in 5G networks',
			img: IMG5,
			link: 'https://github.com/huybq26/PrivEngV2X',
			github: 'https://github.com/huybq26/PrivEngV2X',
			description:
				'NTU Summer Project: Privacy-aware service provisioning in V2X networks. With only the input data of starting location, heading, speed and acceleration in each second, this Machine Learning model can predict the location based on x and y direction in every second of the journey, without using GPS. ',
			additionalDesc:
				'This web application make use of a backend system using NodeJS, MongoDB Database and Flask (Python) to receive location data continuously from a moving vehicle in real time, which will later be processed by deep learning model and displayed on frontend map with little delay.',
		},
		{
			id: 6,
			title: 'Android-iOS defects report application',
			img: IMG6,
			link: 'https://github.com/huybq26/Multimedia-Mobile-App',
			github: 'https://github.com/huybq26/Multimedia-Mobile-App',
			description:
				'An Android/iOS app used to capture images, recording audio, adding info and uploading to Firebase database and AWS S3, written with React Native and NodeJS.',
			additionalDesc:
				' This is a part of a collaborated project with a car company, which helps the user to report their car defects fast and effectively.',
		},
		{
			id: 7,
			title: 'BNS NFT Marketplace',
			img: IMG7,
			link: 'https://bnsdapp.herokuapp.com/',
			github: 'https://github.com/zhanghan4521/MetaMarket',
			description:
				"This is a NTU Blockchain club's project on blockchain web application where I worked as team leader. The web app is built with Next.js & Express.js for club members to mint 'BNS' tokens upon the active participation of each club activity, integrating with smart contracts. 'BNS' tokens can then be exchanged for other items.",
			additionalDesc:
				' The web app is also integrated with useful features such as setting up a wallet, signing transactions and participating in a NFT auction.',
		},
		{
			id: 8,
			title: 'Solana projects',
			img: IMG8,
			link: '#portfolio',
			github: '#portfolio',
			description:
				'A Blockchain project achieved third placing in NTU Blockchain Research Competition 2022. The competition is sponsored and judged by some NTU professors and various blockchain companies in Singapore.',
			additionalDesc:
				'This is an intensive research about Solana Ecosystem such as Solana Networks, Solana Validators, Solana Clusters, etc. Although it took our team more than 6 weeks to complete and present the project, it was a very good opportunity for our team not just to understand but to apply these blockchain concepts into the real world.',
		},
		{
			id: 9,
			title: 'Lithology Components Web Application',
			img: IMG9,
			link: 'https://source.wovodat.org/',
			github: 'https://github.com/huybq26/EOS-Source-Lithology',
			description:
				'This web application is used by Earth Observatory of Singapore (EOS) researchers to process, display figures and graphs of chemical components of over 1000 types of lithology using TensorFlow, jQuery, Flask (Python) and SQLite.',
			additionalDesc: '',
		},
		{
			id: 10,
			title: 'Recipe Manager Mobile Application',
			img: IMG10,
			link: 'https://github.com/huybq26/Recipe-Mangager',
			github: 'https://github.com/huybq26/Recipe-Mangager',
			description:
				'This is one of my personal projects on cross-platform mobile application development using React Native. ',
			additionalDesc:
				'In this application, user can use an available wide range of recipes in many different cultures, as well as adding/removing/starring recipes based on their choice.',
		},
		{
			id: 11,
			title: 'Coffee Store Manager Application',
			img: IMG2,
			link: 'https://github.com/huybq26/CoffeeStoreManager',
			github: 'https://github.com/huybq26/CoffeeStoreManager',
			description:
				'Coursework project: Object-Oriented Programming and Design. A Java console-based application for coffee store to add, delete, show details of available beverages in the store.',
		},
		{
			id: 12,
			title: 'Java-based Snake Game',
			img: IMG12,
			link: 'https://github.com/huybq26/Snake-Game',
			github: 'https://github.com/huybq26/Snake-Game',
			description:
				'A simple Snake Game written in Java, using Java Swing, JFrame.',
		},
	];

	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Notable Projects</h2>
			<h5
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					color: '#cccccc',
					// marginRight: '8rem',
					marginTop: '-2.5rem',
					marginBottom: '2rem',
				}}
			>
				*Click on each image to see project details.
			</h5>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'
			>
				<DialogTitle id='scroll-dialog-title'>Details</DialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id='scroll-dialog-description'
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{soloProjects[projectNum].description}
						<br></br>
						{soloProjects[projectNum].additionalDesc}
					</DialogContentText>
					<br></br>
					<img src={soloProjects[projectNum].img}></img>
				</DialogContent>
				<DialogActions>
					{/* <a href={soloProjects[projectNum].github} className='btn'>
						GitHub
					</a>
					<a href={soloProjects[projectNum].link} className='btn btn-primary'>
						Live Demo
					</a> */}
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
			<div className='container portfolio__container'>
				{soloProjects.map((pro) => (
					<article className='portfolio__item' key={pro.id}>
						<div
							className='portfolio__item-image'
							onClick={handleClickOpen(pro.id - 1)}
						>
							<img src={pro.img} alt={pro.title} />
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<h3
								onClick={handleClickOpen(pro.id - 1)}
								style={{ textAlign: 'center' }}
							>
								{pro.title}
							</h3>
							<div
								className='portfolio__item-cta'
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-around',
								}}
							>
								<a target='_blank' href={pro.github} className='btn'>
									GitHub
								</a>
								<a
									target='_blank'
									style={{ marginLeft: 15 }}
									href={pro.link}
									className='btn btn-primary'
								>
									Live Demo
								</a>
							</div>
						</div>

						{/* <div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								// marginRight: 20,
							}}
						>
							<Button
								style={{ background: 'white' }}
								onClick={handleClickOpen(pro.id - 1)}
							>
								View Details
							</Button>
						</div> */}
					</article>
				))}
			</div>
			<h5
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					color: '#cccccc',
					marginTop: '2.5rem',
				}}
			>
				*For more projects, please visit my{' '}
				<a
					target='_blank'
					href='https://github.com/huybq26'
					style={{ marginLeft: 5, marginRight: 5 }}
				>
					Github
				</a>{' '}
				page!
			</h5>
		</section>
	);
};

export default Portfolio;
