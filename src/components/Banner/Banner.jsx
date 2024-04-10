import PropTypes from "prop-types";
import "./banner.scss";

const BannerAbout = ({ imageUrl, title, opacity }) => {
  const overlayStyle = {
    opacity: opacity,
  };

  return (
    <div className="banner">
      <div className="banner__overlay" style={overlayStyle}></div>
      <img src={imageUrl} alt="Banner" className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

BannerAbout.propTypes = {
  imageUrl: PropTypes.node.isRequired,
  title: PropTypes.node,
  opacity: PropTypes.number,
};

export default BannerAbout;
