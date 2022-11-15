import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../redux/selector";
import * as themeActions from "../redux/features/reducers/theme";

import { ReactComponent as Sun } from "../assets/SVG/sun.svg";
import { ReactComponent as Moon } from "../assets/SVG/moon.svg";
import { ReactComponent as Mail } from "../assets/SVG/mail.svg";
import { ReactComponent as Github } from "../assets/SVG/github.svg";
import { ReactComponent as Linkedin } from "../assets/SVG/linkedin.svg";

import "../styles/css/components/footer.css";

const Footer = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const date = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <button
        className="app-button-theme-toggle"
        onClick={() => dispatch(themeActions.toggle())}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
      <p>©{date} DevChalenger. All rights reserved</p>

      <ul className="app-footer-social-list">
        <li className="app-footer-social-item mail">
          <a href="mailto:ilyas.boukhechem@gmail.com" alt="link-mail">
            <Mail />
          </a>
        </li>
        <li className="app-footer-social-item linkedin">
          <a
            href="https://www.linkedin.com/in/ilyas-boukhechem/"
            alt="link-likedin"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li className="app-footer-social-item">
          <a
            href="https://github.com/DevChalenger"
            alt="link-github"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
