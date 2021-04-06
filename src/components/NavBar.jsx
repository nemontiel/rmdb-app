import { Link } from "react-router-dom";
import "./NavBar.styles.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <div className="name">
        <Link to="/">
          <h1>RMDB</h1>
        </Link>
      </div>

      <div className="search">
        <Link to="/search">
          <h2>Search Movie</h2>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
