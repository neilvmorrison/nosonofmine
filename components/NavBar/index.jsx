import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing[2]}px ${theme.spacing[6]}px`,
    background: theme.colors.brandPrimary,
    borderBottom: theme.border.main,
  },
  link: {
    padding: theme.spacing[3],
  },
  title: {
    margin: 0,
    color: "#434343",
  },
  accent: {
    color: theme.colors.brandSecondary,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        n<span className={classes.accent}>s</span>om
      </h1>
      <nav className={classes.nav}>
        <a href="" className={classes.link}>
          Listen
        </a>
        <a href="">Watch</a>
        <a href="">Join</a>
      </nav>
    </div>
  );
}

export default NavBar;
