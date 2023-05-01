import React from "react";
import "./AdvantageBox.css";

export interface IAdvantage {
  title: string;
  description?: string;
  icon: string;
}

const AdvantageBox: React.FC<IAdvantage> = ({ title, description, icon }) => {
  return (
    <div className="advantage-box">
      <img src={icon} alt={title} />
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p>{description}</p>}
    </div>
  );
};

export default AdvantageBox;
