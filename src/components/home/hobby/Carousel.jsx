import { useState } from "react";

import ButtonCarouselHobby from "./ButtonCarouselHobby";

const Carousel = ({ carouselData }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <article className="app-home-hobby-caroussel-article">
      <header className="app-home-hobby-caroussel-header">
        <h3 className="app-home-hobby-caroussel-title">{carouselData.title}</h3>
      </header>
      <div className="app-home-hobby-caroussel-slider">
        <div className="app-home-hobby-caroussel-button-container">
          <ButtonCarouselHobby
            isPrevious={true}
            carouselData={carouselData}
            currentSlider={currentSlider}
            setCurrentSlider={setCurrentSlider}
          />
          <ButtonCarouselHobby
            isPrevious={false}
            carouselData={carouselData}
            currentSlider={currentSlider}
            setCurrentSlider={setCurrentSlider}
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
                src={require(`../../../assets/home/hobby-picture/${hobby.img}.jpg`)}
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
