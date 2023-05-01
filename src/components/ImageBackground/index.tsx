import React from "react";
import "./ImageBackground.css";

interface IProps {
  image: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ImageBackground: React.FC<IProps> = ({ image, style, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})`, ...style }}
      className="image-background"
    >
      {children}
    </div>
  );
};

export default ImageBackground;
