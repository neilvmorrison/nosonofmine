import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  logo: {
    ...theme.text.logo,
    fontSize: 32,
    margin: 0,
    "@media (min-width: 768px)": {
      fontSize: theme.text.logo.fontSize,
    },
  },
  accent: {
    fontWeight: 700,
    lineHeight: 0.2,
    color: theme.colors.brandSecondary,
  },
  albumText: {
    color: "#fff",
    fontSize: 48,
    fontWeight: 700,
    margin: 0,
  },
  date: {
    color: "#fff",
    fontSize: 56,
    margin: 0,
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.logo}>
        no<span className={classes.accent}>son</span>ofmine
      </h1>
      <p className={classes.albumText}>time to panic?</p>
      <p className={classes.date}>07.28.2020</p>
    </div>
  );
}

export default Logo;
