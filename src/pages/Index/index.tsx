import React from "react";
import Slider from "../../components/Slider/index";

import "./Index.css";

import sliderBanner from "../../assets/images/sliders/capa.jpg";
import slide1 from "../../assets/images/sliders/inicial-1.jpg";
import slide2 from "../../assets/images/sliders/inicial-2.jpg";
import slide3 from "../../assets/images/sliders/inicial-3.jpg";
import InfoBox from "../../components/InfoBox/index";

const Index = () => {
  const sliderImages = [slide1, sliderBanner, slide2, slide3];
  return (
    <main>
      <section>
        <Slider images={sliderImages} />
        <div className="inline-wrapper">
          <InfoBox
            title="Missão"
            description="
            Atuar nos mercados de varejo e
            prestação de serviços, de forma
            ética, legal e responsável,
            desenvolvendo atividades que
            gerem resultados positivos aos
            nossos clientes, colaboradores,
            fornecedores e sociedade.
            "
            color="#0144b5"
          />
          <InfoBox
            title="Visão"
            description="
            Ser referência regional em
            gestão de negócios e pessoas
            e ser reconhecido como uma
            das melhores empresas para
            se trabalhar na cidade de
            Santa Juliana.
            "
            color="#e00109"
          />
          <InfoBox
            title="Missão"
            description="
            • Honestidade; <br />
            • Ética; <br />
            • Justiça; <br />
            • Transparência; <br />
            • Propósito.
            "
            color="#ffd100"
            style={{ color: "#0144b5" }}
          />
        </div>
      </section>
    </main>
  );
};

export default Index;
