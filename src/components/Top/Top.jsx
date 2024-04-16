import { useState } from "react";
import "./top.scss";

const ScrollToTopButton = () => {
  const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <button
      className={`scroll-to-top ${clicked ? "clicked" : ""}`}
      aria-label="Scroll to top"
      value="Scroll to top"
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
