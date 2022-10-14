import React from "react";
import "../styles/product.css";

function Product(product) {
  const { img, name, description, warning, price, soldPrice, status } =
    product.product;
  return (
    <div className="product">
      <div className="product-img">
        <img loading="lazy" src={img} />
      </div>
      <h3 className="product-header">{name}</h3>
      <p className="product-description">{description}</p>
      <div className="product-price">
        <div className="product-price-info">
          {" "}
          <p className="product-price-status">{status}</p>
          <p className="product-price-warning">{warning}</p>
        </div>
        <p className="product-price-sold">{`${price}$`}</p>
        <p className="product-price-final">{`${soldPrice}$`}</p>
      </div>
    </div>
  );
}

export default Product;
