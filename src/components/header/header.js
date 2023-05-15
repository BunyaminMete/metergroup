import ProductContainer from "../container/containerProduct";
import Footer from "../footer/footer";
import SideMenu from "../side-dropdown/sidemenu";
import LogoSlider from "../slider/logoslider";
import ImageSlider from "../slider/slide";
import "./header.scss";

export default function Header() {
  return (
    <>
      <div class="siteWrapper">
        <header>
          <nav>
            <ul class="siteNav">
              <li>
                <a href="/bmw-motors">Ürünler</a>
              </li>
            </ul>
          </nav>

          <a href="/" class="logo">
            <img
              src="https://nispetiyemotors.com/wp-content/themes/nispetiyemotors/imaj/logo-beyaz.svg"
              alt="logo"
            ></img>
          </a>

          <div>
            <a href="#0" class="buttonWrapper">
              <button class="button">
                <div class="text">Log In</div>
                <svg
                  width="81px"
                  height="37px"
                  viewBox="0 0 81 37"
                  class="border"
                >
                  <polyline
                    points="80,1 80,36 1,36 1,1 80,1"
                    class="background"
                  />
                  <polyline points="80,1 80,36 1,36 1,1 80,1" class="hl-line" />
                </svg>
              </button>
            </a>
            <a href="#0" class="buttonWrapper">
              <button class="button">
                <div class="text">Sign Up</div>
                <svg
                  width="81px"
                  height="37px"
                  viewBox="0 0 81 37"
                  class="border"
                >
                  <polyline
                    points="80,1 80,36 1,36 1,1 80,1"
                    class="background"
                  />
                  <polyline points="80,1 80,36 1,36 1,1 80,1" class="hl-line" />
                </svg>
              </button>
            </a>
          </div>
        </header>
        <main>
          <ImageSlider />
          {/* <div class="title">
            METERGROUP
            <div class="subtitle">RANF SATIŞ</div>
          </div> */}

          <LogoSlider />
          <SideMenu />
          <ProductContainer />
          {/* <button class="button">
            <div class="text">EXPLORE</div>
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                class="background"
              />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
          </button> */}
        </main>
        {/* <footer>
          <a class="author" href="https://itsmenatalie.com" target="_blank">
            Created by BunyaminMete
          </a>
          <div class="date">&copy;2023 MTG</div>
        </footer> */}
      </div>
      <Footer />
    </>
  );
}
