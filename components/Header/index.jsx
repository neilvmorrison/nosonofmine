import React from "react";
import { createUseStyles } from "react-jss";
import Logo from "../Logo";

const useStyles = createUseStyles(({ spacing }) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: spacing[4],
    background: "rgb(3, 13, 12)",
    "@media (min-width: 1096px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  image: {
    background: 'url("/fish.jpg") center',
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    "@media (min-width: 1096px)": {
      width: "50%",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Logo />
      <div className={classes.image} />
    </header>
  );
}

export default Header;
