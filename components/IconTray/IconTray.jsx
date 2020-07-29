import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = createUseStyles(({ shadow, border, spacing }) => ({
  root: {
    position: "fixed",
    bottom: 10,
    right: 8,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: spacing[2],
    background: "#212121",
    padding: spacing[2],
    borderRadius: border.radius,
    boxShadow: shadow,
  },
  link: {
    color: "#fff",
    "&:hover": {
      color: "#757575",
    },
  },
}));

const icons = [
  // {
  //   href: "",
  //   icon: "apple",
  // },
  // {
  //   href: "",
  //   icon: "spotify",
  // },
  {
    href: "https://www.instagram.com/nosonofmine/",
    icon: "instagram",
  },
  {
    href: "https://www.facebook.com/nosonofmine",
    icon: "facebook",
  },
  // {
  //   href: "",
  //   icon: "youtube",
  // },
];

function IconTray() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {icons.map((icon) => (
        <a
          href={icon.href}
          key={icon.href}
          className={classes.link}
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", icon.icon]} size="lg" />
        </a>
      ))}
    </div>
  );
}

export default IconTray;
