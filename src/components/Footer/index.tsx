import "./Footer.css";

import CabralBanner from "../../assets/images/logos/rede_cabral_footer.png";
import PortfolioBanner from "../../assets/images/other/signature-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={CabralBanner} alt="Rede Cabral Banner" />
      </div>

      <div className="credits">
        <p>Desenvolvido por: </p>
        <img src={PortfolioBanner} />
      </div>
    </footer>
  );
};

export default Footer;
