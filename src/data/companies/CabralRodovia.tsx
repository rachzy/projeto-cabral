import CabralGasStationBanner from "../../assets/images/sliders/capa.jpg";

import PostoCabralRodovia from "../../assets/images/logos/posto-cabral-rodovia-header.png";

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

import { ICompany } from "../../types";

const CabralRodovia: ICompany = {
    id: "cabral-rodovia",
    title: "Posto Cabral Rodovia",
    banner: CabralGasStationBanner,
    logo: PostoCabralRodovia,
    images: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9],
    services: [
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
    ],
    contacts: [
        {
            label: "Rodovia BR 452, KM 231, Zona Rural, Santa Juliana/MG",
            href: "https://goo.gl/maps/LNwgkTy3aCSaFHVYA",
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
    twenty4seven: true,
    vip: true
}

export default CabralRodovia;