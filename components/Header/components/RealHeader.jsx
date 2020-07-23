import React from "react";
import { Fade } from "react-reveal";
import { createUseStyles } from "react-jss";
import Logo from "../../Logo";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    maxWidth: "50%",
  },
}));

function RealHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />
      <Fade>
        <img src="/fish.jpg" className={classes.image} />
      </Fade>
    </div>
  );
}

export default RealHeader;
