import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/SVG/arrow.svg";

const ButtonCarouselHobby = ({
  carouselData,
  currentSlider,
  setCurrentSlider,
  isPrevious,
}) => {
  const [animButton, setAnimButton] = useState(false);
  const [canBeClicked, setCanBeClicked] = useState(true);

  const previousSlider = () => {
    setAnimButton(true);
    setCanBeClicked(false);
    if (currentSlider > 0) {
      setCurrentSlider(currentSlider - 1);
    } else {
      setCurrentSlider(carouselData.data.length - 1);
    }
  };

  const nextSlider = () => {
    setAnimButton(true);
    setCanBeClicked(false);
    if (currentSlider === carouselData.data.length - 1) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };
  return isPrevious ? (
    <Arrow
      className={`app-home-hobby-caroussel-button-icon ${
        animButton ? "isClicked" : ""
      } previous`}
      onClick={canBeClicked ? previousSlider : ""}
      onAnimationEnd={() => {
        setAnimButton(false);
        setCanBeClicked(true);
      }}
    />
  ) : (
    <Arrow
      className={`app-home-hobby-caroussel-button-icon ${
        animButton ? "isClicked" : ""
      } next`}
      onClick={canBeClicked ? nextSlider : ""}
      onAnimationEnd={() => {
        setAnimButton(false);
        setCanBeClicked(true);
      }}
    />
  );
};

export default ButtonCarouselHobby;
