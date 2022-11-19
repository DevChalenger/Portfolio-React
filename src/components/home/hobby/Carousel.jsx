import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/SVG/arrow.svg";

const Carousel = ({ carouselData }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const previousSlider = () => {
    if (currentSlider > 0) {
      setCurrentSlider(currentSlider - 1);
    } else {
      setCurrentSlider(carouselData.data.length - 1);
    }
  };

  const nextSlider = () => {
    if (currentSlider === carouselData.data.length - 1) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };

  return (
    <article className="app-home-hobby-caroussel-article">
      <header className="app-home-hobby-caroussel-header">
        <h3 className="app-home-hobby-caroussel-title">{carouselData.title}</h3>
      </header>
      <div className="app-home-hobby-caroussel-slider">
        <div className="app-home-hobby-caroussel-button-container">
          <Arrow
            className="app-home-hobby-caroussel-button-icon previous"
            onClick={previousSlider}
          />

          <Arrow
            className="app-home-hobby-caroussel-button-icon next"
            onClick={nextSlider}
          />
        </div>
        {carouselData.data.map((hobby, index) => (
          <div
            className={`app-home-hobby-carousel-information ${
              index === currentSlider ? "active" : "inactive"
            } `}
            key={index}
          >
            <div className="app-home-hobby-caroussel-picture-container">
              <img
                src={hobby.img}
                alt={`${hobby.name}`}
                className="app-home-hobby-caroussel-picture"
              />
            </div>
            <h4 className="app-home-hobby-caroussel-name">{hobby.name}</h4>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Carousel;
