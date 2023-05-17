import "./m-card.css";
import data from "../../data.json";

export default function MobileProductCard({ marka, number }) {
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
      <div id="m-container">
        <div id="m-product-card">
          <div id="m-front-side">
            <div class="m-shadow"></div>
            <a href={`/${modelSlug}`}>
              <img
                src={data[marka][number].image}
                alt=""
                className="m-motoImage"
              />
            </a>
            <div class="m-image_overlay"></div>
            <div class="m-details">
              <div class="m-details-container">
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
