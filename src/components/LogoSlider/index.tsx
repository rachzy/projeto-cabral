import { useState, useCallback, memo } from "react";
import "./LogoSlider.css";
import { Link } from "react-router-dom";

export interface ILogoSlide {
  image: string;
  page?: string;
}

interface IProps {
  slides: ILogoSlide[];
}

const LogoSlider: React.FC<IProps> = memo(({ slides }) => {
  const [firstSlide, setFirstSlide] = useState(0);

  const renderSlides = useCallback(() => {
    return slides.map((logo, index) => {
      if (logo.page) {
        return (
          <Link
            key={index}
            to={logo.page}
            className={
              (index >= firstSlide && index <= firstSlide + 3 && "active") || ""
            }
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo.image} className={"logo"} />
          </Link>
        );
      }
      return (
        <img
          key={index}
          src={logo.image}
          className={`logo ${
            index >= firstSlide && index <= firstSlide + 3 && "active"
          }`}
        />
      );
    });
  }, [slides, firstSlide]);

  function handleDotMouseOuver(index: number) {
    setFirstSlide(index * 4);
  }

  const renderDots = useCallback(() => {
    return slides.map((logo, index) => {
      if (index % 4 !== 0) return null;
      return (
        <div
          key={logo.image}
          className={`dot ${index === firstSlide && "active"}`}
          style={{ width: "2vh", height: "2vh" }}
          onMouseOver={handleDotMouseOuver.bind(this, index / 4)}
        ></div>
      );
    });
  }, [slides, firstSlide]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFirstSlide((currentValue) => {
  //       if (currentValue + 4 >= slides.length - 1) return 0;
  //       return currentValue + 4;
  //     });
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [slides, firstSlide]);

  return (
    <div className="logo-slider">
      <div className="sliders">{renderSlides()}</div>
      <div className="dots">{renderDots()}</div>
    </div>
  );
});

export default LogoSlider;
