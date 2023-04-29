import React from "react";
import "./LineTitle.css";

interface IProps {
  children: string;
}

const LineTitle: React.FC<IProps> = ({ children }) => {
  return (
    <div className="line-title">
      <div className="line" />
      <p>
        <span className="bold">{children}</span>
      </p>
      <div className="line" />
    </div>
  );
};

export default LineTitle;
