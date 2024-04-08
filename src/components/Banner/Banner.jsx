import PropTypes from "prop-types";
import "./banner.scss";

const BannerAbout = ({ imageUrl, title }) => {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img src={imageUrl} alt="Banner" className="banner__image" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

BannerAbout.propTypes = {
  imageUrl: PropTypes.node.isRequired,
  title: PropTypes.node,
};

export default BannerAbout;
