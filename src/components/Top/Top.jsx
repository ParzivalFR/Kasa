import "./top.scss";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
