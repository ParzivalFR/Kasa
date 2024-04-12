import { NavLink } from "react-router-dom";
import "./header.scss";
import logoRed from "/kasa_red.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" className="img_link">
          <img src={logoRed} alt="Logo du site Kasa" />
        </NavLink>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
