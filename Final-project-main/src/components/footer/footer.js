import React from 'react';
import './footer.scss';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer-wrapper">
			<div className="footer-ending">
				<nav className="footer-nav">
					<div className="footer-buttons-wrapper">
						<Link to="/">
							<Button title="Главная" className="button footer-button" />
						</Link>
						<Link to="/create-case">
							<Button title="Сообщить о краже" className="button footer-button" />
						</Link>
						<Link to="/contact">
							<Button title="Контакты" className="button footer-button" />
						</Link>
						<Link to="/auth">
							<Button title="Регистрация" className="button footer-button" />
						</Link>
					</div>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
