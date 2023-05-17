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
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBL1KM707UTPvPH1zUPGKHjSuCkaB5mNkSWsomCE6DTigQaS8t0zngR3Duh4wtJ5LKtYEt78W43fRmJRNs0Si3gnGXNba473GaIo-ehgBtgQZauFMfTIJi2OyH7CPiXz8WUE4TfQnOWdC22qZR6aN0stB9Too34aLMXldEJ2ELvgvek4ZDlJIcdndC/w133-h132/Screenshot_2.png"
                    alt="logo"
                  />
                </h6>
                Metergroup.com ' a hoşgeldiniz sormak istediğiniz tüm
                sorularınız için lütfen arayarak iletişime geçiniz.
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
          <p class="footer-alt mb-0 f-14">
            2022 © METERGROUP, Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}
