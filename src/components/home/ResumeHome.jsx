import LinkPDF from "./resume/LinkPDF";

import { ReactComponent as Download } from "../../assets/home/download.svg";

const Resume = () => {
  return (
    <section className="app-home-section">
      <header className="app-home-section-header">
        <h2 className="app-home-section-title">Here is my Resume</h2>
        <Download className="app-home-section-header-icon" />
      </header>
      <article className="app-home-article app-resume-container">
        <LinkPDF langue={"French"} />
        <LinkPDF langue={"English"} />
      </article>
    </section>
  );
};

export default Resume;
