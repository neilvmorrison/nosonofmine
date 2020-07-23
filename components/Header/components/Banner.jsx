import React from "react";
import { Fade } from "react-reveal";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {},
}));

function Banner({ children, className }) {
  const classes = useStyles();
  return (
    <Fade>
      <h1 className={clsx(classes.root, className)}>{children}</h1>;
    </Fade>
  );
}

export default Banner;
