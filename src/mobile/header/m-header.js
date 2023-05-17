/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./m-header.css";
import { CSSTransition } from "react-transition-group";

export default function HeaderMobile() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src={
          "https://blogger.googleusercontent.com/img/a/AVvXsEhSYkkKPB6JG0LeRtdb9jsYzZ77tJ0VA3zdvXQpRm02t-tUxgHRGNug7H_BCcSPiW3-d-Gd0tvJ3Ag1-KFb4xtRC_jT6URYYIFgNP0bU1Or4yNtqVzZ9QRbvzHzDMjPh0sWVwb5dah7UFmhe5JSx43C9mc3s8Du6_xBe93Z2YJJMuJqhBuGZ99CcoPK=w134-h80"
        }
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <i id="menuIcon" class="fa fa-bars" aria-hidden="true"></i>
      </button>{" "}
    </header>
  );
}
