import { Link, useLocation } from "react-router-dom";
import useTheme from "../utils/Theme";

const NavbarLink = ({ name, path }) => {
  const { currentTheme } = useTheme();
  const currentPath = useLocation().pathname;

  return (
    <li
      className={`app-header-nav-item ${currentTheme} ${
        currentPath === path ? "current-page" : ""
      }`}
    >
      <Link to={path} className={`app-header-nav-link `}>
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
