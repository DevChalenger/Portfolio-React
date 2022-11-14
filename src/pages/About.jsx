import "../styles/css/pages/about.css";
import HeaderMain from "../components/HeaderMain";
import AboutArticleSkills from "../components/about/AboutArticleSkills";
import TitlePage from "../utils/TitlePage";

const About = () => {
  return (
    <main className="app-main-container app-about-main">
      <TitlePage title={"About"} />
      <HeaderMain Title={"About"} />
      <section className="app-about-section">
        <AboutArticleSkills />
      </section>
    </main>
  );
};

export default About;
