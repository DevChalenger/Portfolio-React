import { Link, useLocation } from "react-router-dom";

const NavbarLink = ({ name, path }) => {
  const currentPath = useLocation().pathname;

  return (
    <li
      className={`app-header-nav-item  ${
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
