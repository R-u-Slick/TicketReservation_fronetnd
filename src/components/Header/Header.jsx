import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ role, name, userId, onLogout }) => {
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
                <NavLink
                  to={`/ordersList/${userId}`}
                  className="navigation__link"
                >
                  <div>{"Hello, " + name}</div>
                </NavLink>
                <div className="navigation__element__user__role">
                  logged as {role}
                </div>
                <div className="navigation__element__user__logout">
                  <a onClick={handleLogout}>Log out</a>
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
  userId: "",
  onLogout: () => {},
};

Header.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
  userId: PropTypes.string,
  onLogout: PropTypes.func,
};

export default Header;
