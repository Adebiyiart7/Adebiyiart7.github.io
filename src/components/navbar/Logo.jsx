import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/img/logo.png";

const useStyle = makeStyles({
  logo: {
    color: "var(--primaryColor)",
    fontWeight: 800,
  },
});

const Logo = ({ mediaQueries: { tablet } }) => {
  const classes = useStyle();
  const styles = {
    logo: {
      width: tablet ? 200 : "initial",
      fontSize: tablet ? 35 : 50,
      marginTop: tablet ? 5 : 10,
    },
  };

  return (
    <a className={classes.logo} style={styles.logo} href="/">
      <img
        src={logo}
        className={classes.logo}
        style={{ width: 50, aspectRatio: 1 }}
      />
    </a>
  );
};

export default Logo;
