import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Product from "../components/Product";
import "../styles/productsPage.css";
import { dataContext } from "../App";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Products() {
  const { data, showDetailedProduct, changePage } = useContext(dataContext);
  useEffect(() => {
    changePage("products");
  }, []);
  return (
    <div className="products">
      <div className="products-container">
        {data.map((product) => {
          return (
            <div key={product.id} onClick={() => showDetailedProduct(product)}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Products;
