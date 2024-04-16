import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./carrousel.scss";

const Carrousel = ({ ...props }) => {
  // ...props = { title, pictures, cover, id }
  const [currentSlide, setCurrentSlide] = useState(0);
  const { housingId } = useParams();

  function nextSlide() {
    setCurrentSlide(
      currentSlide === props.pictures.length - 1 ? 0 : currentSlide + 1
    );
  }

  function previousSlide() {
    setCurrentSlide(
      currentSlide === 0 ? props.pictures.length - 1 : currentSlide - 1
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="slider">
        {props.pictures.length > 1 && (
          <>
            <div className="slider__nav">
              <button
                onClick={previousSlide}
                className="slider__nav__prev slider__nav__btn"
                aria-label="previous slide"
                value="previousSlide"
              >
                <span className="fa-solid fa-chevron-left"></span>
              </button>
              <button
                onClick={nextSlide}
                className="slider__nav__next slider__nav__btn"
                aria-label="next slide"
                value="nextSlide"
              >
                <span className="fa-solid fa-chevron-right"></span>
              </button>
            </div>
            <div className="number_item">
              <span>
                {currentSlide + 1} / {props.pictures.length}
              </span>
            </div>
          </>
        )}
        <div className="wrapper">
          <div className="wrapper__item">
            {props.pictures.map((picture, index) => (
              <img
                key={index + housingId}
                src={picture}
                alt={`Photos de la location : ${props.title} en détail`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Carrousel;
