import React from "react";
import "./footer.css";

export default function App() {
  return (
    <>
      <footer class="section bg-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="aciklamameter">
                <h6 class="footer-heading text-uppercase text-white">
                  <img
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEi06_g0t6XuiACIYxc1GUCKBR83AQti7dxb1Y1SH-OW6qytjM0DlaPvmbUUIy9jevUnptVvCWKoox8mmNE6eUinkOWHTrN6jgQ3ax0L2yc2Ntymuraa8o1BJdMF2AeBWad7gnREzTpfH5S_gjW3VRGasUu7LJGJlnY2VivyT_6xs-WFTU9rJ81j_zEj"
                    alt="logo"
                    className="denemelogo"
                  />
                </h6>
                Metersgroup.com ' a hoşgeldiniz sormak istediğiniz tüm
                sorularınız için lütfen müşteri temsilcimiz ile iletişime
                geçiniz.
              </div>
            </div>

            <div id="markalar" class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Markalar
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="/bmw-motors">BMW </a>
                  </li>
                  <li>
                    <a href="/mercedes-motors">MERCEDES</a>
                  </li>
                  <li>
                    <a href="/audi-motors">AUDI</a>
                  </li>
                  <li>
                    <a href="/kia-motors">KIA</a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="iletisim" class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  İletişim
                </h6>
                <p class="contact-info">
                  <a href="tel:05060968194">+90 506 096 81 94</a>
                </p>
                <p class="contact-info">
                  <a href="tel:05354104343">+90 535 410 43 43</a>
                </p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fa facebook footer-social-icon fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fa twitter footer-social-icon fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fa google footer-social-icon fa-google"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fa apple footer-social-icon fa-apple"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">
            2022 © METERSGROUP, Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}
