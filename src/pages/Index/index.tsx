import Slider from "../../components/Slider/index";

import "./Index.css";

import sliderBanner from "../../assets/images/sliders/capa.jpg";
import slide1 from "../../assets/images/sliders/inicial-1.jpg";
import slide2 from "../../assets/images/sliders/inicial-2.jpg";
import slide3 from "../../assets/images/sliders/inicial-3.jpg";

import HotelIcon from "../../assets/images/icons/timeline/ic-hotel.png";
import MotelIcon from "../../assets/images/icons/timeline/ic-motel.png";
import GasIcon from "../../assets/images/icons/timeline/ic-posto.png";
import PeopleIcon from "../../assets/images/icons/timeline/ic-filhos.png";
import EngineerIcon from "../../assets/images/icons/timeline/ic-construtora.png";

import GasStationBuilding from "../../assets/images/companies/cabral-rodovia/building-posto-cabral.png";

import BlueBanner from "../../assets/images/other/frase-miolo.jpg";

import AbastecimentoIcon from "../../assets/images/icons/services/abastecimento.png";
import AutopecasIcon from "../../assets/images/icons/services/auto-pecas.png";
import LavajatoIcon from "../../assets/images/icons/services/lavajato.png";
import BorrachariaIcon from "../../assets/images/icons/services/borracharia.png";
import AlimentacaoIcon from "../../assets/images/icons/services/alimentacao.png";
import HotelariaIcon from "../../assets/images/icons/services/hotelaria.png";
import MotelBlueIcon from "../../assets/images/icons/services/motel.png";
import ClubeIcon from "../../assets/images/icons/services/clube-de-vantagens.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import LazerIcon from "../../assets/images/icons/services/lazer.png";
import EventosIcon from "../../assets/images/icons/services/lazer.png";
import ConstrutoraIcon from "../../assets/images/icons/services/construtora.png";

import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

import { IContact } from "../../components/ContactBox";
import LogoSlider, { ILogoSlide } from "../../components/LogoSlider";
import InfoBox from "../../components/InfoBox/index";
import ImageBackground from "../../components/ImageBackground";
import Timeline, { ITimeline } from "../../components/Timeline";
import LineTitle from "../../components/LineTitle";
import { IService } from "../../components/Service";

import companies from "../../data/companies";
import AboutBox from "../../components/AboutBox";

import FormaDeTrabalhar from "../../assets/images/other/forma-de-trabalhar.png";

const Index = () => {
  const sliderImages = [slide1, sliderBanner, slide2, slide3];
  const timeline: ITimeline[] = [
    {
      year: 1995,
      description: `Com muito trabalho, honestidade e persistência,
      conseguiram iniciar o seu primeiro negócio: <br />
      <span class="bold">o Hotel Izzi.</span>`,
      icon: HotelIcon,
      height: 12,
    },
    {
      year: 2002,
      description: `Construção de mais um empreendimento, o
      <span class="bold">Motel Roma.</span>`,
      icon: MotelIcon,
      height: 12,
    },
    {
      year: 2009,
      description: `Sempre trabalhando com inteligência e consistência,
      em <span class="bold">12 anos de obra</span>, conseguiram inaugurar o
      primeiro posto de combustíveis, o <span class="bold">Posto Cabral Rodovia</span>.
      `,
      icon: GasIcon,
      height: 45,
      image: GasStationBuilding,
    },
    {
      year: 2009,
      description: `De 2009 pra cá, os filhos, <span class="bold">Ivo e Iolando Filho</span>,
      assumiram a <span class="bold">administração dos negócios</span>.
      `,
      icon: PeopleIcon,
      height: 12,
    },
    {
      year: 2012,
      description: `Inauguração do <span class="bold">Posto Cabralzinho</span>.`,
      icon: GasIcon,
      height: 12,
    },
    {
      year: 2015,
      description: `Inauguração da <span class="bold">CBR Empreendimentos</span>.`,
      icon: EngineerIcon,
      height: 12,
    },
    {
      year: 2021,
      description: `Inauguração da <span class="bold">Fazenda do Vale - Hotel & Eventos.</span>`,
      icon: HotelIcon,
      height: 12,
    },
    {
      year: 2022,
      description: `Inauguração do <span class="bold">Posto Cabral 3.</span>`,
      icon: GasIcon,
      height: 12,
    },
  ];
  const companiesSlides: ILogoSlide[] = companies.map((company) => {
    return {
      image: company.logo,
      page: `/empresas/${company.id}`,
    };
  });
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
      label: "Hotelaria",
      icon: HotelariaIcon,
    },
    {
      label: "Motel",
      icon: MotelBlueIcon,
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
      label: "Lazer",
      icon: LazerIcon,
    },
    {
      label: "Salão para Eventos",
      icon: EventosIcon,
    },
    {
      label: "Construtora",
      icon: ConstrutoraIcon,
    },
  ];
  const contacts: IContact[] = [
    {
      label: "(34) 3354-2270",
      href: "https://wa.me/+553433542270",
      icon: WhatsappIcon,
    },
    {
      label: "contato@redecabral.com.br",
      href: "mailto:contato@redecabral.com.br",
      icon: EmailIcon,
    },
  ];

  return (
    <main>
      <section id="home" className="full">
        <Slider images={sliderImages} floatingDots={true} />
      </section>
      <section className="center-content">
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
            title="Valores"
            description="
            • Honestidade; <br />
            • Ética; <br />
            • Justiça; <br />
            • Transparência; <br />
            • Propósito.
            "
            color="#ffd100"
            style={{ color: "#0144b5", fontWeight: "bold" }}
          />
        </div>
        <AboutBox>
          <div>
            <h2>:. Forma de Trabalhar</h2>
            <p>
              • Valorizar os nossos colaboradores; <br />
              • Executar as tarefas através de processos; <br />
              • Proteger o meio ambiente; <br />
              • Fazer tudo do jeito certo; <br /> • Praticar novas ideias.
            </p>
          </div>
          <div>
            <h2>:. Cultura Organizacional</h2>
            <p>
              Liberdade, responsabilidade e atingimento das metas para uma
              operação eficiente.
            </p>
          </div>
        </AboutBox>
        <AboutBox column>
          <div>
            <h2>:. Forma de Trabalhar e Cultura Organizacional</h2>
          </div>
          <div className="image">
            <img src={FormaDeTrabalhar} />
          </div>
        </AboutBox>
      </section>
      <section id="sobre">
        <h2 className="subtitle">:. Um pouco sobre nós</h2>
        <Timeline timeline={timeline} />
      </section>
      <section className="full">
        <LineTitle>Empresas do grupo:</LineTitle>
        <LogoSlider slides={companiesSlides} />
      </section>
      <section className="full">
        <ImageBackground image={BlueBanner}>
          <div className="blue-banner">
            <h1 className="yellow-quote">“</h1>
            <h1 style={{ color: "white" }}>
              A nossa história e o nosso jeito de ser são marcados por sonhos
              que nos trouxeram até aqui e que nos enchem de orgulho!
            </h1>
            <h1 className="yellow-quote">”</h1>
          </div>
        </ImageBackground>
      </section>
      <section id="servicos" className="full gray">
        <div className="fake-wrapper">
          <h2 className="subtitle">
            :. Serviços oferecidos em nossas empresas
          </h2>
          <Services services={services} />
        </div>
      </section>
      <Contact contacts={contacts} />
    </main>
  );
};

export default Index;
