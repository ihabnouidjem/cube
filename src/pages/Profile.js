import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/profile.css";
import { authContext } from "../App";
import { dataContext } from "../App";

function Profile() {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const changePage = useContext(dataContext);
  useEffect(() => {
    changePage("profile");
  }, []);
  useEffect(() => {
    if (auth.currentUser) {
      navigate("Cart");
    } else {
      navigate("Login");
    }
  }, [auth.currentUser]);
  return (
    <div className="profile">
      <Outlet />
    </div>
  );
}

export default Profile;
