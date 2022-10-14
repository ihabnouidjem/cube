import React, { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Productrow from "../components/Productrow";
// import WideProduct from "../components/WideProduct";
// // import { data } from "../Firebase.js";
import { dataContext } from "../App";

function Home(data) {
  const { changePage } = useContext(dataContext);
  useEffect(() => {
    changePage("home");
  }, []);
  return (
    <div className="">
      <Banner />
      <Productrow rowName={"Sauvage"} />
      <Productrow rowName={"Bleu de Chanel"} />
      <Footer />
    </div>
  );
}

export default Home;
