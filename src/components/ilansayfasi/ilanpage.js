import IlanSingle from "./ilan";
import Footer from "../footer/footer";
import data from "../../data.json";

import "./ilanpage.scss";
import MobileMainPage from "../../mobile/mainkategori/m-main";
import MobileIlanSingle from "../../mobile/ilan/m-ilan";

export default function IlanSayfasi({ category, number }) {
  const numbers = Array.from(
    { length: data[category].length - 1 },
    (_, index) => index + 1
  );

  const screen_width = document.documentElement.clientWidth;

  return (
    <>
      {screen_width > 1024 && (
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
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBL1KM707UTPvPH1zUPGKHjSuCkaB5mNkSWsomCE6DTigQaS8t0zngR3Duh4wtJ5LKtYEt78W43fRmJRNs0Si3gnGXNba473GaIo-ehgBtgQZauFMfTIJi2OyH7CPiXz8WUE4TfQnOWdC22qZR6aN0stB9Too34aLMXldEJ2ELvgvek4ZDlJIcdndC/w133-h132/Screenshot_2.png"
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
                      <polyline
                        points="80,1 80,36 1,36 1,1 80,1"
                        class="hl-line"
                      />
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
                      <polyline
                        points="80,1 80,36 1,36 1,1 80,1"
                        class="hl-line"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </header>
            <main>
              <IlanSingle marka={category} number={number} />
            </main>
          </div>
          <Footer />
        </>
      )}
      {screen_width < 1024 && (
        <>
          <MobileMainPage />
          <MobileIlanSingle marka={category} number={number} />
          <Footer />
        </>
      )}
    </>
  );
}
