import MobileProductCard from "../card/m-card";
import "./m-kategori.css";
import data from "../../data.json";

export default function MobileKategoriler({ kategori }) {
  const numbers = Array.from(
    { length: data[kategori].length },
    (_, index) => index
  );
  const uppercaseKategori = kategori.toUpperCase();

  return (
    <>
      <div className="mk-container">
        <div className="mk-titleDiv">
          <span className="mk-titleText">{uppercaseKategori} MOTORLARI </span>
        </div>

        {numbers.map((number) => (
          <>
            <MobileProductCard marka={kategori} number={number} />
          </>
        ))}
      </div>
    </>
  );
}
