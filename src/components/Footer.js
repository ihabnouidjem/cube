import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { dataContext } from "../App";
import { useContext } from "react";

function Footer() {
  const { copyToClipboard } = useContext(dataContext);
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-item">
          <h3>Store</h3>
          <NavLink>
            <p>locations</p>
          </NavLink>
          <NavLink>
            <p>Products</p>
          </NavLink>
        </div>
        <div className="footer-item">
          <h3>Colaborators</h3>
          <NavLink>
            <p>Sauvage</p>
          </NavLink>
          <NavLink>
            <p>Bleu De Chanel</p>
          </NavLink>
        </div>
        <div className="footer-item">
          <h3>Services</h3>
          <NavLink>
            <p>Delivery</p>
          </NavLink>
        </div>
        <div className="footer-item">
          <h3>Company</h3>
          <NavLink>
            <p>About us</p>
          </NavLink>
          <NavLink>
            <p>Contact us</p>
          </NavLink>
        </div>
      </div>
      <div className="footer-social">
        <i onClick={() => copyToClipboard("youtube")} className="icon">
          <BsYoutube />
        </i>
        <i
          onClick={() =>
            copyToClipboard(
              "https://twitter.com/NouidjemIhab?t=0iupMnDASxr0I-xsSr9IKg&s=09"
            )
          }
          className="icon"
        >
          <BsTwitter />
        </i>
        <i onClick={() => copyToClipboard("fecebook")} className="icon">
          <BsFacebook />
        </i>
        <i onClick={() => copyToClipboard("@ihab_ndj")} className="icon">
          <BsInstagram />
        </i>
      </div>
    </div>
  );
}

export default Footer;
