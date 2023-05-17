import MobileKategoriler from "../../mobile/kategori/m-kategori";
import MobileMainPage from "../../mobile/mainkategori/m-main";
import CategoryContainer from "../dynamic-container/dynamic-container";
import Footer from "../footer/footer";
import SideMenu2 from "../side-dropdown/sidemenu2";

import "./category.scss";

export default function CategoryPages({ category }) {
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
                    <a href="/">Ürünler</a>
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
              <SideMenu2 />
              <CategoryContainer kategori={category} />
            </main>
          </div>
          <Footer />
        </>
      )}
      {screen_width < 1024 && (
        <>
          <MobileMainPage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MobileKategoriler kategori={category} />
          <Footer />
        </>
      )}
    </>
  );
}
