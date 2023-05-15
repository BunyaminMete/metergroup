import IlanSingle from "./ilan";
import Footer from "../footer/footer";

import "./ilanpage.scss";

export default function IlanSayfasi({ category }) {
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
          <IlanSingle />
        </main>
      </div>
      <Footer />
    </>
  );
}
