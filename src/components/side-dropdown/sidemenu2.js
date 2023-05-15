import "./sidemenu.css";

export default function SideMenu2({ ...props }) {
  return (
    <>
      <nav id="vertical-menu">
        <ul className="main-menu">
          <li className="active">
            <a href="/">
              <i id="listicon" className="fa fa-th-list"></i>
              MARKALAR
            </a>
          </li>

          <li className="contain-submen">
            <a href="/bmw-motors">BMW</a>
          </li>
          <li className="contain-submen">
            <a href="/volkswagen-motors">VOLKSWAGEN</a>
          </li>
          <li className="contain-submen">
            <a href="/hyundai-motors">HYUNDAI</a>
          </li>
          <li className="contain-submen">
            <a href="/kia-motors">KIA</a>
          </li>
          <li className="contain-submen">
            <a href="/toyota-motors">TOYOTA</a>
          </li>
          <li className="contain-submen">
            <a href="/audi-motors">AUDI</a>
          </li>
          <li className="contain-submen">
            <a href="/landrover-motors">LAND ROVER</a>
          </li>
          <li className="contain-submen">
            <a href="/mercedes-motors">MERCEDES</a>
          </li>
          <li className="contain-submen">
            <a href="/seat-motors">SEAT</a>
          </li>
          <li className="contain-submen">
            <a href="/skoda-motors">SKODA</a>
          </li>
          <li className="contain-submen">
            <a href="/honda-motors">HONDA</a>
          </li>
          <li className="contain-submen">
            <a href="/mitsubishi-motors">MITSUBISHI</a>
          </li>
          <li className="contain-submen">
            <a href="/ford-motors">FORD</a>
          </li>
          <li className="contain-submen">
            <a href="/jaguar-motors">JAGUAR</a>
          </li>
          <li className="contain-submen">
            <a href="/minicooper-motors">MINI COOPER</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
