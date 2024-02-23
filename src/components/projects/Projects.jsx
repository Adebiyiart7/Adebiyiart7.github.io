import React from "react";
import { Grid } from "@mui/material";
import { BsGithub } from "react-icons/bs";

// LOCAL IMPORTS
import PageTitle from "../reusable/PageTitle";
import musicApp from "../../assets/img/music-app.png";
import realEstateApp from "../../assets/img/real-estate-app.png";
import therapyApp from "../../assets/img/therapy-app.png";

const projects = [
  {
    id: "1",
    image: realEstateApp,
    title: "Real Estate Application",
    description: "React Native Real Estate app for seamless property search.",
    techStacks: ["React Native", "Redux", "JavaScript", "Node.js"],
    githubLink: "https://github.com/Adebiyiart7/RealEstate",
    apkLink: "a",
    videoLink: "a",
  },
  {
    id: "2",
    image: therapyApp,
    title: "Therapy Application",
    description:
      "React Native therapy app for accessible mental health support.",
    techStacks: ["React Native", "TypeScript"],
    githubLink: "",
    apkLink: "a",
    videoLink: "a",
  },
  {
    id: "3",
    image: musicApp,
    title: "Music Application",
    description:
      "React Native music app for immersive audio experiences on the go.",
    techStacks: ["React Native", "Redux", "JavaScript"],
    githubLink: "https://github.com/Adebiyiart7/MusicApp",
    apkLink: "a",
    videoLink: "a",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <PageTitle title={"My Projects"} />
      <div className="mobile-app-projects">
        <h3 className="section-sub-title">Mobile Applications</h3>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <div className="mobile-card">
                <img
                  src={project.image}
                  alt=""
                  className="mobile-app-display-img"
                />
                <div className="content">
                  <h1 className="title">{project.title}</h1>
                  <p className="sub-title">{project.description} </p>
                  <div className="tech-stacks">
                    {project.techStacks.map((item) => (
                      <span className="chip">{item}</span>
                    ))}
                  </div>
                  <div className="card-footer">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="button icon-button"
                      >
                        <BsGithub />
                      </a>
                    )}
                    {project.apkLink && (
                      <a href={project.apkLink} download className="button">
                        APK
                      </a>
                    )}
                    {project.videoLink && (
                      <a href={project.videoLink} className="button">
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <h3 className="section-sub-title">Website and Web Applications</h3>
    </div>
  );
};

export default Projects;
