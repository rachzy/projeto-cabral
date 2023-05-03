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
        <a href="https://agenciaportfolio.com.br" target="_blank">
          <img src={PortfolioBanner} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
