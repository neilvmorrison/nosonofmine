import React from "react";
import { createUseStyles } from "react-jss";
import Logo from "../Logo";

const useStyles = createUseStyles(({ spacing }) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    background: "rgb(3, 13, 12)",
    // backgroundSize: "cover",
  },
  image: {
    background: 'url("/fish.jpg")',
    backgroundSize: "cover",
    width: "50%",
    height: "100vh",
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
