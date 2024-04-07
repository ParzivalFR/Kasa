import { useState } from "react";
import "./top.scss";

const ScrollToTopButton = () => {
  const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setClicked(true); // Définir clicked à true lors du clic
    setTimeout(() => {
      setClicked(false); // Réinitialiser clicked après un court délai
    }, 1000); // Ajustez le délai
  };

  return (
    <button
      className={`scroll-to-top ${clicked ? "clicked" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
