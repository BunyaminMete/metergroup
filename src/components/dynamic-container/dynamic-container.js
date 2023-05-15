import { Box, Container } from "@mui/material";
import ProductCard from "../card/card";
import "./dynamic-container.css";
import data from "../../data.json";

export default function CategoryContainer({ kategori }) {
  const numbers = Array.from(
    { length: data[kategori].length - 1 },
    (_, index) => index + 1
  );
  const uppercaseKategori = kategori.toUpperCase();

  return (
    <>
      <div className="container">
        <Container
          fixed={true}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", minWidth: "1002px" }}
          maxWidth="md"
        >
          <div className="titleDiv">
            <span className="titleText">{uppercaseKategori} MOTORLARI</span>
          </div>
          <Box>
            <ProductCard marka={kategori} number={0} />

            {numbers.map((number) => (
              <>
                <ProductCard marka={kategori} number={number} />
              </>
            ))}
          </Box>
        </Container>
      </div>
    </>
  );
}
