import Head from "next/head";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import IconTray from "../components/IconTray/IconTray";
import Logo from "../components/Logo";
import Header from "../components/Header";
import About from "../components/About";
import NavBar from "../components/NavBar";

config.autoAddCss = false;
library.add(fab);

export default function Home() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <IconTray />
      <About />
      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #fdfdfd;
          font-family: -apple-system, Rajdhani, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
