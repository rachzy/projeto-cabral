import React from "react";
import Slider from "../../components/Slider/index";

import sliderBanner from "../../assets/images/sliders/capa.jpg";
import slide1 from "../../assets/images/sliders/inicial-1.jpg";
import slide2 from "../../assets/images/sliders/inicial-2.jpg";
import slide3 from "../../assets/images/sliders/inicial-3.jpg";

const Index = () => {
  const sliderImages = [slide1, sliderBanner, slide2, slide3];
  return (
    <main>
      <section>
        <Slider images={sliderImages} />
      </section>
    </main>
  );
};

export default Index;
