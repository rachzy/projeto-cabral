import React from "react";
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

import CabralRodovia from "../../assets/images/logos/posto-cabral-rodovia.png";
import Cabralzinho from "../../assets/images/logos/posto-cabralzinho.png";
import Cabral3 from "../../assets/images/logos/posto-cabral-3.png";
import FazendaVale from "../../assets/images/logos/fazenda-do-vale.png";
import IzziHoteis from "../../assets/images/logos/izzi-hoteis.png";
import MotelRoma from "../../assets/images/logos/motel-roma.png";
import Cbr from "../../assets/images/logos/cbr.png";

import GasStationBuilding from "../../assets/images/other/building-posto-cabral.png";

import InfoBox from "../../components/InfoBox/index";

import Timeline, { ITimeline } from "../../components/Timeline";
import LineTitle from "../../components/LineTitle";

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
      height: 42,
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
      description: `Inauguração da <span class="bold">Posto Cabral 3.</span>`,
      icon: GasIcon,
      height: 12,
    },
  ];
  const companiesImages = [
    CabralRodovia,
    Cabralzinho,
    Cabral3,
    FazendaVale,
    IzziHoteis,
    MotelRoma,
    Cbr,
  ];

  return (
    <main>
      <section className="main">
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
            style={{ color: "#0144b5" }}
          />
        </div>
        <div className="about-box">
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
        </div>
      </section>
      <section>
        <h2 className="subtitle">:. Um pouco sobre nós</h2>
        <Timeline timeline={timeline} />
      </section>
      <section className="main">
        <LineTitle>Empresas do grupo:</LineTitle>
      </section>
      <section>
        <Slider images={companiesImages} />
      </section>
    </main>
  );
};

export default Index;
