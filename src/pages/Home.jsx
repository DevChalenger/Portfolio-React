import IntroductionHome from "../components/home/IntroductionHome";
import PreviewProjectHome from "../components/home/PreviewProjectHome";

import "../styles/css/pages/home.css";

const Home = () => {
  return (
    <main className="app-main-container app-home-main">
      <header>
        <h1>Home</h1>
      </header>
      <IntroductionHome />
      <PreviewProjectHome />
    </main>
  );
};

export default Home;
