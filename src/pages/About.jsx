import "../styles/css/pages/about.css";
import HeaderMain from "../components/HeaderMain";
import AboutArticleSkills from "../components/about/AboutArticleSkills";

const About = () => {
  return (
    <main className="app-main-container app-about-main">
      <HeaderMain Title={"About"} />
      <section className="app-about-section">
        <AboutArticleSkills />
      </section>
    </main>
  );
};

export default About;
