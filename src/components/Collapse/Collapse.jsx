import PropTypes from "prop-types";
import { useState } from "react";
import "./collapse.scss";

const Collapse = ({ title, content, index }) => {
  const [isActive, setIsActive] = useState(false);
  const isOpen = index === isActive;

  const toggleActive = () => {
    setIsActive(isOpen ? 0 : index);
  };

  return (
    <>
      <div className="container_collapse">
        <button
          className={`collapsible ${isActive ? "active" : ""}`}
          onClick={toggleActive}
        >
          {title}
          <span
            className={`fa-solid fa-chevron-up ${isActive ? "active" : ""}`}
          ></span>
        </button>
        <div className={`content ${isActive ? "active" : ""}`}>
          <ul className={`content_collapse ${isOpen ? "active" : ""}`}>
            {content}
          </ul>
        </div>
      </div>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

export default Collapse;
