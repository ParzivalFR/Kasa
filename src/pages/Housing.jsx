import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import ScrollToTopButton from "../components/Top/Top";
import { useFetch } from "../utils/useFetch";
import NotFound from "./NotFound";

const Housing = () => {
  const { fetchedData } = useFetch(`/data.json`);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return <Loader />;
  }

  if (!currentHousing) {
    return (
      <>
        <NotFound />
      </>
    );
  } else {
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
              <Carrousel
                key={currentHousing.id}
                id={currentHousing.id}
                cover={currentHousing.cover}
                title={currentHousing.title}
                pictures={currentHousing.pictures}
              />
            </div>
          </div>
          <ScrollToTopButton />
        </main>
        <Footer />
      </>
    );
  }
};

export default Housing;
