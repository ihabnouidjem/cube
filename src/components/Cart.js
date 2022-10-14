import React, { useContext, useEffect } from "react";
import "../styles/cart.css";
import { authContext } from "../App";
import { useNavigate } from "react-router-dom";
import WideProduct from "./WideProduct";

function Cart() {
  const navigate = useNavigate();
  const { auth, logOutUser, cartData } = useContext(authContext);
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("../Login");
    }
  }, [auth.currentUser]);
  const logOut = () => {
    navigate("../Login");
    logOutUser();
  };
  const loginPage = () => {
    navigate("../Login");
  };
  return (
    <div className="cartPage">
      {auth.currentUser ? (
        <>
          <div className="cartPage-header">
            <h3>
              {auth.currentUser && `hello ${auth.currentUser.displayName}`}
            </h3>
            <button onClick={logOut}>log out</button>
          </div>
          <div className="cartPage-cart">
            {cartData &&
              cartData.map((product) => {
                return (
                  <div key={product.id} className="cartPage-wideproduct">
                    <WideProduct product={product} parent={"cart"} />
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div className="cart-notlogged">
          <p>not Logged in yet</p>
          <button onClick={loginPage}>log in</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
