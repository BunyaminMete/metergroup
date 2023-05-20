/* eslint-disable jsx-a11y/anchor-has-content */
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
                    <a href="/">KATALOG</a>
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
