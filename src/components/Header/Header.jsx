import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="Header">
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__element">
          <NavLink to="/" className="navigation__logo">
            <b>Ticket</b>Shop
          </NavLink>
        </li>
        <li className="navigation__element">
          <NavLink to="/schedule" className="navigation__link">
            Schedule
          </NavLink>
        </li>
        <li className="navigation__element">
          <NavLink to="/movies" className="navigation__link">
            Movies
          </NavLink>
        </li>
        <li className="navigation__element">
          <NavLink to="/cinemas" className="navigation__link">
            Cinemas
          </NavLink>
        </li>
        <li className="navigation__element">
          <NavLink to="/login" className="navigation__link">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
