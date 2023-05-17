/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import styled, { createGlobalStyle } from "styled-components";
import "./m-h2.css";

// Component özgü SCSS stilleri
const ComponentStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
}

:root {
  --theme-light-color: hsl(0, 0%, 98%);
  --theme-dark-color: hsl(0, 0%, 8%);
  --text-gray-color: hsl(0, 0%, 41%);
  --body-font: 'Epilogue', sans-serif;
}

body {
  background-color: var(--theme-light-color);
  font-family: var(--body-font);
  line-height: 1;
}

img {
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

ol,
ul {
  list-style: none;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 1440px) {
    max-width: 1200px;
  }
}

header {
  position: fixed;
  width: 100%;
  height: 90px;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: black;
  ;
}

.logodeneme{
  height: 58px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: all 0.5s ease;


  &__menu {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 1024px) {
      position: absolute;
      top: 100%;
      right: 200%;
      width: 320px;
      min-height: calc(100vh - 78px);
      background-color: var(--theme-light-color);
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2rem;
      padding: 2rem 1rem;
      transition: all 0.5s ease;

      &.right-open {
        right: 0;
      }
    }
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      flex-grow: 0;
    }

    & li a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      transition: all 0.5s ease;
      color: var(--text-gray-color);

      &:hover {
        color: var(--theme-dark-color);
      }
    }

    & li .arrow {
      transition: 0.3s ease;

      &.up {
        transform: rotate(180deg);
      }
    }

    &-drop {
      display: inline-block;
      position: relative;

      &-menu {
        display: none;
        position: absolute;
        margin-top: 1rem;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
        background-color: var(--theme-light-color);
        border-radius: 1rem;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.122);
        z-index: 999;
        

        @media screen and (max-width: 1024px) {
          position: inherit;
          background-color: transparent;
          box-shadow: none;
          padding: 0.5rem 1rem;
        }

        &.open {
          display: flex;
        }
        &.features {
          right: 0;
        }

        &.company {
          left: 0;
          width: max-content;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
      flex-direction: column;
    }

    & a {
      color: var(--text-gray-color);
      font-weight: 500;
      transition: 0.3s ease;

      &:hover {
        color: var(--theme-dark-color);
      }
    }

    &-register {
      width: 100%;
      font-weight: 500;
      color: var(--text-gray-color);
      padding: 0.8rem 1.5rem;
      background-color: var(--theme-light-color);
      border: 2px solid var(--text-gray-color);
      border-radius: 1rem;
      transition: 0.3s ease;

      &:hover {
        border: 2px solid var(--theme-dark-color);
        color: var(--theme-dark-color);
      }
    }
  }

  & .menu {
    display: none;
    float: left;
    transition: all 275ms ease;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
      display: block;
      width: 50px;
    }

    & span {
      display: block;
      width: 22px;
      height: 4px;
      background: #000000;
      margin-bottom: 2px;
      border-radius: 1px;
      transition: all 275ms ease;
    }

    &.active {
      transform: rotate(-45deg);

      .bar1 {
        transform: rotate(0deg) translateY(6px);
      }

      .bar2 {
        opacity: 0;
      }

      .bar3 {
        transform: rotate(-90deg) translateX(5px);
      }
    }
  }
}

