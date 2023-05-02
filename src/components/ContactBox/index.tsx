import React from "react";
import "./ContactBox.css";

export interface IContact {
  label: string;
  href: string;
  icon: string;
}

const ContactBox: React.FC<IContact> = ({ label, href, icon }) => {
  return (
    <a href={href} target="_blank">
      <div className="contact-box">
        <img src={icon} alt={label} />
        <p>{label}</p>
      </div>
    </a>
  );
};

export default ContactBox;
