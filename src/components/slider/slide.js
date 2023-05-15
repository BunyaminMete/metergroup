import React from "react";
import "./slider.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageSlider() {
  return (
    <>
      <div className="carousel-container">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          width={1300}
          autoPlay={true}
        >
          <div>
            <img
              alt=""
              src="https://platincdn.com/2983/dosyalar/images/sdsdbanner1.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://platincdn.com/2983/dosyalar/images/sdsdbanner2.jpg"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://platincdn.com/2983/dosyalar/images/sdsdbanner3.jpg"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
