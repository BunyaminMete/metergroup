import React from "react";
import { Route, Routes } from "react-router-dom";

import IlanSayfasi from "../components/ilansayfasi/ilanpage";
import data from "../data.json";

export default function SoloAdvert({ marka }) {
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

  const numbers = Array.from(
    { length: data[marka].length },
    (_, index) => index
  );

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }

  const routes2 = numbers.map((link) => {
    const modelSlug = convertToSlug(data[marka][link].model);

    return (
      <Route
        key={link}
        path={`/${modelSlug}`}
        element={<IlanSayfasi category={marka} number={link} />}
      />
    );
  });

  return (
    <Routes>
      <>{routes2}</>
    </Routes>
  );
}
