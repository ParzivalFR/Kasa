import { NavLink } from "react-router-dom";
import "./header.scss";
import logoRed from "/kasa_red.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <img src={logoRed} alt="Logo du site Kasa" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;