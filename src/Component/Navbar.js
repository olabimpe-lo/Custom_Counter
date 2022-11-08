import React from "react";
import { Link } from "react-router-dom";
//import "./index.css";

const path = window.location.pathname;
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="company-site">
          Custom Counter
        </Link>
        <ul>
          <li className="nav_features">
            <Link to="/">Counter Two</Link>
          </li>
          <li>
            <Link to="/custom-hook">Counter One</Link>
          </li>
          <li>
            <Link to="/error-occurred">ErrorBoundary</Link>
          </li>
          <li>
            <Link to="/page-not-found">ErrorPage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
