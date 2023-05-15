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
                    src="https://nispetiyemotors.com/wp-content/themes/nispetiyemotors/imaj/logo-beyaz.svg"
                    alt="logo"
                  />
                </h6>
                Atenyedekparca.com ' a Hoşgeldiniz Sormak istediğiniz tüm
                sorularınız için lütfen info@atenyedekparca.com adresine mail
                atınız veya hemen arayınız.
              </div>
            </div>

            <div id="markalar" class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Markalar
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="/">BMW </a>
                  </li>
                  <li>
                    <a href="/">MERCEDES</a>
                  </li>
                  <li>
                    <a href="/">AUDI</a>
                  </li>
                  <li>
                    <a href="/">KIA</a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="iletisim" class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  İletişim
                </h6>
                <p class="contact-info">+90 535 410 43 43</p>
                <p class="contact-info">+90 535 410 43 43</p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fab facebook footer-social-icon fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fab twitter footer-social-icon fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fab google footer-social-icon fa-google"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <i class="fab apple footer-social-icon fa-apple"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
