// import "./m-ilan.css";
import data from "../../data.json";
import { createGlobalStyle } from "styled-components";

function splitAndWrap(sentence) {
  const lastIndex = sentence.lastIndexOf(",");
  const parts = sentence.substring(0, lastIndex).split(",");

  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>{part}</div>
      ))}
      <br />

      {sentence.substring(lastIndex + 2)}
    </div>
  );
}

export default function MobileIlanSingle({ marka, number }) {
  const formattedValue = new Intl.NumberFormat("tr-TR").format(
    data[marka][number].price * 20.24
  );

  const upperCaseMarka = marka.toUpperCase();

  const sentence = data[marka][number].aciklama;

  const ComponentStyles = createGlobalStyle`:root {
    --green: #60ba00;
    --dark-text: hsl(0, 0%, 13%);
    --grey-text: hsl(0, 0%, 29%);
    --light-grey-text: hsl(0, 0%, 45%);
    --very-light-text: hsl(0, 0%, 86%);
  }
  
  /* 
    -------------------------
            GENERAL
    -------------------------
    */
  
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  body {
    display: flex;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    color: var(--grey-text);
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.2;
  }
  
  .inline-block {
    display: inline-block;
  }
  
  .product-card {
    width: 400px;
    min-width: 200px;
    height: 680px;
    background-color: rgb(255, 255, 255);
    margin: 10px;
    overflow: auto;
    padding: 10px 20px;
    padding-top: 0px;
    position: relative;
    margin-top: 100px;
    display: block;
  }
  
  @media screen and (min-width: 300px) and (max-width: 350px) {
    .product-card {
      width: 340px;
      min-width: 200px;
      height: 680px;
      background-color: rgb(0, 0, 0);
      overflow: auto;
      padding: 10px 20px;
      padding-top: 0px;
      position: relative;
      margin-top: 100px;
      display: inline-block;
      margin-left: -10px;
    }
  }
  
  @media screen and (min-width: 350px) and (max-width: 420px) {
    .product-card {
      width: 400px;
      min-width: 200px;
      height: 680px;
      background-color: rgb(0, 0, 0);
      margin: 10px;
      overflow: auto;
      padding: 10px 20px;
      padding-top: 0px;
      position: relative;
      margin-top: 100px;
      display: block;
    }
  }
  
  @media screen and (min-width: 420px) and (max-width: 1024px) {
    .product-card {
      width: 460px;
      min-width: 200px;
      height: 680px;
      background-color: rgb(0, 0, 0);
      margin: 10px;
      overflow: auto;
      padding: 10px 20px;
      padding-top: 0px;
      position: relative;
      margin-top: 100px;
      display: block;
    }
  }
  
  .product-card p {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
  }
  
  .product-card .top {
    z-index: 1;
    position: sticky;
    top: 0;
    padding-top: 10px;
    height: 20px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    background-color: white;
  }
  
  .product-card .top p {
    margin-left: auto;
  }
  
  .product-card svg {
    width: 25px;
  }
  
  .product-card .top path {
    fill: var(--grey-text);
  }
  
  .main {
    margin-top: 10px;
  }
  
  .main img {
    width: 100%;
    height: 380px;
    margin-top: -12px;
    object-fit: cover;
    /*   float: left; */
  }
  
  .main .price {
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    margin-top: -40px;
    margin-left: 00px;
    margin-bottom: 20px;
    z-index: 100;
    position: relative;
    font-weight: bold;
    font-size: 20px !important;
  }
  
  .main h2 {
    color: white;
  }
  
  .main h3 {
    font-size: 0.9rem;
    padding: 5px 0px;
    font-weight: 500;
    color: white;
  }
  
  .main .price {
    font-size: 18px;
  }
  
  .details {
    margin: 30px 0px 60px 0px;
  }
  
  .detail {
    display: flex;
    align-items: center;
    margin: 15px 0px;
    font-weight: 500;
    color: white;
    border-bottom: 1px solid red;
  }
  
  .detail .type {
    color: white;
    font-weight: bold;
  }
  
  button.buy {
    margin: auto;
    display: block;
    width: 100%;
    height: 60px;
    font-size: 16px;
    background-color: var(--green);
    border: none;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    font-weight: 500;
  }
  
  .more {
    color: white;
    font-weight: bold;
  }
  `;
  return (
    <>
      <ComponentStyles />
      <div class="product-card" id="product-card3">
        <div class="top"></div>
        <div class="main">
          <img alt="motor" src={data[marka][number].image} id="main-image3" />
          <div class="price" id="price3">
            {formattedValue} TL
          </div>
          <div class="inline-block">
            <h3>{upperCaseMarka} Motoru</h3>
            <h2>{data[marka][number].model} </h2>
          </div>
        </div>
        <div class="details" id="details3">
          <div class="detail">
            <p class="type"> Ürün açıklaması: </p>
          </div>

          <div class="more">
            <> {splitAndWrap(sentence)}</>
          </div>
        </div>
      </div>
    </>
  );
}
