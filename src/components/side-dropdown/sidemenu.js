import "./sidemenu.css";

export default function SideMenu({ ...props }) {
  return (
    <>
      <nav id="vertical-menu">
        <ul className="main-menu">
          <li className="active">
            <a href="/">
              <i id="listicon" className="fa fa-th-list"></i>
              ÜRÜNLER
            </a>
          </li>
          <li className="contain-submenu">
            <a href="/">KOMPLE MOTOR</a>
            <ul className="submenu-1">
              <li>
                <a href="/bmw-motors">BMW</a>
              </li>
              <li>
                <a href="/">VOLKSWAGEN</a>
              </li>
              <li>
                <a href="/hyundai-motors">HYUNDAI</a>
              </li>
              <li>
                <a href="/kia-motors">KIA</a>
              </li>
              <li>
                <a href="/toyota-motors">TOYOTA</a>
              </li>
              <li>
                <a href="/audi-motors">AUDI</a>
              </li>
              <li>
                <a href="/landrover-motors">LAND ROVER</a>
              </li>
              <li>
                <a href="/mercedes-motors">MERCEDES</a>
              </li>
              <li>
                <a href="/seat-motors">SEAT</a>
              </li>
              <li>
                <a href="/skoda-motors">SKODA</a>
              </li>
              <li>
                <a href="/honda-motors">HONDA</a>
              </li>
              <li>
                <a href="/mitsubishi-motors">MITSUBISHI</a>
              </li>
              <li>
                <a href="/ford-motors">FORD</a>
              </li>

              <li>
                <a href="/jaguar-motors">JAGUAR</a>
              </li>
              <li>
                <a href="/minicooper-motors">MINI COOPER</a>
              </li>
            </ul>
          </li>
          {/* <li className="contain-submenu">
            <a href="/">ŞANZIMAN BEYNİ(TCU)</a>
            <ul className="submenu-1">
              <li className="contain-submen">
                <a href="/">SEM II</a>
                <ul className="submenu-2">
                  <li>
                    <a href="/">APPL.MATHS III</a>
                  </li>
                  <li>
                    <a href="/">Data Structures</a>
                  </li>
                  <li>
                    <a href="/">DLDA</a>
                  </li>
                  <li>
                    <a href="/">Discrete maths</a>
                  </li>
                  <li>
                    <a href="/">ECCF</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="contain-submenu">
            <a href="/">SİLİNDİR KAPAĞI</a>
            <ul className="submenu-1">
              <li className="contain-submenu">
                <a href="/">SEM V</a>
                <ul className="submenu-2">
                  <li>
                    <a href="/">TCS</a>
                  </li>
                  <li>
                    <a href="/">DBMS</a>
                  </li>
                  <li>
                    <a href="/">Computer Network</a>
                  </li>
                  <li>
                    <a href="/">Microprocessor</a>
                  </li>
                  <li>
                    <a href="/">MMS</a>
                  </li>
                </ul>
              </li>
              <li className="contain-submenu">
                <a href="/">SEM VI</a>
                <ul className="submenu-2">
                  <li>
                    <a href="/">ADVANCED CN</a>
                  </li>
                  <li>
                    <a href="/">SPCC</a>
                  </li>
                  <li>
                    <a href="/">OOSE</a>
                  </li>
                  <li>
                    <a href="/">ADVANCED MP</a>
                  </li>
                  <li>
                    <a href="/">DWM</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="contain-submenu">
            <a href="/">BASKI BALATA</a>
            <ul className="submenu-1">
              <li className="contain-submenu">
                <a href="/">SEM VII</a>
                <ul className="submenu-2">
                  <li>
                    <a href="/">DSP</a>
                  </li>
                  <li>
                    <a href="/">CSS</a>
                  </li>
                  <li>
                    <a href="/">Artificial Intelligence</a>
                  </li>
                  <li>
                    <a href="/">SC</a>
                  </li>
                </ul>
              </li>
              <li className="contain-submenu">
                <a href="/">SEM VIII</a>
                <ul className="submenu-2">
                  <li>
                    <a href="/">DWM</a>
                  </li>
                  <li>
                    <a href="/">HMI</a>
                  </li>
                  <li>
                    <a href="/">PDS</a>
                  </li>
                  <li>
                    <a href="/">CCL</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="contain-submenu">
            <a href="/">OTHER</a>
            <ul className="submenu-1">
              <li>
                <a href="/">ME</a>
              </li>

              <li>
                <a href="/">PhD</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
