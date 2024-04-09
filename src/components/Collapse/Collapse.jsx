import PropTypes from "prop-types";
import "./collapse.scss";

const Collapse = ({ title, content, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  const toggleCollapse = () => {
    setActiveIndex(isOpen ? 0 : index);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button className="collapse_button" onClick={toggleCollapse}>
        {title}
        <i className={`fa-solid fa-chevron-up ${isOpen ? "active" : ""}`}></i>
      </button>
      <div className={`collapse_content ${isOpen ? "active" : "close"}`}>
        {content}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

export default Collapse;
