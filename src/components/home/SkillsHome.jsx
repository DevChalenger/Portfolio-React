import { ReactComponent as HtmlLogo } from "../../assets/skills/html.svg";
import { ReactComponent as CssLogo } from "../../assets/skills/css.svg";
import { ReactComponent as SassLogo } from "../../assets/skills/sass.svg";
import { ReactComponent as JavascriptLogo } from "../../assets/skills/javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/skills/react.svg";
import { ReactComponent as ReduxLogo } from "../../assets/skills/redux.svg";
import { ReactComponent as NodeJsLogo } from "../../assets/skills/nodejs.svg";
import { ReactComponent as GitLogo } from "../../assets/skills/git.svg";
import { ReactComponent as MySqlLogo } from "../../assets/skills/mysql.svg";
import { ReactComponent as JestLogo } from "../../assets/skills/jest.svg";
import { ReactComponent as FigmaLogo } from "../../assets/skills/figma.svg";
import { ReactComponent as VsCodeLogo } from "../../assets/skills/vscode.svg";
import { ReactComponent as PostmanLogo } from "../../assets/skills/postman.svg";

import { ReactComponent as Skills } from "../../assets/home/brain.svg";

const SkillsHome = () => {
  return (
    <section className="app-home-section">
      <header className="app-home-section-header">
        <h2 className="app-home-section-title">
          Here is the skills i acquired
        </h2>
        <Skills className="app-home-section-header-icon" />
      </header>
      <article className="app-home-skills-container">
        <header className="app-home-skills-header">
          <h3>Programming Languages, Open Sources i learned and worked with</h3>
        </header>
        <ul className="app-home-skills-list">
          <li className="app-home-skills-item">
            <HtmlLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">HTML</span>
          </li>
          <li className="app-home-skills-item">
            <CssLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">CSS</span>
          </li>
          <li className="app-home-skills-item">
            <SassLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Sass</span>
          </li>
          <li className="app-home-skills-item">
            <JavascriptLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">JavaScript</span>
          </li>
          <li className="app-home-skills-item">
            <ReactLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">React</span>
          </li>
          <li className="app-home-skills-item">
            <ReduxLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Redux</span>
          </li>
          <li className="app-home-skills-item">
            <NodeJsLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Node JS</span>
          </li>
          <li className="app-home-skills-item">
            <GitLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Git</span>
          </li>
          <li className="app-home-skills-item">
            <MySqlLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">MySQL</span>
          </li>
          <li className="app-home-skills-item">
            <JestLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Jest</span>
          </li>
          <li className="app-home-skills-item">
            <FigmaLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Figma</span>
          </li>
          <li className="app-home-skills-item">
            <PostmanLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Postman</span>
          </li>
          <li className="app-home-skills-item">
            <VsCodeLogo className="app-home-skills-logo" />
            <span className="app-home-skills-preview">Vs Code</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default SkillsHome;
