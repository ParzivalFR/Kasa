import PropTypes from "prop-types";
import { useCollapse } from "../../utils/useCollapse";
import "./collapse.scss";

const Collapse = ({ title, content }) => {
  const { isActive, setIsActive } = useCollapse();
  const isOpen = title === isActive;
  const toggleActive = () => {
    setIsActive(isOpen ? 0 : title);
  };

  return (
    <>
      <div className="container_collapse">
        <button
          className={`collapsible ${isOpen ? "active" : ""}`}
          value="Collapse button"
          onClick={toggleActive}
        >
          {title}
          <span
            className={`fa-solid fa-chevron-up ${isOpen ? "active" : ""}`}
          ></span>
        </button>
        <div className={`content ${isOpen ? "active" : ""}`}>
          <div className={`content_collapse ${isOpen ? "active" : ""}`}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  isActive: PropTypes.node.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Collapse;
