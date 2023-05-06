import banner from "../../assets/images/companies/cabralzinho/banner.jpg";
import logo from "../../assets/images/companies/cabralzinho/logo.png";

import Pic1 from "../../assets/images/companies/cabralzinho/foto1.png";
import Pic2 from "../../assets/images/companies/cabralzinho/foto2.png";
import Pic3 from "../../assets/images/companies/cabralzinho/foto3.png";
import Pic4 from "../../assets/images/companies/cabralzinho/foto4.png";
import Pic5 from "../../assets/images/companies/cabralzinho/foto5.png";
import Pic6 from "../../assets/images/companies/cabralzinho/foto6.png";
import Pic7 from "../../assets/images/companies/cabralzinho/foto7.png";

import horario from "../../assets/images/companies/cabralzinho/horario.png";

import AbastecimentoIcon from "../../assets/images/icons/services/abastecimento.png";
import LubrificanteIcon from "../../assets/images/icons/services/auto-pecas.png";
import ClubeIcon from "../../assets/images/icons/services/clube-de-vantagens.png";
import CalibradorIcon from "../../assets/images/icons/services/borracharia.png";
import EstacionamentoIcon from "../../assets/images/icons/services/estacionamento.png";
import PirulitoIcon from "../../assets/images/icons/services/pirulito.png";
import WifiIcon from "../../assets/images/icons/services/wi-fi.png";
import PipocaIcon from "../../assets/images/icons/services/pipoca.png";
import CafeIcon from "../../assets/images/icons/services/cafe.png";
import HorarioIcon from "../../assets/images/icons/services/horario.png";

import PointerIcon from "../../assets/images/buttons/pointer-footer.png";
import WhatsappIcon from "../../assets/images/buttons/whatsapp-footer.png";
import EmailIcon from "../../assets/images/buttons/e-mail-footer.png";

import BlueBanner from "../../assets/images/companies/cabral-rodovia/gasolina-miolo.jpg";
import AbastacimentoVip from "../../assets/images/icons/vip/abastecimento.png";
import PointsVip from "../../assets/images/icons/vip/pontos.png";
import GiftVip from "../../assets/images/icons/vip/troque.png";

import { ICompany } from "../../types";

const Cabralzinho: ICompany = {
  id: "cabralzinho",
  title: "Posto Cabralzinho",
  banner: banner,
  bannerSize: 50,
  logo: logo,
  images: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7],
  services: [
    {
      label: "Abastecimento de Combustíveis",
      icon: AbastecimentoIcon,
    },
    {
      label: "Lubrificantes",
      icon: LubrificanteIcon,
    },
    {
      label: "Clube de Vantagens",
      icon: ClubeIcon,
    },
    {
      label: "Calibrador de Pneus",
      icon: CalibradorIcon,
    },
    {
      label: "Estacionamento",
      icon: EstacionamentoIcon,
    },
    {
      label: "Pirulito para as Crianças",
      icon: PirulitoIcon,
    },
    {
      label: "Internet Wi-fi Grátis",
      icon: WifiIcon,
    },
    {
      label: "Pipoca Quentinha",
      icon: PipocaIcon,
    },
    {
      label: "Café Quente",
      icon: CafeIcon,
    },
    {
      label: "Atendimento das 6h às 22h",
      icon: HorarioIcon,
    },
  ],
  contacts: [
    {
      label: "Av. Av. Ênio Gonçalves, 259, Bairro JK, Santa Juliana/MG",
      href: "https://goo.gl/maps/4m3BAk5ALUu39zMGA",
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
  blueBanner: BlueBanner,
  advantages: [
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
  ],
  vip: true,
  timetableBanner: horario,
};

export default Cabralzinho;
