import banner from "../../assets/images/companies/fazenda-do-vale/banner.jpg";
import logo from "../../assets/images/companies/fazenda-do-vale/logo.png";

import Pic1 from "../../assets/images/companies/fazenda-do-vale/foto1.png";
import Pic2 from "../../assets/images/companies/fazenda-do-vale/foto2.png";
import Pic3 from "../../assets/images/companies/fazenda-do-vale/foto3.png";
import Pic4 from "../../assets/images/companies/fazenda-do-vale/foto4.png";
import Pic5 from "../../assets/images/companies/fazenda-do-vale/foto5.png";
import Pic6 from "../../assets/images/companies/fazenda-do-vale/foto6.png";
import Pic7 from "../../assets/images/companies/fazenda-do-vale/foto7.png";
import Pic8 from "../../assets/images/companies/fazenda-do-vale/foto8.png";
import Pic9 from "../../assets/images/companies/fazenda-do-vale/foto9.png";
import Pic10 from "../../assets/images/companies/fazenda-do-vale/foto10.png";
import Pic11 from "../../assets/images/companies/fazenda-do-vale/foto11.png";
import Pic12 from "../../assets/images/companies/fazenda-do-vale/foto12.png";
import Pic13 from "../../assets/images/companies/fazenda-do-vale/foto13.png";
import Pic14 from "../../assets/images/companies/fazenda-do-vale/foto14.png";
import Pic15 from "../../assets/images/companies/fazenda-do-vale/foto15.png";
import Pic16 from "../../assets/images/companies/fazenda-do-vale/foto16.png";
import Pic17 from "../../assets/images/companies/fazenda-do-vale/foto17.png";
import Pic18 from "../../assets/images/companies/fazenda-do-vale/foto18.png";
import Pic19 from "../../assets/images/companies/fazenda-do-vale/foto19.png";
import Pic20 from "../../assets/images/companies/fazenda-do-vale/foto20.png";

import horario from "../../assets/images/companies/fazenda-do-vale/horario.png";

import SuiteIcon from "../../assets/images/icons/services/suites.png";
import HidroIcon from "../../assets/images/icons/services/hidro.png";
import TvIcon from "../../assets/images/icons/services/tv.png";
import FrigobarIcon from "../../assets/images/icons/services/frigobar.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import ArIcon from "../../assets/images/icons/services/ar-condicionado.png";
import WifiIcon from "../../assets/images/icons/services/wi-fi.png";
import RestauranteIcon from "../../assets/images/icons/services/restaurante.png";
import CafeIcon from "../../assets/images/icons/services/cafe.png";
import ClubeIcon from "../../assets/images/icons/services/clube-de-vantagens.png";
import EventosIcon from "../../assets/images/icons/services/predio.png";
import PoolIcon from "../../assets/images/icons/services/piscina.png";
import TenisIcon from "../../assets/images/icons/services/beach-tennis.png";
import CameraIcon from "../../assets/images/icons/services/camera.png";
import ArvoresIcon from "../../assets/images/icons/services/arvores.png";
import SaunaIcon from "../../assets/images/icons/services/sauna.png";
import TrampolimIcon from "../../assets/images/icons/services/trampolim.png";
import CarroIcon from "../../assets/images/icons/services/carro.png";
import TrilhaIcon from "../../assets/images/icons/services/trilha.png";
import HorarioIcon from "../../assets/images/icons/services/horario.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import { ICompany } from "../../types";

const FazendaDoVale: ICompany = {
  id: "fazenda-do-vale",
  title: "Fazenda do Vale - Hotel & Eventos",
  bannerSize: 40,
  banner: banner,
  logo: logo,
  images: [
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8,
    Pic9,
    Pic10,
    Pic11,
    Pic12,
    Pic13,
    Pic14,
    Pic15,
    Pic16,
    Pic17,
    Pic18,
    Pic19,
    Pic20,
  ],
  services: [
    {
      label: "21 Suítes Confortáveis",
      icon: SuiteIcon,
    },
    {
      label: "Ofurô",
      icon: HidroIcon,
    },
    {
      label: "TV de Led",
      icon: TvIcon,
    },
    {
      label: "Frigobar",
      icon: FrigobarIcon,
    },
    {
      label: "Estacionamento",
      icon: EstacionamentoIcon,
    },
    {
      label: "Ar-Condicionado",
      icon: ArIcon,
    },
    {
      label: "Internet Wi-fi Grátis",
      icon: WifiIcon,
    },
    {
      label: "Restaurante",
      icon: RestauranteIcon,
    },
    {
      label: "Café da Manhã",
      icon: CafeIcon,
    },
    {
      label: "Day Use",
      icon: ClubeIcon,
    },
    {
      label: "Espaço para Eventos",
      icon: EventosIcon,
    },
    {
      label: "Piscina",
      icon: PoolIcon,
    },
    {
      label: "Quadra de Beach Tennis",
      icon: TenisIcon,
    },
    {
      label: "Área para Book Fotográfico",
      icon: CameraIcon,
    },
    {
      label: "Área Verde",
      icon: ArvoresIcon,
    },
    {
      label: "Sauna",
      icon: SaunaIcon,
    },
    {
      label: "Pula-Pula",
      icon: TrampolimIcon,
    },
    {
      label: "Carros e Avião Antigos",
      icon: CarroIcon,
    },
    {
      label: "Trilha Ecológica e Turismo Rural",
      icon: TrilhaIcon,
    },
    {
      label: "24 horas de Atendimento",
      icon: HorarioIcon,
    },
  ],
  contacts: [
    {
      label: "Rodovia BR 452, KM 231, Zona Rural, Santa Juliana/MG",
      href: "https://goo.gl/maps/DhVvdFaNB6qcWFGe6",
      icon: PointerIcon,
    },
    {
      label: "(34) 3354-0209",
      href: "https://wa.me/+553433540209",
      icon: WhatsappIcon,
    },
    {
      label: "contato@redecabral.com.br",
      href: "mailto:contato@redecabral.com.br",
      icon: EmailIcon,
    },
  ],
  timetableBanner: horario,
};

export default FazendaDoVale;
