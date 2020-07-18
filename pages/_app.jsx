import React from "react";
import { ThemeProvider } from "react-jss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import App from "next/app";

import theme from "../config/theme";

class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>No Son of Mine</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://use.fontawesome.com/301a4bef63.js"></script>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
