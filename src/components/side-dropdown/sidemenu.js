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
        </ul>
      </nav>
    </>
  );
}
