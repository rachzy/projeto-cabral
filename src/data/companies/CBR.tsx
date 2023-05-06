import banner from "../../assets/images/companies/cbr/banner.jpg";
import logo from "../../assets/images/companies/cbr/logo.png";

import Pic1 from "../../assets/images/companies/cbr/foto1.png";
import Pic2 from "../../assets/images/companies/cbr/foto2.png";
import Pic3 from "../../assets/images/companies/cbr/foto3.png";
import Pic4 from "../../assets/images/companies/cbr/foto4.png";
import Pic5 from "../../assets/images/companies/cbr/foto5.png";
import Pic6 from "../../assets/images/companies/cbr/foto6.png";
import Pic7 from "../../assets/images/companies/cbr/foto7.png";
import Pic8 from "../../assets/images/companies/cbr/foto8.png";
import Pic9 from "../../assets/images/companies/cbr/foto9.png";

import horario from "../../assets/images/companies/cbr/horario.png";

import ArqIcon from "../../assets/images/icons/services/arquitetura.png";
import ConstIcon from "../../assets/images/icons/services/engenharia.png";
import ComercialIcon from "../../assets/images/icons/services/predio-comercial.png";
import ResidencialIcon from "../../assets/images/icons/services/residencial.png";
import IndustrialIcon from "../../assets/images/icons/services/industria.png";
import BluePointerIcon from "../../assets/images/icons/services/pointer.png";
import ChaveIcon from "../../assets/images/icons/services/chave.png";
import HandShakeIcon from "../../assets/images/icons/services/handshake.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import { ICompany } from "../../types";

const CBR: ICompany = {
  id: "cbr",
  title: "CBR Empreendimentos",
  banner: banner,
  logo: logo,
  images: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9],
  services: [
    {
      label: "Arquitetura",
      icon: ArqIcon,
    },
    {
      label: "Construção Civil",
      icon: ConstIcon,
    },
    {
      label: "Comercial",
      icon: ComercialIcon,
    },
    {
      label: "Residencial",
      icon: ResidencialIcon,
    },
    {
      label: "Industrial",
      icon: IndustrialIcon,
    },
    {
      label: "Loteamentos",
      icon: BluePointerIcon,
    },
    {
      label: "Negócios Imobiliários",
      icon: ChaveIcon,
    },
    {
      label: "Built to suit",
      icon: HandShakeIcon,
    },
  ],
  contacts: [
    {
      label: "Rodovia BR 452, KM 231, Zona Rural, Santa Juliana/MG",
      href: "https://goo.gl/maps/EzToYASBWtoK1GXv9",
      icon: PointerIcon,
    },
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
  ],
  timetableBanner: horario,
};

export default CBR;
