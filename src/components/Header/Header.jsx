import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ role, name, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };
  return (
    <header className="header">
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
            {role ? (
              <div className="navigation__element__user">
                <div>{"Hello, " + name}</div>
                <div>
                  <a
                    className="navigation__element__user__logout"
                    onClick={handleLogout}
                  >
                    Log out
                  </a>
                </div>
              </div>
            ) : (
              <NavLink to="/login" className="navigation__link">
                Log in
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  role: "",
  name: "",
  onLogout: () => {},
};

Header.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

export default Header;
