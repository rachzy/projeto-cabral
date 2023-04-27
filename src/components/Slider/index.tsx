import React, { useEffect, useState } from "react";
import "./Slider.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IProps {
  images: string[];
}

const Slider: React.FC<IProps> = ({ images }) => {
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
        <img
          key={image}
          src={image}
          className={`slide ${index === currentSlide && "active"}`}
        />
      );
    });
  }

  function renderDots() {
    return images.map((image, index) => {
      return (
        <div
          key={index}
          className={`dot ${index === currentSlide && "active"}`}
        />
      );
    });
  }

  useEffect(() => {
    setInterval(handleNextSlideButtonClick, 5000);
  }, []);

  return (
    <div className="slider">
      <div className="buttons">
        <button onClick={handlePreviousSlideButtonClick}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNextSlideButtonClick}>
          <FaChevronRight />
        </button>
      </div>
      <div className="dots">{renderDots()}</div>
      <div className="slides">{renderImages()}</div>
    </div>
  );
};

export default Slider;
