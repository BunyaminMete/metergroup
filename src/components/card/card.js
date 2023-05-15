import "./card.css";
import data from "../../data.json";

export default function ProductCard({ marka, number }) {
  const formattedValue = new Intl.NumberFormat("tr-TR").format(
    data[marka][number].price * 20.24
  );

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }

  const modelSlug = convertToSlug(data[marka][number].model);

  return (
    <>
      <div id="container">
        <div id="product-card">
          <div id="front-side">
            <div class="shadow"></div>
            <a href={`/${modelSlug}`}>
              <img
                src={data[marka][number].image}
                alt=""
                className="motoImage"
              />
            </a>
            <div class="image_overlay"></div>
            <div class="details">
              <div class="details-container">
                <span id="title">{data[marka][number].model}</span>

                <p>{formattedValue} TL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
