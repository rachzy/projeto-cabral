import React, { useEffect, useState } from "react";
import "./Slider.css";

import SliderRight from "../../assets/images/buttons/slider-right.png";
import SliderLeft from "../../assets/images/buttons/slider-left.png";

interface IProps {
  images: string[];
  floatingDots?: boolean;
}

const Slider: React.FC<IProps> = ({ images, floatingDots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlideButtonClick() {
    setCurrentSlide((currentValue) => {
      if (currentValue >= images.length - 1) return 0;
      return currentValue + 1;
    });
  }

  function handlePreviousSlideButtonClick() {
    setCurrentSlide((currentValue) => {
      if (currentValue === 0) return images.length - 1;
      return currentValue - 1;
    });
  }

  function renderImages() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`slide ${index === currentSlide && "active"}`}
        >
          <img src={image} />
        </div>
      );
    });
  }

  function renderDots() {
    return images.map((image, index) => {
      return (
        <div
          key={image}
          className={`dot ${index === currentSlide && "active"}`}
        />
      );
    });
  }

  useEffect(() => {
    setInterval(handleNextSlideButtonClick, 5000);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="buttons">
          <button onClick={handlePreviousSlideButtonClick}>
            <img src={SliderLeft} />
          </button>
          <button onClick={handleNextSlideButtonClick}>
            <img src={SliderRight} />
          </button>
        </div>
        {floatingDots && <div className="dots float">{renderDots()}</div>}

        <div className="slides">{renderImages()}</div>
      </div>
      {!floatingDots && <div className="dots">{renderDots()}</div>}
    </>
  );
};

export default Slider;
