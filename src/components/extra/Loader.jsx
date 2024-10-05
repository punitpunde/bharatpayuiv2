import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader-container text-center mx-auto my-auto ">
      <div className="dots">
        {Array.from({ length: 15 }, (_, index) => (
          <span key={index} style={{ "--i": index + 1 }}></span>
        ))}
      </div>
    </div>
  );
}

export default Loader;
