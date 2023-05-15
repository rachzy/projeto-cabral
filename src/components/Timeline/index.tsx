import { Fragment } from "react";
import "./Timeline.css";
import "./Timeline-Mobile.css";

export interface ITimeline {
  year: number;
  description: string;
  icon: string;
  height: number;
  image?: string;
}
[];

interface ITimelineProps {
  timeline: ITimeline[];
}

const Timeline: React.FC<ITimelineProps> = ({ timeline }) => {
  function renderIcons() {
    return timeline.map((section) => {
      return (
        <img
          key={section.description}
          src={section.icon}
          style={{ marginBottom: `${section.height - 1}vh` }}
        />
      );
    });
  }

  function renderYears() {
    return timeline.map((section) => {
      return (
        <Fragment key={section.description}>
          <div className="year">
            <p>{section.year}</p>
          </div>
          <div className="line" style={{ height: `${section.height}vh` }} />
        </Fragment>
      );
    });
  }

  function renderDescriptions() {
    return timeline.map((section) => {
      return (
        <div
          className="description"
          style={{
            marginBottom: section.image ? "8vh" : `${section.height}vh`,
            height: section.image ? "50vh" : "12vh",
          }}
          key={section.description}
        >
          <div className="line" />
          <p dangerouslySetInnerHTML={{ __html: section.description }} />
          {section.image && <img src={section.image} />}
        </div>
      );
    });
  }

  return (
    <div className="timeline-wrapper">
      <div className="main-text">
        <h1>
          Empreendendo com <span style={{ color: "red" }}>atitude,</span>{" "}
          construímos uma linda história!
        </h1>
        <p>
          Desde 1995, um <span className="bold">grupo sólido,</span>{" "}
          desenvolvendo negócios na Região do Triângulo Mineiro, em Minas Gerais
        </p>
      </div>
      <div className="sections">
        <div className="icons">{renderIcons()}</div>
        <div className="years">
          <div className="year small" />
          <div className="line first" />
          {renderYears()}
          <div className="year small" />
        </div>
        <div className="descriptions">
          <div className="description first">
            <p>
              A nossa história começa com o{" "}
              <span className="bold">Sr. Iolando</span> e com a{" "}
              <span className="bold">Dona Silma</span>, um casal que tinha o
              sonho de vencer na vida.{" "}
            </p>
          </div>
          {renderDescriptions()}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
