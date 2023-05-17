import "./m-ilan.css";
import data from "../../data.json";
import styled, { createGlobalStyle } from "styled-components";

export default function MobileIlanSingle({ marka, number }) {
  const formattedValue = new Intl.NumberFormat("tr-TR").format(
    data[marka][number].price * 20.24
  );

  const upperCaseMarka = marka.toUpperCase();

  const ComponentStyles = createGlobalStyle`
  :root {
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
    width: 270px;
    min-width: 200px;
    height: 680px;
    border-radius: 5px;
    background-color: white;
    margin: 20px;
    overflow: auto;
    padding: 20px 45px;
    padding-top: 0px;
    position: relative;
  }
  
  .product-card p {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
  }
  
  .product-card .top {
    z-index: 100;
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
    height: 330px;
    object-fit: cover;
    /*   float: left; */
  }
  
  .main .price {
    width: 70px;
    height: 70px;
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: -40px;
    margin-left: -10px;
    margin-bottom: 20px;
    z-index: 100;
    position: relative;
  }
  
  .main h2 {
    color: var(--dark-text);
  }
  
  .main h3 {
    font-size: 0.9rem;
    padding: 5px 0px;
    font-weight: 500;
    color: var(--green);
  }
  
  .main .price {
    font-size: 18px;
  }
  
  .main img.small {
    animation: image-shrink 0.4s forwards;
  }
  .main img.large {
    animation: image-grow 0.4s forwards;
  }
  
  .main .price.small {
    display: none;
  }
  
  .main h2.small {
    /*   margin-bottom: 15px; */
  }
  
  
  .details {
    margin: 30px 0px 60px 0px;
  }
  .details.small {
    margin: 30px 0px;
  }
  
  .detail {
    display: flex;
    align-items: center;
    margin: 15px 0px;
    font-weight: 500;
  }
  
  .detail .type {
    color: var(--light-grey-text);
  }
  
  .detail .description {
    margin-left: auto;
    color: var(--dark-text);
  }
  
  .detail svg {
    vertical-align: middle;
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
  
  .detail path {
    fill: var(--very-light-text);
  }
  

  
  .detail-blocks {
    display: flex;
    justify-content: center;
    margin: 30px 0px;
    text-align: center;
  }
  
  .detail-block {
    width: 50%;
    display: inline-block;
    border: 2px solid #60ba001c;
    padding: 25px 0px;
  }
  
  .detail-block svg {
    margin: 0px -3px;
  }
  
  .detail-block path {
    fill: var(--very-light-text);
  }
  .detail-block path.filled {
    fill: var(--grey-text);
  }
  
  .detail-block.left {
    border-right: none;
  }
  
  .detail-block .type {
    color: var(--green);
  }
  
  .detail-block .quantity {
    font-size: 18px;
    font-weight: 500;
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
  
  
  
  @keyframes image-shrink {
    0% {
      width: 100%;
      height: 330px;
      margin-right: 0px;
    }
    100% {
      width: 70px;
      height: 80px;
      margin-right: 15px;
    }
  }
  
  @keyframes image-grow {
    0% {
      width: 70px;
      height: 80px;
      margin-right: 15px;
    }
    100% {
      width: 100%;
      height: 330px;
      margin-right: 0px;
    }
  }
  
`;

  return (
    <>
      {/* <ComponentStyles /> */}
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
            <p>
              Hyundai Accent Komple Motor / Sandık Motor (RB/RC) <br />
              (2011–2017) Hyundai Accent Komple Motor / Sandık Motor
              <br />
              (2017'den günümüze) Hyundai Elantra Komple Motor / Sandık
              <br />
              Motor (MD/UD) (2010–2015) Hyundai Elantra Komple Motor /
              <br />
              Sandık Motor (AD) (2015–2020) Hyundai Elantra Komple Motor /
              <br />
              Sandık Motor (CN7) (2020-günümüz) Hyundai i30 Komple Motor /
              <br />
              Sandık Motor (GD) (2011–2017) Hyundai i30 Komple Motor /
              <br />
              Sandık Motor (PD) (2016-günümüz)
              <br /> Metergroup tarafından satılmakta olan tüm Motorlar Sıfır /
              Faturalı ve Ruhsata işlenebilir özelliktedir
            </p>

            <button class="buy">{formattedValue} TL</button>
          </div>
        </div>
      </div>
    </>
  );
}
