import React from "react";
import { makeStyles } from "@mui/styles";

import photo from "../../assets/img/photo.png";
import AppButton from "../reusable/AppButton";
import PageTitle from "../reusable/PageTitle";
import Skill from "../Skill";
import DownloadCV from "../DownloadCV";

const useStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: "var(--primaryText)",
    fontFamily: "var(--appFontFamily)",
    lineHeight: 1.6,
  },
  photo: {
    width: "100%",
    maxWidth: 370,
    borderRadius: "50%",
  },
});

const About = ({ mediaQueries }) => {
  const classes = useStyles();
  const { tabletUp, tablet } = mediaQueries;

  const styles = {
    skills: {
      display: tablet ? "initial" : "flex",
      width: "100%",
    },
    skillsLeft: {
      width: tablet ? "100%" : "50%",
    },
    skillRight: {
      width: tablet ? "100%" : "50%",
    },
  };

  return (
    <div>
      <PageTitle mediaQueries={mediaQueries} title={"Who am I"} />
      <div className={classes.body}>
        {tabletUp && (
          <img
            className={`${classes.photo} wow fadeInLeft`}
            src={photo}
            alt=""
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          />
        )}
        <div
          className={`${classes.description} wow fadeInRight`}
          data-wow-delay="0ms"
          data-wow-duration="1000ms"
        >
          I am a <strong>Software Engineer</strong> with over 4 years of
          experience in developing robust and scalable applications (web and
          mobile) for various industries. I specialize in JavaScript programming
          language and have interest in Python and Java, and a strong background
          in software architecture, database design, and agile development
          methodologies.
          <br />
          <br />I have so much interest in developing web applications with high
          degree of excellence. I love writing <strong>clean codes</strong>,
          creating
          <strong> beautiful</strong> user interfaces, building{" "}
          <strong>secure </strong>
          applications and converting ideas into reality.
          <br />
          <br />
          <br />
          <div style={{ textAlign: tablet ? "center" : "initial" }}>
            <DownloadCV />
          </div>
        </div>
      </div>
      <br />
      <br />
      <h3
        style={{
          textAlign: "center",
          color: "var(--primaryText)",
          fontWeight: "700",
          fontSize: 24,
        }}
      >
        My Tech Stack
      </h3>
      <div style={styles.skills}>
        <div
          style={styles.skillsLeft}
          className={"wow fadeInLeft"}
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <Skill mediaQueries={mediaQueries} text="HTML & CSS" value={90} />
          <Skill mediaQueries={mediaQueries} text="JavaScript" value={85} />
          <Skill mediaQueries={mediaQueries} text="TypeScript" value={70} />
          <Skill mediaQueries={mediaQueries} text="React.js & Next.js" value={85} />
          <Skill mediaQueries={mediaQueries} text="Python" value={50} />
        </div>
        <div
          style={styles.skillRight}
          className="wow fadeInRight"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <Skill
            mediaQueries={mediaQueries}
            text="NodeJs and Express"
            value={80}
          />
          <Skill mediaQueries={mediaQueries} text="React Native" value={80} />
          <Skill mediaQueries={mediaQueries} text="GraphQL" value={75} />
          <Skill mediaQueries={mediaQueries} text="GIT" value={70} />
          <Skill
            mediaQueries={mediaQueries}
            text="Mongoose & MongoDB"
            value={70}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
