import React from "react";
import "./Services.css";

import Service, { IService } from "../../components/Service";

interface IProps {
  services: IService[];
}

const Services: React.FC<IProps> = ({ services }) => {
  function renderServices() {
    return services.map((service) => {
      return (
        <Service
          key={service.label}
          label={service.label}
          icon={service.icon}
        />
      );
    });
  }

  return <div className="services-wrapper">{renderServices()}</div>;
};

export default Services;
