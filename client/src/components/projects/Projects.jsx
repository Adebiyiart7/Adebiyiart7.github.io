import React from "react";
import PageTitle from "../reusable/PageTitle";
import { mobileApp1 } from "../../assets/img/mobile-app-1.jpg"

const Projects = () => {
  return (
    <div>
      <PageTitle title={"My Projects"} />

      <h3
        style={{
          textAlign: "center",
          color: "var(--primaryText)",
          fontWeight: "600",
          fontSize: 24
        }}
      >
        Mobile Applications
      </h3>

      <div className="mobile-card">
        <img src={mobileApp1 } alt="" className="display-img" />
      </div>
      <h3
        style={{
          textAlign: "center",
          color: "var(--primaryText)",
          fontWeight: "600",
          fontSize: 24
        }}
      >
        Website and Web Applications
      </h3>
    </div>
  );
};

export default Projects;
