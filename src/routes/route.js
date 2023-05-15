import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainpage";
import CategoryPages from "../components/categorypage/category";
import IlanSayfasi from "../components/ilansayfasi/ilanpage";

function App() {
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

  return (
    <Routes>
      <>
        <Route path="/" element={<MainPage />} />
        {routes}
        <Route
          path="/bmw-m5-m6-x5-x6-s63-b44-b-50-komple-motor"
          element={<IlanSayfasi category={"bmw"} />}
        />
      </>
    </Routes>
  );
}

export default App;
