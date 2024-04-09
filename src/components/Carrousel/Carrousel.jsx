import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./carrousel.scss";

const Carrousel = ({ ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { id } = useParams();

  function nextSlide() {
    const slider = document.querySelector(".slider").offsetWidth;
    const wrapperItem = document.querySelector(".wrapper__item");
    wrapperItem.scrollLeft += slider;
    if (wrapperItem.scrollLeft >= wrapperItem.scrollWidth - slider) {
      wrapperItem.scrollLeft = 0;
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function previousSlide() {
    const slider = document.querySelector(".slider").offsetWidth;
    const wrapperItem = document.querySelector(".wrapper__item");
    wrapperItem.scrollLeft -= slider;
    if (wrapperItem.scrollLeft === 0) {
      wrapperItem.scrollLeft = wrapperItem.scrollWidth - slider;
      setCurrentSlide(props.pictures.length);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="slider">
      {props.pictures.length > 1 && (
        <div className="slider__nav">
          <button
            onClick={previousSlide}
            className="slider__nav__prev slider__nav__btn"
            aria-label="previous slide"
          >
            <span className="fa-solid fa-chevron-left"></span>
          </button>
          <button
            onClick={nextSlide}
            className="slider__nav__next slider__nav__btn"
            aria-label="next slide"
          >
            <span className="fa-solid fa-chevron-right"></span>
          </button>
        </div>
      )}
      <div className="wrapper">
        <div className="wrapper__item">
          {props.pictures.map((picture, index) => (
            <img key={index + id} src={picture} alt={`${props.title}`} />
          ))}
        </div>
      </div>
      <div className="number_item">
        <span>
          {currentSlide} / {props.pictures.length}
        </span>
      </div>
    </div>
  );
};

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Carrousel;
