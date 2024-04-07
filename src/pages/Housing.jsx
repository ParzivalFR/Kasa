import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import ScrollToTopButton from "../components/Top/Top";
import { useFetch } from "../utils/useFetch";

const Housing = () => {
  const { fetchedData } = useFetch(`/data.json`);
  const { id } = useParams();

  function nextSlide() {
    const slider = document.querySelector(".slider").offsetWidth;
    const wrapperItem = document.querySelector(".wrapper__item");
    wrapperItem.scrollLeft += slider;
    if (wrapperItem.scrollLeft >= wrapperItem.scrollWidth - slider) {
      wrapperItem.scrollLeft = 0;
    }
  }

  function previousSlide() {
    const slider = document.querySelector(".slider").offsetWidth;
    const wrapperItem = document.querySelector(".wrapper__item");
    wrapperItem.scrollLeft -= slider;
    if (wrapperItem.scrollLeft === 0) {
      wrapperItem.scrollLeft = wrapperItem.scrollWidth - slider;
    }
  }

  // Vérifiez si fetchedData est null avant d'accéder à ses propriétés
  const currentHousing =
    fetchedData && fetchedData.find((item) => item.id === id);

  return (
    <>
      <Header />
      <main>
        <div className="slider">
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
          <div className="wrapper">
            {currentHousing ? (
              <Carrousel
                key={currentHousing.id}
                id={currentHousing.id}
                cover={currentHousing.cover}
                title={currentHousing.title}
                pictures={currentHousing.pictures}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Housing;
