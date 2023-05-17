import MobileProductCard from "../card/m-card";
import "./m-onecikarilan.css";

export default function MobileOneCikarilanlar({ kategori }) {
  return (
    <>
      <div className="m-container">
        <div className="m-titleDiv">
          <span className="m-titleText">ÖNERİLEN ÜRÜNLER</span>
        </div>

        <MobileProductCard marka={"bmw"} number={1} />
        <MobileProductCard marka={"bmw"} number={7} />
        <MobileProductCard marka={"hyundai"} number={31} />
        <MobileProductCard marka={"bmw"} number={10} />
        <MobileProductCard marka={"hyundai"} number={0} />
        <MobileProductCard marka={"audi"} number={17} />
      </div>
    </>
  );
}
