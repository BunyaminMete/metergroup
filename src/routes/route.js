import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainpage";
import CategoryPages from "../components/categorypage/category";
import SoloAdvert from "./route2";

function App({ marka }) {
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

  const routes = categories.map((category) => (
    <Route
      key={category}
      path={`/${category}-motors`}
      element={<CategoryPages category={category} />}
    />
  ));

  const soloAdverts = categories.map((marka) => (
    <SoloAdvert key={marka} marka={marka} />
  ));

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {routes}
      </Routes>
      {soloAdverts}
    </>
  );
}

export default App;
