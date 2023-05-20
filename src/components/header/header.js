import CarouselMobile from "../../mobile/carousel/m-carousel";
import LogoSliderMobile from "../../mobile/logoslider/m-logoslide";
import MobileMainPage from "../../mobile/mainkategori/m-main";
import MobileOneCikarilanlar from "../../mobile/onecikarilan/m-onecikar";
import ProductContainer from "../container/containerProduct";
import Footer from "../footer/footer";
import SideMenu from "../side-dropdown/sidemenu";
import LogoSlider from "../slider/logoslider";
import ImageSlider from "../slider/slide";
import "./header.scss";

export default function Header() {
  const screen_width = document.documentElement.clientWidth;

  return (
    <>
      {screen_width > 1200 && (
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
              <ImageSlider />

              <LogoSlider />
              <SideMenu />
              <ProductContainer />
            </main>
          </div>
          <Footer />
        </>
      )}
      {screen_width < 1200 && (
        <>
          <MobileMainPage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CarouselMobile />
          <LogoSliderMobile />
          <MobileOneCikarilanlar />
          <Footer />
        </>
      )}
    </>
  );
}
