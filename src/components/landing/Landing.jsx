import { makeStyles } from "@mui/styles";

import photo from "../../assets/img/photo.png";
import DownloadCV from "../DownloadCV";

const useStyle = makeStyles({
  actionContainer: {
    display: "block",
  },
  greeting: {
    display: "block",
    fontSize: 20,
    fontWeight: 500,
    color: "var(--white)",
    textShadow: "0 0 5px #000",
  },
  landingContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  name: {
    fontWeight: 800,
    fontSize: 39,
    textTransform: "uppercase",
    fontFamily: "var(--appFontFamily)",
    color: "var(--white)",
    textShadow: "0 0 5px #000",
  },
  photo: {
    maxWidth: 370,
    width: "100%",
    borderRadius: "50%",
  },
  right: {},
  title: {
    color: "rgb(152, 152, 152)",
    fontWeight: 500,
  },
});

const Landing = ({ mediaQueries }) => {
  const classes = useStyle();
  const { medium, large, tablet, largeUp } = mediaQueries;

  // media queries
  const styles = {
    actionContainer: {
      marginTop: tablet ? 50 : 100,
    },
    landingContainer: {
      flexDirection: tablet ? "column" : "row",
      textAlign: tablet ? "center" : "initial",
      padding: largeUp ? "0 20px" : "initial",
    },
    name: {
      fontWeight: medium && 700,
      fontSize: medium && 35,
      lineHeight: large && 1.2,
    },
  };

  return (
    <div className={classes.landingContainer} style={styles.landingContainer}>
      <div className={`${classes.left}`}>
        <div>
          <div
            className="wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          >
            <h5 className={classes.greeting}>
              <span>Hello, meet </span>
              <strong>theCodingChef.</strong>
            </h5>
            <h1 className={classes.name} style={styles.name}>
              I am Adeeyo Joseph
            </h1>
            <p className={classes.title}>Software Engineer</p>
          </div>
          <div
            className={`${classes.actionContainer} wow fadeInUp`}
            data-wow-delay="300ms"
            data-wow-duration="1000ms"
            style={styles.actionContainer}
          >
            <DownloadCV />
          </div>
        </div>
      </div>
      <div
        className={`${classes.right} wow fadeInRight`}
        data-wow-delay="300ms"
        data-wow-duration="1000ms"
      >
        <img className={classes.photo} src={photo} alt="" />
      </div>
    </div>
  );
};

export default Landing;
