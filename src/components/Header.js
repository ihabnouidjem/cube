import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { BsHouseFill, BsChevronCompactDown } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiRoundcube } from "react-icons/si";
import { HiMenuAlt4 } from "react-icons/hi";

function Header({ currentPage, setCurrentPage }) {
  const [headerStatus, setHeaderStatus] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderStatus(false);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentPage]);
  const handleHeader = () => {
    setHeaderStatus(!headerStatus);
  };
  return (
    <div className="">
      <nav className="nav">
        <NavLink
          className={
            currentPage === "home"
              ? "nav-icon home-nav-icon show-home"
              : "nav-icon home-nav-icon hide-home"
          }
          to="/"
        >
          <i className="icon">
            <BsHouseFill />
          </i>
          <p>home</p>
        </NavLink>
        <NavLink
          className={
            currentPage === "products"
              ? "nav-icon show-products"
              : "nav-icon hide-products"
          }
          to="/products"
        >
          <i className="icon">
            <SiRoundcube />
          </i>
          <p>products</p>
        </NavLink>
        <NavLink
          className={
            currentPage === "profile"
              ? "nav-icon show-profile"
              : "nav-icon hide-profile"
          }
          to="/profile"
        >
          <i className="icon">
            <IoPersonCircleOutline />
          </i>
          <p>profile</p>
        </NavLink>
      </nav>
      <div
        className={headerStatus ? "header show-header" : "header hide-header"}
      >
        <i onClick={handleHeader} className="bars icon">
          <HiMenuAlt4 />
        </i>

        <h1 className="cube">
          <NavLink to="/">CUBE</NavLink>
        </h1>

        <NavLink to="/profile" className="cart">
          <div className="cart-icon">
            <p>cart</p>
            <i>
              <BsChevronCompactDown />
            </i>
          </div>
          <i className="icon">
            <IoMdCart />
          </i>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
