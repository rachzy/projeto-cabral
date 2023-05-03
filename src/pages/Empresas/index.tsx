import { useParams } from "react-router-dom";
import "./Empresas.css";

import ClubeVipCabral from "../../assets/images/logos/clube-vip-cheaedr.png";
import Twenty4Logo from "../../assets/images/logos/24horas-header.png";
import ClubpetroBanner from "../../assets/images/logos/clube-petro-miolo.png";

import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

import LineTitle from "../../components/LineTitle";
import AdvantageBox from "../../components/AdvantageBox/index";

import companies from "../../data/companies";
import ImageBackground from "../../components/ImageBackground/index";

const Empresas = () => {
  const { companyId } = useParams();

  const company = companies.filter((companyIn) => companyIn.id === companyId)[0];

  function renderAdvantages() {
    if (!company.advantages) return null;
    return company.advantages.map((advantage) => {
      return (
        <AdvantageBox
          key={advantage.icon}
          title={advantage.title}
          description={advantage.description}
          icon={advantage.icon}
        />
      );
    });
  }

  function renderPics() {
    return company.images.map((image) => {
      return<img src={image} alt={company.id} />
    })
  }

  function renderBlueBanner() {
    if(!company.blueBanner || !company.advantages) return null;
    return (
      <ImageBackground image={company.blueBanner}>
      <div className="premios-blue-banner">
        <h1 style={{ color: "white" }}>
          Junte pontos e <span className="yellow">ganhe prêmios!</span>
        </h1>
        <div className="premios-wrapper">
          <div className="top">
            <img src={ClubeVipCabral} alt={"clube vip cabral"} />

            <div className="line" />
            <div className="advantages">
              <div className="advantages-wrapper">{renderAdvantages()}</div>
            </div>
          </div>
          <div className="bottom">
            <h2>
              Solicite o seu <span className="yellow">cartão grátis!</span>
            </h2>
            <p>
              Baixe o APP <img src={ClubpetroBanner} /> e consulte os seus
              pontos.
            </p>
          </div>
        </div>
      </div>
    </ImageBackground>
    )
  }

  return (
    <main>
      <section id="home" className="full">
        <img src={company.banner} alt={company.id} />
      </section>
      <section>
        <div className="outdoor-box">
          <div className="main-logo">
            <img src={company.logo} alt={company.id} />
          </div>
          <div className="right-side">
            {company.vip && <img src={ClubeVipCabral} alt="cabral clube vip logo" />}
            {company.twenty4seven && <img
              src={Twenty4Logo}
              alt="cabral 24horas logo"
              className="hours"
            />}

          </div>
        </div>
      </section>
      <section id="sobre" className="full">
        <LineTitle>Fotos do Empreendimento</LineTitle>
        <div className="image-wrapper">
          {renderPics()}
        </div>
      </section>
      <section id="servicos" className="full gray">
        <div className="fake-wrapper">
          <h2 className="subtitle">
            :. Serviços oferecidos no {company.title}:
          </h2>
          <Services services={company.services} />
        </div>
      </section>
      <section className="full" style={{ marginTop: "-4vh" }}>
          {renderBlueBanner()}
      </section>
      <Contact contacts={company.contacts} />
    </main>
  );
};

export default Empresas;
