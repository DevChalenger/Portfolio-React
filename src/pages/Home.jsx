import IntroductionHome from "../components/home/IntroductionHome";
import PreviewProjectHome from "../components/home/PreviewProjectHome";
import HeaderMain from "../components/HeaderMain";

import "../styles/css/pages/home.css";

const Home = () => {
  return (
    <main className="app-main-container app-home-main">
      <HeaderMain Title={"Home"} />
      <IntroductionHome />
      <PreviewProjectHome />
    </main>
  );
};

export default Home;
