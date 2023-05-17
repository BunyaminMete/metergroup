import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel-m.css";

export default function CarouselMobile() {
  return (
    <>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        className="carousel"
      >
        <a href="/audi-motors">
          <div>
            <img
              alt=""
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIkWbZNgGzaoRqkrPs6GrkDbYg3eDvfK_wEKvyev700RvzhWLIt-fyMBtO2oDyFRCY_oFzA1etsAWTqdNIodC_6bymHFjoeOFh9-mUekgtVs6uwojW1jnfskvLc3fSeWaXg-xbTTu79lIM7goQ6i-1axk4oHOBlF4UE6U0wk5HJZ0YUXZMRFp5cIt1/s1280/audibanner.jpg"
            />
          </div>
        </a>
        <a href="/bmw-motors">
          <div>
            <img
              alt=""
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLMF5KjYqhBDWnIMXm8GYyf2mjWaM76U3hc4-HBzaOnZ1s08e5poO4UY7rtDoMejCZig2PQfttDkHxiy8Bm96yXRuId4qVllRdFnCbuNR3SeKXlvpqhzEyR5ciA5r3uAW-oeqQYbUyMGvmLPywM-0ztC7VRKDgMoN-EhbOm2UJ_jY34dxveqSwtdwm/s1280/bmwbanner.jpg"
            />
          </div>
        </a>

        <a href="/hyundai-motors">
          <div>
            <img
              alt=""
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguvuRBQyWodYeCOhNOwhWLLbvgY46F8lTSA72dUhBd1apgjKS7vEOV_59YsRrX86NnuZ9ABABBRAVNUXIfrpnnMJpctkJocNo9FRDdlNaC8bIy8FljW16ULOFIMZcxlCR3CBoT4c39NeOz1yUqb7t8QFhpLiT5koc0AQr02F_KVJ8jCRDyvpXn2WCm/s1280/hyundaibanner.jpg"
            />
          </div>
        </a>
      </Carousel>
    </>
  );
}
