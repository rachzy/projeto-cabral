import { useEffect, useState } from "react";
import "./LogoSlider.css";
import { Link } from "react-router-dom";

export interface ILogoSlide {
  image: string;
  page?: string;
}

interface IProps {
  slides: ILogoSlide[];
}

const LogoSlider: React.FC<IProps> = ({ slides }) => {
  const [firstSlide, setFirstSlide] = useState(0);

  function renderSlides() {
    return slides.map((logo, index) => {
      if (logo.page) {
        return (
          <Link
            key={logo.image}
            to={logo.page}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo.image}
              className={`logo ${
                index >= firstSlide && index <= firstSlide + 3 && "active"
              }`}
            />
          </Link>
        );
      }
      return (
        <img
          key={logo.image}
          src={logo.image}
          className={`logo ${
            index >= firstSlide && index <= firstSlide + 3 && "active"
          }`}
        />
      );
    });
  }

  function renderDots() {
    return slides.map((logo, index) => {
      if (index % 4 !== 0) return null;
      return (
        <div
          key={logo.image}
          className={`dot ${index === firstSlide && "active"}`}
        ></div>
      );
    });
  }

  useEffect(() => {
    setInterval(() => {
      setFirstSlide((currentValue) => {
        if (currentValue + 4 >= slides.length - 1) return 0;
        return currentValue + 4;
      });
    }, 4000);
  }, []);

  return (
    <div className="logo-slider">
      <div>{renderSlides()}</div>
      <div className="dots">{renderDots()}</div>
    </div>
  );
};

export default LogoSlider;
