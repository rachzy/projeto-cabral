import React, { MutableRefObject, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";
import "./Header-Mobile.css";

import Hamburguer from "../Hamburguer";

import Logo from "../../assets/images/logos/rede-cabral-header-footer.png";
import InstaHeader from "../../assets/images/buttons/insta-header.png";
import WhatsappHeader from "../../assets/images/buttons/whatsapp-header.png";
import EmailHeader from "../../assets/images/buttons/e-mail-header.png";

interface ISocialMedia {
  label: string;
  src: string;
  href: string;
}
[];

interface ISubOptions {
  label: string;
  href: string;
}

interface IOptions {
  label: string;
  href?: string;
  subOptions?: ISubOptions[];
}
[];

interface IPropsSections {
  socialMedias: ISocialMedia[];
  options: IOptions[];
}

const DefaultSection: React.FC<IPropsSections> = ({
  socialMedias,
  options,
}) => {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  function renderSocialMedias() {
    return socialMedias.map((socialMedia) => {
      return (
        <li key={socialMedia.label}>
          <a href={socialMedia.href} target="_blank">
            <img src={socialMedia.src} alt={socialMedia.label} />
          </a>
        </li>
      );
    });
  }

  function renderSubOptions(subOptions: ISubOptions[]) {
    return subOptions.map((subOption) => {
      return (
        <li key={subOption.label}>
          <Link to={subOption.href}>{subOption.label}</Link>
        </li>
      );
    });
  }

  function renderOptions() {
    return options.map((link) => {
      if (link.href && link.href.startsWith("#")) {
        return (
          <li key={link.label}>
            <a className="menu-option" href={link.href}>
              {link.label}
              <div className="underline" />
            </a>
          </li>
        );
      }

      if (!link.href && link.subOptions) {
        return (
          <li key={link.label}>
            <a className="menu-option">
              {link.label}
              <div className="underline" />
              <ul className="sub-options">
                {renderSubOptions(link.subOptions)}
              </ul>
            </a>
          </li>
        );
      }

      if (!link.href) return null;

      return (
        <li key={link.label}>
          <Link className="menu-option" to={link.href}>
            {link.label}
            <div className="underline" />
          </Link>
        </li>
      );
    });
  }

  return (
    <div className="default">
      <div className="social-media">
        <ul>{renderSocialMedias()}</ul>
      </div>
      <div className="menu">
        <div className="menu-content">
          <div className="wrapper-logo">
            <img onClick={handleLogoClick} src={Logo} alt="logo rede cabral" />
          </div>
          <div className="wrapper-menu">
            <nav>
              <ul className="options">{renderOptions()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileSection: React.FC<IPropsSections> = ({ socialMedias, options }) => {
  const menuRef = useRef() as MutableRefObject<HTMLDivElement>;

  function handleHamburguerClick() {
    menuRef.current.classList.toggle("active");
  }

  function handleOptionClick() {
    const hamburguerMobile = document.querySelector(
      "#hamburguer-menu-mobile"
    ) as HTMLButtonElement;
    hamburguerMobile.click();
    window.scrollTo(0, 0);
  }

  function renderSocialMedias() {
    return socialMedias.map((socialMedia) => {
      return (
        <li key={socialMedia.label} onClick={handleOptionClick}>
          <a href={socialMedia.href} target="_blank">
            <img src={socialMedia.src} alt={socialMedia.label} />
          </a>
        </li>
      );
    });
  }

  function renderSubOptions(subOptions: ISubOptions[]) {
    return subOptions.map((subOption) => {
      return (
        <li key={subOption.label} onClick={handleOptionClick}>
          <Link to={subOption.href}>{subOption.label}</Link>
        </li>
      );
    });
  }

  function renderOptions() {
    return options.map((link) => {
      if (link.href && link.href.startsWith("#")) {
        return (
          <li key={link.label} onClick={handleOptionClick}>
            <a href={link.href}>{link.label}</a>
          </li>
        );
      }

      if (!link.href && link.subOptions) {
        return (
          <li key={link.label}>
            <a>{link.label}</a>
            <ul className="sub-options">{renderSubOptions(link.subOptions)}</ul>
          </li>
        );
      }

      if (!link.href) return null;

      return (
        <li key={link.label} onClick={handleOptionClick}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      );
    });
  }

  return (
    <div className="mobile">
      <Hamburguer
        id={"hamburguer-menu-mobile"}
        onClick={handleHamburguerClick}
      />
      <div className="mobile-background" ref={menuRef}>
        <div className="mobile-menu">
          <img src={Logo} onClick={handleOptionClick} alt="logo rede cabral" />
          <nav className="options">
            <ul className="options-list">{renderOptions()}</ul>
          </nav>
          <ul className="social-medias">{renderSocialMedias()}</ul>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const socialMedias = [
    {
      label: "instagram",
      src: InstaHeader,
      href: "https://www.instagram.com/redecabralsantajuliana/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      label: "whatsapp",
      src: WhatsappHeader,
      href: "https://wa.me/+553433542270",
    },
    {
      label: "email",
      src: EmailHeader,
      href: "mailto:contato@redecabral.com.br",
    },
  ];
  const options: IOptions[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre nós",
      href: "#sobre",
    },
    {
      label: "Empresas",
      subOptions: [
        {
          label: "Posto Cabral Rodovia",
          href: "/empresas/cabral-rodovia",
        },
      ],
    },
    {
      label: "Serviços",
      href: "#servicos",
    },
    {
      label: "Fale Conosco",
      href: "#contato",
    },
  ];

  return (
    <>
      <header>
        <DefaultSection options={options} socialMedias={socialMedias} />
        <MobileSection options={options} socialMedias={socialMedias} />
      </header>
      <div className="fake-header">
        <img src={Logo} alt="logo rede cabral" />
      </div>
    </>
  );
};

export default Header;
