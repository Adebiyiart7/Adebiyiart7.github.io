import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  nav: {
    color: "var(--white)",
    textShadow: "0 0 5px #000",
    fontSize: 16,
    padding: "10px 20px",
    fontWeight: 500,
    marginLeft: 12,
    borderRadius: 4,
  },
  navs: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
  },
}));

const Navigations = ({ mediaQueries: { tablet } }) => {
  const [mobileNavDisplay, setMobileNavDisplay] = useState("none");

  const theme = useTheme();
  const classes = useStyle();
  const mobile = useMediaQuery(theme.breakpoints.down(768));

  const styles = {
    menuBar: {
      display: mobile ? "initial" : "none",
      position: "absolute",
      top: "12px",
      right: 0,
      alignSelf: "center",
    },
  };

  const handleNavbar = () => {
    if (mobileNavDisplay === "none") {
      setMobileNavDisplay("block");
    } else {
      setMobileNavDisplay("none");
    }
  };

  return (
    <>
      <ul
        className={classes.navs}
        style={{
          display: mobile ? mobileNavDisplay : "flex",
          marginBottom: tablet ? "initial" : 0,
        }}
      >
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="0ms"
          data-wow-duration="1000ms"
          href="#home"
        >
          <li>Home</li>
        </a>
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="100ms"
          data-wow-duration="1000ms"
          href="#about"
        >
          <li>About</li>
        </a>
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="200ms"
          data-wow-duration="1000ms"
          href="#services"
        >
          <li>Services</li>
        </a>
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="300ms"
          data-wow-duration="1000ms"
          href="#projects"
        >
          <li>Projects</li>
        </a>
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="400ms"
          data-wow-duration="1000ms"
          href="#certifications"
        >
          <li>Certifications</li>
        </a>
        <a
          className={`${classes.nav} wow fadeInDown`}
          data-wow-delay="500ms"
          data-wow-duration="2000ms"
          href="#contact-me"
        >
          <li>Contact Me</li>
        </a>
      </ul>
      <MdMenu
        onClick={handleNavbar}
        style={styles.menuBar}
        color="var(--white)"
        size={30}
      />
    </>
  );
};

export default Navigations;
