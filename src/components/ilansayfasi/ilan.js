import { Box, Container } from "@mui/material";
import "./ilan.css";
import data from "../../data.json";

export default function IlanSingle({ marka, number }) {
  const formattedValue = new Intl.NumberFormat("tr-TR").format(
    data[marka][number].price * 20.24
  );

  return (
    <>
      <div className="container2">
        <Container
          fixed={true}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            minHeight: "1000px",
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
                    Hyundai Accent Komple Motor / Sandık Motor (RB/RC) <br />
                    (2011–2017) Hyundai Accent Komple Motor / Sandık Motor
                    <br />
                    (2017'den günümüze) Hyundai Elantra Komple Motor / Sandık
                    <br />
                    Motor (MD/UD) (2010–2015) Hyundai Elantra Komple Motor /
                    <br />
                    Sandık Motor (AD) (2015–2020) Hyundai Elantra Komple Motor /
                    <br />
                    Sandık Motor (CN7) (2020-günümüz) Hyundai i30 Komple Motor /
                    <br />
                    Sandık Motor (GD) (2011–2017) Hyundai i30 Komple Motor /
                    <br />
                    Sandık Motor (PD) (2016-günümüz)
                    <br /> Aten Yedek Parça tarafından satılmakta olan tüm
                    Motorlar Sıfır / Faturalı ve Ruhsata işlenebilir
                    özelliktedir
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
