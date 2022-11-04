import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../redux/selector";
import * as themeActions from "../redux/features/reducers/theme";
import "../styles/css/components/footer.css";
import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as Moon } from "../assets/SVG/moon.svg";
const Footer = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const date = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>©{date} DevChalenger. All rights reserved</p>
      <button
        className="app-button-theme-toggle"
        onClick={() => dispatch(themeActions.toggle())}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </footer>
  );
};

export default Footer;
