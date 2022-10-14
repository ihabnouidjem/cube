import React from "react";
import "../styles/copiedtoclipboard.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function CopiedToClipboard() {
  return (
    <div className="copiedtoclipboard">
      <p>copied to clipboard</p>
      <i className="icon">
        <BsFillCheckCircleFill />
      </i>
    </div>
  );
}

export default CopiedToClipboard;
