import PropTypes from "prop-types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./carrousel.scss";

const Carrousel = ({ ...props }) => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper__item">
      {props.pictures.map((picture, index) => (
        <img key={index + id} src={picture} alt={`${props.title}`} />
      ))}
    </div>
  );
};

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Carrousel;
