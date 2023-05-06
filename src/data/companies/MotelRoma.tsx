import banner from "../../assets/images/companies/motel-roma/banner.jpg";
import logo from "../../assets/images/companies/motel-roma/logo.png";

import Pic1 from "../../assets/images/companies/motel-roma/foto1.png";
import Pic2 from "../../assets/images/companies/motel-roma/foto2.png";
import Pic3 from "../../assets/images/companies/motel-roma/foto3.png";
import Pic4 from "../../assets/images/companies/motel-roma/foto4.png";
import Pic5 from "../../assets/images/companies/motel-roma/foto5.png";
import Pic6 from "../../assets/images/companies/motel-roma/foto6.png";

import horario from "../../assets/images/companies/motel-roma/horario.png";

import SuiteIcon from "../../assets/images/icons/services/suites.png";
import HidroIcon from "../../assets/images/icons/services/hidro.png";
import TvIcon from "../../assets/images/icons/services/tv.png";
import FrigobarIcon from "../../assets/images/icons/services/frigobar.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import ArIcon from "../../assets/images/icons/services/ar-condicionado.png";
import WifiIcon from "../../assets/images/icons/services/wi-fi.png";
import LancheIcon from "../../assets/images/icons/services/lanche.png";
import CafeIcon from "../../assets/images/icons/services/cafe.png";
import DecorationIcon from "../../assets/images/icons/services/anjo.png";
import SecurityIcon from "../../assets/images/icons/services/shield.png";
import HorarioIcon from "../../assets/images/icons/services/horario.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import { ICompany } from "../../types";

const MotelRoma: ICompany = {
  id: "motel-roma",
  title: "Motel Roma",
  banner: banner,
  logo: logo,
  images: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6],
  services: [
    {
      label: "14 Suítes Confortáveis",
      icon: SuiteIcon,
    },
    {
      label: "Hidromassagem",
      icon: HidroIcon,
    },
    {
      label: "TV",
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
      label: "Lanche Rápido",
      icon: LancheIcon,
    },
    {
      label: "Café da Manhã",
      icon: CafeIcon,
    },
    {
      label: "Decoração Especial",
      icon: DecorationIcon,
    },
    {
      label: "Segurança e Discrição",
      icon: SecurityIcon,
    },
    {
      label: "24 horas de Atendimento",
      icon: HorarioIcon,
    },
  ],
  contacts: [
    {
      label: "Rodovia BR 452, KM 231, Zona Rural, Santa Juliana/MG",
      href: "https://goo.gl/maps/1fH5GxrhcKTtH46q6",
      icon: PointerIcon,
    },
    {
      label: "(34) 9 9765-0336",
      href: "https://wa.me/+5534997650336",
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

export default MotelRoma;
