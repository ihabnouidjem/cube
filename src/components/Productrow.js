import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { dataContext } from "../App";

function Productrow({ rowName }) {
  const { data, hideDetailedProduct, showDetailedProduct } =
    useContext(dataContext);
  const [rowProducts, setRowProducts] = useState();
  useEffect(() => {
    setRowProducts(
      data.filter((product) => {
        return product.company == `${rowName}`;
      })
    );
  }, [data]);
  return (
    <div className="productrow">
      <h3 className="productrow-header">{rowName}</h3>
      <div className="productrow-container">
        {rowProducts &&
          rowProducts.map((product) => {
            return (
              rowProducts.indexOf(product) < 4 && (
                <div
                  onClick={() => showDetailedProduct(product)}
                  key={product.id}
                >
                  <Product product={product} />
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}

export default Productrow;
