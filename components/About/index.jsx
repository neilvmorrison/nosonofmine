import React from "react";
import { createUseStyles } from "react-jss";

import Text from "../Text";

const useStyles = createUseStyles(({ spacing }) => ({
  root: {
    height: "100vh",
    maxWidth: 768,
    margin: "0 auto",
    marginTop: spacing[7],
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Text component="h2" variant="h3">
        NO SON OF MINE
      </Text>
      <Text>
        No son of mine is an alternative rock band from Toronto, Ontario. The
        outfit was formed sometime in late 2017, bringing together ex-Ruiners'
        Club rhythm section with Urgent vocal melodies weave in between brash,
        overdriven riffs
      </Text>
    </div>
  );
}

export default About;
