import React from "react";
import "./Service.css";

export interface IService {
  label: string;
  icon: string;
}

const Service: React.FC<IService> = ({ label, icon }) => {
  return (
    <div className="service">
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default Service;
