import { ReactComponent as HtmlLogo } from "../../assets/about/html.svg";
import { ReactComponent as CssLogo } from "../../assets/about/css.svg";
import { ReactComponent as SassLogo } from "../../assets/about/sass.svg";
import { ReactComponent as JavascriptLogo } from "../../assets/about/javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/about/react.svg";
import { ReactComponent as ReduxLogo } from "../../assets/about/redux.svg";
import { ReactComponent as NodeJsLogo } from "../../assets/about/nodejs.svg";
import { ReactComponent as GitLogo } from "../../assets/about/git.svg";
import { ReactComponent as MySqlLogo } from "../../assets/about/mysql.svg";
import { ReactComponent as JestLogo } from "../../assets/about/jest.svg";
import { ReactComponent as FigmaLogo } from "../../assets/about/figma.svg";
import { ReactComponent as VsCodeLogo } from "../../assets/about/vscode.svg";
import { ReactComponent as PostmanLogo } from "../../assets/about/postman.svg";

import useTheme from "../../utils/Theme";

const AboutArticleSkills = () => {
  const { currentTheme } = useTheme();
  return (
    <article className="app-about-article app-about-article-skills">
      <header className="app-about-article-header">
        <h2 className={`app-about-article-title ${currentTheme}`}>Skills</h2>
      </header>
      <div className="app-about-article-skills-container">
        <header className="app-about-article-section-header">
          <h3 className="app-about-article-section-title">
            Programing Knowledge
          </h3>
        </header>
        <ul className="app-about-article-skills-list">
          <li className="app-about-article-skills-item">
            <HtmlLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">HTML</div>
          </li>
          <li className="app-about-article-skills-item">
            <CssLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">CSS</div>
          </li>
          <li className="app-about-article-skills-item">
            <SassLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Sass</div>
          </li>
          <li className="app-about-article-skills-item">
            <JavascriptLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">JavaScript</div>
          </li>
          <li className="app-about-article-skills-item">
            <ReactLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">React</div>
          </li>
          <li className="app-about-article-skills-item">
            <ReduxLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Redux</div>
          </li>
          <li className="app-about-article-skills-item">
            <NodeJsLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Node JS</div>
          </li>
          <li className="app-about-article-skills-item">
            <GitLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Git</div>
          </li>
          <li className="app-about-article-skills-item">
            <MySqlLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">MySQL</div>
          </li>
          <li className="app-about-article-skills-item">
            <JestLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Jest</div>
          </li>
          <li className="app-about-article-skills-item">
            <FigmaLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Figma</div>
          </li>
          <li className="app-about-article-skills-item">
            <PostmanLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Postman</div>
          </li>
          <li className="app-about-article-skills-item">
            <VsCodeLogo className="app-about-article-skills-logo" />
            <div className="app-about-article-skills-preview">Vs Code</div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default AboutArticleSkills;
