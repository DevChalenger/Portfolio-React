import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/components/header.css";
import useTheme from "../utils/Theme";

/**
 * @function Header
 */
const Header = () => {
  const { currentTheme } = useTheme();
  return (
    <header className="app-header">
      <div className="app-header-title">
        <h1>Ilyas Boukhechem</h1>
        <span>Software React developer</span>
      </div>
      <nav className="app-header-nav">
        <ul className="app-header-nav-list">
          <li className={`app-header-nav-item ${currentTheme}`}>
            <Link to="/" className="app-header-nav-link">
              Home
            </Link>
          </li>
          <li className={`app-header-nav-item ${currentTheme}`}>
            <Link to="/project" className="app-header-nav-link">
              Projects
            </Link>
          </li>
          <li className={`app-header-nav-item ${currentTheme}`}>
            <Link to="/about" className="app-header-nav-link">
              About
            </Link>
          </li>
          <li className={`app-header-nav-item ${currentTheme}`}>
            <Link to="/contact" className="app-header-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
