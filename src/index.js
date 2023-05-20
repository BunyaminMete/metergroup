import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./routes/route";

const root = ReactDOM.createRoot(document.getElementById("root"));

const categories = [
  "bmw",
  "kia",
  "toyota",
  "audi",
  "hyundai",
  "volkswagen",
  "jaguar",
  "landrover",
  "minicooper",
  "honda",
  "ford",
  "mitsubishi",
  "mercedes",
  "seat",
  "skoda",
];

root.render(
  <>
    <BrowserRouter>
      <App marka={"bmw"} />
    </BrowserRouter>
  </>
);
