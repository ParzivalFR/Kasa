/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
    <section className="error_container">
      <h1 className="error_title">404</h1>
      <p className="error_text">
        Oups! La page que{" "}
        <span className="break">vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};

export default Error;
