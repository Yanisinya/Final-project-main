import React from 'react';
import './main.scss';
import Button from '../button/button';
import AuthPage from './components/authPage';
import ErrorPage from './components/errorPage';
import CreateCase from './components/createCase';
import Contact from './components/contact';
import Cases from './components/cases';
import CaseDetailsWindow from '../DetailsWindow/caseDetailsWindow';
import { Routes, Route, Link } from 'react-router-dom';
import OfficersPage from './components/officers';
import OfficerDetailsWindow from '../DetailsWindow/officerDetailsWindow';

const Main = () => {
	const mainPage = (
		<article className="hero-content">
			<h1 className="hero-title">
				Пропал велосипед, не парься. 
				<Link to="create-case">
					<Button className="button hero-button" title="Пиши сюда, и он найдётся" />
				</Link> 
			</h1>
		</article>
	);

	return (
		<main className="container main-container">
			<Routes>
				<Route path="/" exact element={mainPage} />
				<Route path="/auth" element={AuthPage()} />
				<Route path="/create-case" element={CreateCase()} />
				<Route path="/contact" element={Contact()}/>
				<Route path="/cases" element={Cases()} />
				<Route path="/cases/:caseID" element={<CaseDetailsWindow />} />
				<Route path="/officers" element={OfficersPage()} />
				<Route path="/officers/:officerID" element={<OfficerDetailsWindow />} />
				<Route path="*" element={ErrorPage()} />
			</Routes>
		</main>
	);
}

export default Main;
