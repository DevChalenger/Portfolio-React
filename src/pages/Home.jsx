import IntroductionHome from "../components/home/IntroductionHome";
import PreviewProjectHome from "../components/home/PreviewProjectHome";
import HeaderMain from "../components/HeaderMain";

import "../styles/css/pages/home.css";
import InterestHome from "../components/home/InterestHome";
import TitlePage from "../utils/TitlePage";

const Home = () => {
  return (
    <main className="app-main-container app-home-main">
      <TitlePage title={"Home"} />
      <HeaderMain Title={"Home"} />
      <IntroductionHome />
      <InterestHome />
    </main>
  );
};

export default Home;
