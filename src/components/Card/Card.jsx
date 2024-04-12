import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ ...props }) => {
  return (
    <figure className="container_card">
      {props ? (
        <Link to={`/housing/${props.id}`} className="card">
          <img
            src={props.cover}
            alt={`Photo de la location : ${props.title}`}
            className="card__img"
          />
          <figcaption className="card__title">{props.title}</figcaption>
        </Link>
      ) : (
        props.loader
      )}
    </figure>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  loader: PropTypes.element.isRequired,
};

export default Card;
