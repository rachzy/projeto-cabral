import { useState, useEffect } from "react";
import "./ScrollButton.css";

import ScrollUpButton from "../../assets/images/buttons/up-footer.png";

const ScrollButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.document.addEventListener("scroll", () => {
      setActive(window.scrollY > 300);
    });
  }, [scrollY]);

  function handleButtonClick() {
    window.scrollTo(0, 0);
  }
  return (
    <button
      onClick={handleButtonClick}
      className={`scroll-btn ${active && "active"}`}
    >
      <img src={ScrollUpButton} />
    </button>
  );
};

export default ScrollButton;
