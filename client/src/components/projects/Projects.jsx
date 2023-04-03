import React from "react";
import { Grid } from "@mui/material";
import { BsGithub } from "react-icons/bs";

// LOCAL IMPORTS
import PageTitle from "../reusable/PageTitle";
import mobileApp1 from "../../assets/img/mobile-app-1.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <PageTitle title={"My Projects"} />
      <div className="mobile-app-projects">
        <h3 className="section-sub-title">Mobile Applications</h3>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="mobile-card">
              <img src={mobileApp1} alt="" className="display-img" />
              <div className="content">
                <h1 className="title">Music Application</h1>
                <p className="sub-title">
                  A music mobile aplication built with React Native
                </p>
                <div className="tech-stacks">
                  <span className="chip">React Native</span>
                  <span className="chip">Redux</span>
                  <span className="chip">JavaScript</span>
                </div>
                <div className="card-footer">
                  <a href="/" className="button icon-button">
                    <BsGithub />
                  </a>
                  <a href="/" className="button">APK</a>
                  <a href="/" className="button">Watch Video</a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <h3 className="section-sub-title">Website and Web Applications</h3>
    </div>
  );
};

export default Projects;
