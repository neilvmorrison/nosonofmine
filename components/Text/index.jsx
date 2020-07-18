import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  h1: theme.text.h1,
  h2: theme.text.h2,
  h3: theme.text.h3,
  paragraph: theme.text.paragraph,
}));

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  paragraph: "p",
};

function Text({ variant = "paragraph", component, ...other }) {
  const classes = useStyles();
  const Component = component ? variants[component] : variants[variant];
  return <Component className={classes[variant]} {...other} />;
}

Text.propTypes = {};

export default Text;
