import { ReactComponent as Heart } from "../../assets/home/heart.svg";
import data from "../../__mocks__/MOCK_DATA.json";
import Carousel from "./hobby/Carousel";

const InterestHome = () => {
  return (
    <section className="app-home-section">
      <header className="app-home-section-header">
        <h2 className="app-home-section-title">Here is my hobby</h2>
        <Heart className="app-home-section-header-icon" />
      </header>
      <section className="app-home-hobby-carousel-container">
        {data.map((hobby, index) => (
          <Carousel data={hobby} key={index} />
        ))}
      </section>
    </section>
  );
};

export default InterestHome;
