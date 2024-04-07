import logoWhite from "/kasa_white.svg";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_content">
        <img src={logoWhite} alt="Logo Kasa blanc" />
        <p>&copy; 2020 - {currentYear} Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