main {
  min-height: calc(100vh - 5rem);
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-hero {
  display: flex;
  gap: 2.5rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4rem;
      flex-grow: 1;

      @media screen and (max-width: 768px) {
        align-items: center;
        gap: 2rem;
      }

      &-header {
        font-size: 5.5rem;
        font-weight: 700;
        color: var(--theme-dark-color);

        @media screen and (max-width: 1200px) {
          font-size: 4.5rem;
        }
        @media screen and (max-width: 768px) {
          text-align: center;
          font-size: 2rem;

          & br {
            display: none;
          }
        }
      }

      &-description {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5;
        width: 65%;
        color: var(--text-gray-color);

        @media screen and (max-width: 992px) {
          width: 100%;
        }

        @media screen and (max-width: 768px) {
          text-align: center;
          font-size: 1rem;
        }
      }

      &-button {
        padding: 1.2rem 2rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--theme-light-color);
        background: var(--theme-dark-color);
        border: 1px solid var(--theme-dark-color);
        border-radius: 1rem;
        transition: 0.3s ease;

        &:hover {
          color: var(--theme-dark-color);
          background-color: var(--theme-light-color);
        }
      }
    }

    &-clients {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      @media screen and (max-width: 992px) {
        justify-content: center;
        flex-wrap: wrap;
      }

      & svg {
        width: 100%;
      }
    }
  }

  &__right {
    width: 60%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    &-desktop {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &-mobile {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
}

`;

// Bileşen için stillendirilmiş bir div oluşturun
const StyledComponent = styled.div`
  // Bileşenin stilleri burada tanımlanır
  // ...
`;

const HeaderMobile2 = () => {
  useEffect(() => {
    const toggleButtons = document.querySelectorAll(".navbar__list-drop");
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar__menu");

    const handleMenuClick = () => {
      menu.classList.toggle("active");
      navbar.classList.toggle("right-open");
    };

    const handleToggleButton = (toggleButton) => {
      toggleButton.firstElementChild.lastElementChild.classList.toggle("up");
      toggleButton.lastElementChild.classList.toggle("open");
    };

    menu.onclick = handleMenuClick;

    toggleButtons.forEach((toggleButton) => {
      toggleButton.addEventListener("click", () => {
        handleToggleButton(toggleButton);
      });
    });

    return () => {
      // Cleanup
      menu.onclick = null;
      toggleButtons.forEach((toggleButton) => {
        toggleButton.removeEventListener("click", () => {
          handleToggleButton(toggleButton);
        });
      });
    };
  }, []);

  return (
    <>
      <ComponentStyles />
      <StyledComponent>
        <header>
          <nav className="navbar container">
            <a href="#">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhSYkkKPB6JG0LeRtdb9jsYzZ77tJ0VA3zdvXQpRm02t-tUxgHRGNug7H_BCcSPiW3-d-Gd0tvJ3Ag1-KFb4xtRC_jT6URYYIFgNP0bU1Or4yNtqVzZ9QRbvzHzDMjPh0sWVwb5dah7UFmhe5JSx43C9mc3s8Du6_xBe93Z2YJJMuJqhBuGZ99CcoPK=w134-h80"
                alt="logo"
                className="logodeneme"
              />
            </a>
            <div className="navbar__menu">
              <ul className="navbar__list">
                <li className="navbar__list-drop">
                  <a href="#">
                    KOMPLE MOTOR
                    <svg
                      className="arrow"
                      width="10"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#686868"
                        strokeWidth="1.5"
                        fill="none"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                  <ul className="navbar__list-drop-menu features">
                    <li>
                      <a href="/bmw-motors">
                        <span>BMW</span>
                      </a>
                    </li>

                    <li>
                      <a href="/volkswagen-motors">VOLKSWAGEN</a>
                    </li>
                    <li>
                      <a href="/hyundai-motors">HYUNDAI</a>
                    </li>
                    <li>
                      <a href="/kia-motors">KIA</a>
                    </li>
                    <li>
                      <a href="/toyota-motors">TOYOTA</a>
                    </li>
                    <li>
                      <a href="/audi-motors">AUDI</a>
                    </li>
                    <li>
                      <a href="/landrover-motors">LAND ROVER</a>
                    </li>
                    <li>
                      <a href="/mercedes-motors">MERCEDES</a>
                    </li>
                    <li>
                      <a href="/seat-motors">SEAT</a>
                    </li>
                    <li>
                      <a href="/skoda-motors">SKODA</a>
                    </li>
                    <li>
                      <a href="/honda-motors">HONDA</a>
                    </li>
                    <li>
                      <a href="/mitsubishi-motors">MITSUBISHI</a>
                    </li>
                    <li>
                      <a href="/ford-motors">FORD</a>
                    </li>

                    <li>
                      <a href="/jaguar-motors">JAGUAR</a>
                    </li>
                    <li>
                      <a href="/minicooper-motors">MINI COOPER</a>
                    </li>
                  </ul>
                </li>
                <li className="navbar__list-drop">
                  <a href="#">
                    Company
                    <svg
                      className="arrow"
                      width="10"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#686868"
                        strokeWidth="1.5"
                        fill="none"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </a>
                  <ul className="navbar__list-drop-menu company">
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
              <div className="navbar__buttons"></div>
            </div>
            <div className="demo">
              <div id="menu-icon" className="menu">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
            </div>
          </nav>
        </header>
      </StyledComponent>
    </>
  );
};

export default HeaderMobile2;
