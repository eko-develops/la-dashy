import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>LA Dashy</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/stone-engravings">Stone Engraving</Link>
          </li>
          <li>
            <Link to="/top-engravings">Top Engravings</Link>
          </li>
          <li>
            <Link to="/builds">Builds</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
