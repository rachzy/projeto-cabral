import "./Empresas.css";

import CabralGasStationBanner from "../../assets/images/sliders/capa.jpg";

import PostoCabralRodovia from "../../assets/images/logos/posto-cabral-rodovia-header.png";
import ClubeVipCabral from "../../assets/images/logos/clube-vip-cheaedr.png";
import Twenty4Logo from "../../assets/images/logos/24horas-header.png";
import LineTitle from "../../components/LineTitle";

import Pic1 from "../../assets/images/other/foto1.png";
import Pic2 from "../../assets/images/other/foto2.png";
import Pic3 from "../../assets/images/other/foto3.png";
import Pic4 from "../../assets/images/other/foto4.png";
import Pic5 from "../../assets/images/other/foto5.png";
import Pic6 from "../../assets/images/other/foto6.png";
import Pic7 from "../../assets/images/other/foto7.png";
import Pic8 from "../../assets/images/other/foto8.png";
import Pic9 from "../../assets/images/other/foto9.png";

import AbastecimentoIcon from "../../assets/images/icons/services/abastecimento.png";
import AutopecasIcon from "../../assets/images/icons/services/auto-pecas.png";
import LavajatoIcon from "../../assets/images/icons/services/lavajato.png";
import BorrachariaIcon from "../../assets/images/icons/services/borracharia.png";
import AlimentacaoIcon from "../../assets/images/icons/services/alimentacao.png";
import ClubeIcon from "../../assets/images/icons/services/clube-de-vantagens.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import BanheirosIcon from "../../assets/images/icons/services/banheiros.png";
import CapelaIcon from "../../assets/images/icons/services/capela.png";
import AgenciaIcon from "../../assets/images/icons/services/carga.png";
import WifiIcon from "../../assets/images/icons/services/wi-fi.png";
import Twenty4Icon from "../../assets/images/icons/services/24hs.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import BlueBanner from "../../assets/images/other/gasolina-miolo.jpg";

import AbastacimentoVip from "../../assets/images/icons/vip/abastecimento.png";
import PointsVip from "../../assets/images/icons/vip/pontos.png";
import GiftVip from "../../assets/images/icons/vip/troque.png";
import ClubpetroBanner from "../../assets/images/logos/clube-petro-miolo.png";

import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

import { IService } from "../../components/Service";
import { IContact } from "../../components/ContactBox";
import ImageBackground from "../../components/ImageBackground";
import AdvantageBox, { IAdvantage } from "../../components/AdvantageBox";

const Empresas = () => {
  const services: IService[] = [
    {
      label: "Abastecimento de Combustíveis",
      icon: AbastecimentoIcon,
    },
    {
      label: "Auto Peças e Troca de Óleo",
      icon: AutopecasIcon,
    },
    {
      label: "Lavajato",
      icon: LavajatoIcon,
    },
    {
      label: "Borracharia",
      icon: BorrachariaIcon,
    },
    {
      label: "Alimentação",
      icon: AlimentacaoIcon,
    },
    {
      label: "Clube de Vantagens",
      icon: ClubeIcon,
    },
    {
      label: "Estacionamento",
      icon: EstacionamentoIcon,
    },
    {
      label: "Banheiros, Rigorosamente, Higienizados",
      icon: BanheirosIcon,
    },
    {
      label: "Capela para Orações",
      icon: CapelaIcon,
    },
    {
      label: "Agência de Cargas",
      icon: AgenciaIcon,
    },
    {
      label: "Internet Wi-fi Grátis",
      icon: WifiIcon,
    },
    {
      label: "24 horas de Atendimento",
      icon: Twenty4Icon,
    },
  ];
  const contacts: IContact[] = [
    {
      label: "Rodovia BR 452, KM 231, Zona Rural, Santa Juliana/MG",
      icon: PointerIcon,
    },
    {
      label: "(34) 3354-2270",
      icon: WhatsappIcon,
    },
    {
      label: "contato@redecabral.com.br",
      icon: EmailIcon,
    },
  ];
  const advantages: IAdvantage[] = [
    {
      title: "Abasteça",
      description: "nos postos da nossa rede e apresente seu cartãou ou CPF.",
      icon: AbastacimentoVip,
    },
    {
      title: "Junte pontos",
      description: "cada vez que você abastecer",
      icon: PointsVip,
    },
    {
      title:
        "Troque seus pontos por <span class='yellow'>prêmios exclusivos!</span>",
      icon: GiftVip,
    },
  ];

  function renderAdvantages() {
    return advantages.map((advantage) => {
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

  return (
    <main>
      <section className="full">
        <img src={CabralGasStationBanner} alt="posto cabral" />
      </section>
      <section>
        <div className="outdoor-box">
          <div className="main-logo">
            <img src={PostoCabralRodovia} alt="posto cabral logo" />
          </div>
          <div className="right-side">
            <img src={ClubeVipCabral} alt="cabral clube vip logo" />
            <img
              src={Twenty4Logo}
              alt="cabral 24horas logo"
              className="hours"
            />
          </div>
        </div>
      </section>
      <section className="full">
        <LineTitle>Fotos do Empreendimento</LineTitle>
        <div className="image-wrapper">
          <img src={Pic1} alt="posto cabral" />
          <img src={Pic2} alt="posto cabral" />
          <img src={Pic3} alt="posto cabral" />
          <img src={Pic4} alt="posto cabral" />
          <img src={Pic5} alt="posto cabral" />
          <img src={Pic6} alt="posto cabral" />
          <img src={Pic7} alt="posto cabral" />
          <img src={Pic8} alt="posto cabral" />
          <img src={Pic9} alt="posto cabral" />
        </div>
      </section>
      <section className="full gray">
        <div className="fake-wrapper">
          <h2 className="subtitle">
            :. Serviços oferecidos no Posto Cabral Rodovia:
          </h2>
          <Services services={services} />
        </div>
      </section>
      <section className="full">
        <ImageBackground image={BlueBanner}>
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
      </section>
      <Contact contacts={contacts} />
    </main>
  );
};

export default Empresas;
