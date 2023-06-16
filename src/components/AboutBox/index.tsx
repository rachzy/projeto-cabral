import React from 'react'
import "./AboutBox.css";

interface IProps {
    children: React.ReactNode;
    column?: boolean;
}

const AboutBox: React.FC<IProps> = ({children, column}) => {
  return (
    <div className={`about-box ${column && "column"}`}>
        {children}
    </div>
  )
}

export default AboutBox