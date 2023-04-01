import React from "react";
import PageTitle from "../reusable/PageTitle";

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
