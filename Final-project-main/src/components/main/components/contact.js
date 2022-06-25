import React from "react";
import { Link } from 'react-router-dom';
import CrossIcon from "../../../assets/cross.svg"

const Contact = () => {
    return (
        <div className="container contact-container">	
			<div className="close-cross">
				<Link to='/'>
					<img src={CrossIcon} alt='cross icon' className="cross"/>
				</Link>
			</div>		
			<div className="contact-block">
				<h2>Контакты</h2>
				<span>Адрес: г. Сочи, ул. Медвеедово 2/3</span>
				<a className="contact-link" href="mailto:Bear@mail.ru">
					Почта: raccoon@yahoo.com
				</a>
				<a className="contact-link" href="tel:+79707000000">
					Телефон: +7 (970)-700-00-00
				</a>
			</div>
        </div>
    );
}

export default Contact;