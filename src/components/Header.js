import { NavLink } from "react-router-dom";

const Header = () => {
  const handleActiveLink = (isActive) => {
    return isActive ? "active-link" : "";
  };

  return (
    <header>
      <div className="logo">
        <h1>LA Dashy</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => handleActiveLink(isActive)}
              to="/"
            >
              Stone Engraving
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => handleActiveLink(isActive)}
              to="/top-engravings"
            >
              Top Engravings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => handleActiveLink(isActive)}
              to="/builds"
            >
              Builds
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
