import React, { useContext } from "react";
import WideProduct from "./WideProduct";
import "../styles/detailedproduct.css";
import { dataContext } from "../App";

function DetailedProduct() {
  const { detailedProduct, setDetailedProduct } = useContext(dataContext);
  return (
    <div className="detailedProduct">
      <WideProduct product={detailedProduct} />
    </div>
  );
}

export default DetailedProduct;
