import React, { useContext } from "react";
import "../styles/wideProduct.css";
import {
  BsXCircleFill,
  BsCartCheckFill,
  BsFillCartPlusFill,
} from "react-icons/bs";
import { FaCartPlus, FaShare } from "react-icons/fa";
import { authContext } from "../App";
import { dataContext } from "../App";

function WideProduct({ parent, product }) {
  const { removeProductFromCart, addProductToCart } = useContext(authContext);
  const { hideDetailedProduct, currentPage, copyToClipboard } =
    useContext(dataContext);
  return (
    <div className="wideProduct">
      {product && (
        <>
          <div className="wideProduct-img">
            <img loading={"lazy"} src={product.img} />
          </div>{" "}
          <div className="wideProduct-info">
            <h3 className="wideProduct-info-header">{product.name}</h3>
            <p className="wideProduct-info-description">
              {product.description}
            </p>
            <p className="wideProduct-info-details">{product.details}</p>
            <div className="wideProduct-price">
              <p className="wideProduct-price-status">{product.status}</p>
              <p className="wideProduct-price-warning">{product.warning}</p>
              <p className="wideProduct-price-price">{`${product.price}$`}</p>
              <p className="wideProduct-price-sold">{`${product.soldPrice}$`}</p>
            </div>
          </div>{" "}
          <div className="wideProduct-icons">
            <div className="wideProduct-icon">
              {currentPage === "products" && (
                <>
                  {" "}
                  <i onClick={() => hideDetailedProduct()} className="icon">
                    <BsXCircleFill />
                  </i>
                  <p>hide</p>
                </>
              )}
            </div>
            <div className="wideProduct-icon icon-margin">
              <i
                onClick={() => copyToClipboard(`/products/${product.id}`)}
                className="icon"
              >
                <FaShare />
              </i>
              <p>share</p>
            </div>
            <div className="wideProduct-icon">
              {parent == "cart" ? (
                <i
                  onClick={() => removeProductFromCart(product.id)}
                  className="icon"
                >
                  <BsCartCheckFill />
                </i>
              ) : (
                <i
                  onClick={() => addProductToCart(product.id)}
                  className="icon"
                >
                  <BsFillCartPlusFill />
                </i>
              )}
              <p>cart</p>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default WideProduct;
