import { Box, Container } from "@mui/material";
import "./ilan.css";
import data from "../../data.json";

function splitAndWrap(sentence) {
  const lastIndex = sentence.lastIndexOf(",");
  const parts = sentence.substring(0, lastIndex).split(",");

  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>{part}</div>
      ))}
      <br />

      {sentence.substring(lastIndex + 2)}
    </div>
  );
}

export default function IlanSingle({ marka, number }) {
  const formattedValue = new Intl.NumberFormat("tr-TR").format(
    data[marka][number].price * 20.24
  );

  const sentence = data[marka][number].aciklama;

  return (
    <>
      <div className="container2">
        <Container
          fixed={true}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            minHeight: "1200px",
            minWidth: "1200px",
          }}
          maxWidth="md"
        >
          <div className="titleDiv2">
            <span className="titleText2">MOTOR BİLGİLERİ</span>
          </div>
          <Box>
            <div className="img-section">
              <img
                className="imagex"
                alt="motor"
                src={data[marka][number].image}
              />
              <button id="buy-button">
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {formattedValue} TL
                {"\u00A0"}
                {"\u00A0"}
              </button>
            </div>
            <div className="info-section">
              <div className="info-description">
                <div class="angry-grid">
                  <div id="item-0">{data[marka][number].model} </div>
                  <div id="item-1">
                    <> {splitAndWrap(sentence)}</>
                  </div>
                  <div id="item-2" className="info-price">
                    Motorun tahmini satış fiyatı {formattedValue} TL'dir. <br />
                    Fiyatlar döviz kurlarına ve stok durumlarına göre
                    güncellenmektedir. <br />
                    İletişime geçerek detaylı bilgi edinebilirsiniz .
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
