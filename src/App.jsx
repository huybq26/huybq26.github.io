import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Experience from './components/experience/Experience';

const App = () => {
	return (
		<>
			<Header />
			<Topbar />
			<Intro />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
