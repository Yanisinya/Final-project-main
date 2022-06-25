import React from "react";
import errorImg from "../../../assets/errorPageImg.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <article className="error-page">
      <div className="error-page-text">
        <h1>404</h1>
        <h2>Страница не найдена, вернитесь на <Link to="/">главную</Link></h2>
      </div>
      <img
        className="error-page__item"
        src={errorImg}
        alt="Ошибка"
      />
    </article>
  );
}

export default ErrorPage;
