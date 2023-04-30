import React from "react";
import "./ContactBox.css";

export interface IContact {
  label: string;
  icon: string;
}

const ContactBox: React.FC<IContact> = ({ label, icon }) => {
  return (
    <div className="contact-box">
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default ContactBox;
