import { Box, Container } from "@mui/material";
import ProductCard from "../card/card";
import "./containerProduct.css";

export default function ProductContainer({ kategori }) {
  return (
    <>
      <div className="container">
        <Container
          fixed={true}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", minWidth: "1002px" }}
          maxWidth="md"
        >
          <div className="titleDiv">
            <span className="titleText">ÖNERİLEN ÜRÜNLER</span>
          </div>
          <Box>
            <ProductCard marka={"bmw"} number={1} />
            <ProductCard marka={"bmw"} number={7} />
            <ProductCard marka={"hyundai"} number={31} />
            <ProductCard marka={"bmw"} number={10} />
            <ProductCard marka={"hyundai"} number={0} />
            <ProductCard marka={"audi"} number={17} />
          </Box>
        </Container>
      </div>
    </>
  );
}
