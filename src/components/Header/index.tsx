import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "./Header-Mobile.css";

import Hamburguer from "../Hamburguer";

import Logo from "../../assets/images/logos/rede-cabral-header-footer.png";
import InstaHeader from "../../assets/images/buttons/insta-header.png";
import WhatsappHeader from "../../assets/images/buttons/whatsapp-header.png";
import EmailHeader from "../../assets/images/buttons/e-mail-header.png";

const Header = () => {
  const socialMedias = [
    {
      label: "instagram",
      src: InstaHeader,
      href: "https://instagram.com",
    },
    {
      label: "whatsapp",
      src: WhatsappHeader,
      href: "https://web.whatsapp.com",
    },
    {
      label: "email",
      src: EmailHeader,
      href: "mailto:exemplo@gmail.com",
    },
  ];
  const options = [
    {
      label: "Home",
      href: "/#home",
    },
    {
      label: "Sobre nós",
      href: "/#sobre",
    },
    {
      label: "Empresas",
      href: "/empresas",
    },
    {
      label: "Serviços",
      href: "/#servicos",
    },
    {
      label: "Fale Conosco",
      href: "/#contato",
    },
  ];

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

  function renderOptions() {
    return options.map((link) => {
      return (
        <Link key={link.label} to={link.href}>
          {link.label}
          <div className="underline" />
        </Link>
      );
    });
  }

  return (
    <header>
      <div className="default">
        <div className="social-media">
          <ul>{renderSocialMedias()}</ul>
        </div>
        <div className="menu">
          <div className="wrapper-logo">
            <img src={Logo} alt="logo rede cabral" />
          </div>
          <div className="wrapper-menu">
            <ul>{renderOptions()}</ul>
          </div>
        </div>
      </div>
      <div className="mobile">
        <Hamburguer />
      </div>
    </header>
  );
};

export default Header;
