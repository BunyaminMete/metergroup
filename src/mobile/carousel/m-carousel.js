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
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjHENlQsGnk4aeS2FSupubOapVvxRPImhdI3k1zia0rI40SXMwq4Q0HbasbPlhZYLxVYLwPgeIFCpdlXPYXPMBo4k14RzLkWP_JKYdtqSjFrQrjseQ6vZhqBTmWawXhRrli7_M0gqW_CkpWytgKlvmNHyGLcmnYjsICsNDFyhj5pnwjJWazpzW8Xqkt"
            />
          </div>
        </a>
        <a href="/bmw-motors">
          <div>
            <img
              alt=""
              src="https://blogger.googleusercontent.com/img/a/AVvXsEh9HQbir1qaBd55onG4I-sFuS1zYtRhL6iYN6KOmBv3HtAFHD1qngPAQUUvfBi0hwSSYvLLPLE_1AtVo1L8_qGzRV8oTijokgwXL6JV3UUpH51-UvybKsCsnT1i6i4QETLWJsvTJ4-lsDP1z1a8WI2FqE44t67OibzUi0TrnYuQKGgc31nB8wx7R_cI"
            />
          </div>
        </a>

        <a href="/hyundai-motors">
          <div>
            <img
              alt=""
              src="https://blogger.googleusercontent.com/img/a/AVvXsEitMb1q8zFBeqsYIP3YI0je6GxvhrlAY2CEJEzqLfyeEHQZ2L3YbEoTKBRQVpm9rC3nMnDwRjZzjenKRK9T-p8Ry7DOGgS_Z2A8Dk9j0u9sEQi_i-BYASw_Ynoe3g0_y4rSzZ7LGkvRIZYx-RFRKmA-u8yJPhgjfITYHTyXvjytCjmmDHKE__XiutWK"
            />
          </div>
        </a>
      </Carousel>
    </>
  );
}
