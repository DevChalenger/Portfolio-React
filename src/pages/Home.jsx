import IntroductionHome from "../components/home/IntroductionHome";
import PreviewProjectHome from "../components/home/PreviewProjectHome";
import HeaderMain from "../components/HeaderMain";

import "../styles/css/pages/home.css";
import HobbyHome from "../components/home/HobbyHome";
import TitlePage from "../utils/TitlePage";
import SkillsHome from "../components/home/SkillsHome";
import Resume from "../components/home/ResumeHome";

const Home = () => {
  return (
    <main className="app-main-container app-home-main">
      <TitlePage title={"Home"} />
      <HeaderMain Title={"Home"} />
      <IntroductionHome />
      <PreviewProjectHome />
      <SkillsHome />
      <HobbyHome />
      <Resume />
    </main>
  );
};

export default Home;
