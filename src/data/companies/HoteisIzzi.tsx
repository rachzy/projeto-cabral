import banner from "../../assets/images/companies/izzi-hoteis/banner.jpg";
import logo from "../../assets/images/companies/izzi-hoteis/logo.png";

import Pic1 from "../../assets/images/companies/izzi-hoteis/foto1.png";
import Pic2 from "../../assets/images/companies/izzi-hoteis/foto2.png";
import Pic3 from "../../assets/images/companies/izzi-hoteis/foto3.png";

import horario from "../../assets/images/companies/izzi-hoteis/horario.png";

import SuiteIcon from "../../assets/images/icons/services/suites.png";
import BluePointerIcon from "../../assets/images/icons/services/pointer.png";
import TvIcon from "../../assets/images/icons/services/tv.png";
import ArIcon from "../../assets/images/icons/services/ar-condicionado.png";
import CafeIcon from "../../assets/images/icons/services/cafe.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import WifiIcon from "../../assets/images/icons/services/wi-fi.png";
import LancheIcon from "../../assets/images/icons/services/lanche.png";
import HorarioIcon from "../../assets/images/icons/services/horario.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import { ICompany } from "../../types";

const HoteisIzzi: ICompany = {
  id: "izzi-hoteis",
  title: "iZZi Hóteis",
  banner: banner,
  logo: logo,
  images: [Pic1, Pic2, Pic3],
  services: [
    {
      label: "37 Suítes Confortáveis",
      icon: SuiteIcon,
    },
    {
      label: "No Centro da Cidade",
      icon: BluePointerIcon,
    },
    {
      label: "TV",
      icon: TvIcon,
    },
    {
      label: "Ar-Condiciado",
      icon: ArIcon,
    },
    {
      label: "Café da Manhã",
      icon: CafeIcon,
    },
    {
      label: "Estacionamento Para Caminhões",
      icon: EstacionamentoIcon,
    },
    {
      label: "Estacionamento Para Carros",
      icon: EstacionamentoIcon,
    },
    {
      label: "Internet Wi-Fi Grátis",
      icon: WifiIcon,
    },
    {
      label: "Lanche Rápido",
      icon: LancheIcon,
    },
    {
      label: "24 horas de Atendimento",
      icon: HorarioIcon,
    },
  ],
  contacts: [
    {
      label: "Av. Ênio Gonçalves, 257, Bairro JK, Santa Juliana/MG",
      href: "https://goo.gl/maps/Hm3jYiWxA9QEtdR49",
      icon: PointerIcon,
    },
    {
      label: "(34) 3354-1637",
      href: "https://wa.me/+553433541637",
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

export default HoteisIzzi;
