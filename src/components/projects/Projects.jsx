import React from "react";
import { Grid } from "@mui/material";
import { BsGithub } from "react-icons/bs";

// LOCAL IMPORTS
import { MdPlayCircle } from "react-icons/md";
import PageTitle from "../reusable/PageTitle";
import musicApp from "../../assets/img/music-app.png";
import spotipApp from "../../assets/img/spotip.png";
import realEstateApp from "../../assets/img/real-estate-app.png";
import therapyApp from "../../assets/img/therapy-app.png";
import gameHubApp from "../../assets/img/game-hub.png";
import betaHuesApp from "../../assets/img/beta-hues.png";
import xtraaaHubApp from "../../assets/img/xtraaa-hub.png";

// APKs
import spotipAPK from "../../assets/APK/spotip.apk";
import realEstateAPK from "../../assets/APK/RealEstate.apk";
import ayoAPK from "../../assets/APK/Ayo.apk";
import musicAppAPK from "../../assets/APK/MusicApp.apk";
// Video
import spotipVideo from "../../assets/video/spotip.mp4";
import realEstateVideo from "../../assets/video/realestate.mp4";
import musicAppVideo from "../../assets/video/musicapp.mp4";
import ayoVideo from "../../assets/video/ayo.mp4";
import easyShopVideo from "../../assets/video/easy-shop.mp4";

const mobileProjects = [
  {
    id: "1",
    image: spotipApp,
    title: "Spotip",
    description:
      "AI and User Sports Predictions with Statistics built with React Native.",
    techStacks: ["React Native", "Zustand", "TypeScript", "Expo/eas"],
    githubLink: "",
    android: "https://spotip-apks.s3.eu-north-1.amazonaws.com/spotip.apk",
    ios: "https://apps.apple.com/us/app/spotip-livescores-ai-tips/id6739162688",
    videoLink: spotipVideo,
  },
  {
    id: "2",
    image: realEstateApp,
    title: "Real Estate Application",
    description: "React Native Real Estate app for seamless property search.",
    techStacks: ["React Native", "Redux", "JavaScript", "Node.js"],
    githubLink: "https://github.com/Adebiyiart7/RealEstate",
    apkLink: realEstateAPK,
    videoLink: realEstateVideo,
  },
  {
    id: "3",
    image: therapyApp,
    title: "Therapy Application",
    description:
      "React Native therapy app for accessible mental health support",
    techStacks: ["React Native", "TypeScript"],
    githubLink: "",
    apkLink: ayoAPK,
    videoLink: ayoVideo,
  },
  {
    id: "4",
    image: musicApp,
    title: "Music Application",
    description:
      "React Native music app for immersive audio experiences on the go.",
    techStacks: ["React Native", "Redux", "JavaScript"],
    githubLink: "https://github.com/Adebiyiart7/MusicApp",
    apkLink: musicAppAPK,
    videoLink: musicAppVideo,
  },
];

const webProjects = [
  {
    id: "1",
    image: gameHubApp,
    title: "Game Hub",
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play.",
    techStacks: ["React", "Chakra UI", "TypeScript", "Rawg API", "Vite"],
    githubLink: "https://github.com/Adebiyiart7/GameHub",
    link: "https://real-game-hub.vercel.app",
  },
  {
    id: "2",
    image: betaHuesApp,
    title: "Cleaning Services",
    description:
      "Web App to discover effortless cleaning with Beta Hues – your go-to web app for connecting with top-rated professionals.",
    techStacks: ["React", "Tailwind CSS", "Redux", "TypeScript"],
    githubLink: "",
    link: "https://beta-hues.vercel.app",
  },
  {
    id: "3",
    image: xtraaaHubApp,
    title: "Accommodation Hub",
    description:
      "Web App to discover and book your perfect stay hassle-free. From cozy apartments to luxurious villas.",
    techStacks: ["React Native", "Redux", "TypeScript", "Node.js", "MongoDB"],
    githubLink: "",
    link: "https://xtraaahub.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <PageTitle title={"My Projects"} />
      <div>
        <div className="app-projects">
          <h3 className="section-sub-title">Mobile Applications</h3>
          <Grid container spacing={3}>
            {mobileProjects.map((project) => (
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
                          target="_blank"
                          href={project.githubLink}
                          className="button icon-button"
                        >
                          <BsGithub />
                        </a>
                      )}
                      {project.ios && (
                        <a
                          href={project.ios}
                          target="_blank"
                          className="button"
                        >
                          iOS
                        </a>
                      )}
                      {project.android && (
                        <a
                          href={project.android}
                          target="_blank"
                          className="button"
                        >
                          Android
                        </a>
                      )}
                      {project.videoLink && (
                        <a
                          target="_blank"
                          href={project.videoLink}
                          className="button"
                        >
                          <MdPlayCircle size={18} style={{ marginRight: 5 }} />
                          Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="app-projects">
          <h3 className="section-sub-title">Website and Web Applications</h3>
          <Grid container spacing={3}>
            {webProjects.map((project) => (
              <Grid item xs={12} sm={6}>
                <div className="web-card">
                  <a href={project.link} target="_blank">
                    <img src={project.image} alt={project.title} />
                  </a>
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
                          target="_blank"
                          href={project.githubLink}
                          className="button icon-button"
                        >
                          <BsGithub />
                        </a>
                      )}
                      <a target="_blank" href={project.link} className="button">
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <a target="_blank" href={easyShopVideo} style={{ visibility: "hidden" }}>
        Video
      </a>
    </div>
  );
};

export default Projects;
