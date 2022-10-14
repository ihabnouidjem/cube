import React from "react";
import "../styles/loading.css";
import { AiOutlineLoading } from "react-icons/ai";

function Loading() {
  return (
    <div className="loading">
      <i className="small-loading-icon">
        {" "}
        <AiOutlineLoading />{" "}
      </i>
      <i className="big-loading-icon">
        <AiOutlineLoading />
      </i>
    </div>
  );
}

export default Loading;
