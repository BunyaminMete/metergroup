import IlanSingle from "./ilan";
import Footer from "../footer/footer";
import data from "../../data.json";

import MobileMainPage from "../../mobile/mainkategori/m-main";
import MobileIlanSingle from "../../mobile/ilan/m-ilan";
import styled, { createGlobalStyle } from "styled-components";

export default function IlanSayfasi({ category, number }) {
  const numbers = Array.from(
    { length: data[category].length - 1 },
    (_, index) => index + 1
  );

  const ComponentStyles = createGlobalStyle`body {
    background-color: #2a2a2a;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: auto;
    color: #fff;
  
    .siteWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-width: 1200px;
      min-height: 100vh;
      background: url('../../images/audi.jpg');
      background-size: cover;
      transition: all 0.2s ease-in-out;
      background-attachment: fixed;
  
      a {
        color: #fff;
        text-decoration: none;
      }
  
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        width: 95%;
  
        nav {
          .siteNav {
            display: flex;
            align-items: center;
            justify-content: space-around;
  
            li {
              position: relative;
              padding: 0 5px;
              margin: 0 5px;
              list-style: none;
              letter-spacing: 0.1rem;
              font-size: largec;
  
              &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 2px;
                background: #000000;
                transform: scaleX(0);
                transition: 0.3s ease-in-out;
              }
  
              &:hover {
                &::after {
                  transform: scaleX(1);
                }
              }
            }
          }
        }
  
        .logo {
          color: #fff;
          text-decoration: none;
          font-size: 30px;
          font-family: 'Caveat', cursive;
          text-align: center;
          padding: 10px 15px;
          backdrop-filter: blur(3px);
        }
  
        .buttonWrapper {
          margin: 0 10px;
  
          .button {
            margin: 0;
            font-size: 16px;
            width: 81px;
            height: 37px;
  
            .text {
              top: 12px;
              letter-spacing: 0.1em;
            }
          }
        }
      }
  
      main {
        text-align: center;
  
        .title {
          margin-top: 20px;
          color: #fff;
          text-decoration: none;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
            'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
          font-size: 90px;
          letter-spacing: 0.5rem;
          text-align: center;
  
          .subtitle {
            margin-top: -20px;
            font-size: 60px;
          }
        }
      }
  
      .button {
        margin: 20px 0;
        background: none;
        color: #fff;
        font-size: 20px;
        position: relative;
        width: 180px;
        height: 60px;
        cursor: pointer;
        border: none;
        letter-spacing: 0.1em;
  
        &:hover {
          .border {
            background-color: rgba(#0e0d0d, 0.7);
          }
          .hl-line {
            stroke-dashoffset: -480;
          }
        }
  
        .text {
          text-align: center;
          position: absolute;
          margin: auto;
          width: 100%;
          height: 100%;
          top: 20px;
        }
  
        .border {
          fill: none;
          stroke-width: 1;
          background-color: rgba(#505050, 0.4);
          transition: all 0.8s ease-in-out;
        }
  
        .background {
          fill: rgba(0, 0, 0, 0);
          stroke: rgb(0, 0, 0);
          transition: all 0.8s ease-in-out;
        }
  
        .hl-line {
          stroke: #5e0000;
          stroke-dasharray: 40 480;
          stroke-dashoffset: 40;
          transition: all 0.8s ease-in-out;
        }
      }
    }
  }
  `;

  const screen_width = document.documentElement.clientWidth;

  return (
    <>
      {screen_width > 1024 && (
        <>
          <div class="siteWrapper">
            <header>
              <nav>
                <ul class="siteNav">
                  <li>
                    <a href="/bmw-motors">KATALOG</a>
                  </li>
                </ul>
              </nav>

              <a href="/" class="logo">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgaGBrmZujvGn9d4qex2WscGOjW4XWP3zFOEiJKuXEXjkpBM3bJ9qMOAQJBMkXcqnZKsUfkpHch6gPB1LOgKJd17XNy2pbhJY2Y0UKL1l83KAVDSUVsWf0JrHyHAHwXX5NM1kCtPbbZYEMogmyauhQhEw-gYcZfHe-qoM4KLlQ9_ExKaCKyQLYoa46L=w114-h110"
                  alt="logo"
                ></img>
              </a>

              <div>
                <a href="#0" class="buttonWrapper"></a>
                <a href="#0" class="buttonWrapper"></a>
              </div>
            </header>
            <main>
              <IlanSingle marka={category} number={number} />
            </main>
          </div>
          <Footer />
        </>
      )}
      {screen_width < 1024 && (
        <>
          <MobileMainPage />
          <MobileIlanSingle marka={category} number={number} />
          <Footer />
        </>
      )}
    </>
  );
}
