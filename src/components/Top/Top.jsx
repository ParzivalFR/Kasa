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
      &#129145;
    </button>
  );
};

export default ScrollToTopButton;
