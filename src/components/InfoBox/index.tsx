import React from "react";

import "./InfoBox.css";

interface IProps {
  title: string;
  description: string;
  color: string;
  style?: React.CSSProperties;
}

const InfoBox: React.FC<IProps> = ({ title, description, color, style }) => {
  return (
    <div className="info-box" style={{ backgroundColor: color, ...style }}>
      <h2>:. {title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

export default InfoBox;
