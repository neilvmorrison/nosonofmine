import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Logo from "../Logo";
import Skull from "./components/Skull";
import Banner from "./components/Banner";
import RealHeader from "./components/RealHeader";

const useStyles = createUseStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.colors.black,
    color: theme.colors.brandSecondary,
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
  stretchText: {
    fontSize: 200,
    transform: "scale(1.5, 3)",
    color: theme.colors.brandSecondary,
  },
  darkBanner: {
    color: theme.colors.brandSecondary,
  },
  lightBanner: {
    color: theme.colors.brandPrimary,
    background: theme.colors.brandTertiary,
  },
}));

function DarkBanner() {
  const classes = useStyles();
  return <Banner className={classes.darkBanner}>nosonofmine</Banner>;
}

function LightBanner() {
  const classes = useStyles();
  return <Banner className={classes.lightBanner}>timetopanic</Banner>;
}

const components = {
  0: Skull,
  1: DarkBanner,
  2: LightBanner,
  3: RealHeader,
};

function Header() {
  const classes = useStyles();
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setAnimationIndex((animationIndex) => animationIndex + 1);
    }, 3000);
    if (animationIndex === 3) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [animationIndex]);

  const Component = components[animationIndex];

  return (
    <header
      className={clsx([
        classes.root,
        animationIndex === 2 ? classes.lightBanner : null,
      ])}
    >
      <Component />
    </header>
  );
}

export default Header;
