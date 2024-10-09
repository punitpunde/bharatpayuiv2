import React, { useState } from "react";
import "./services.css";
import MoreServices from "./MoreServices";

function Services() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="services-container text-center">
      <h4 className="pt-3">
        Services that <span className="text-danger fs-4 ">Bharat</span>Pay Provides
      </h4>
      <div className="pt-3 service-container">
        <a href="/" className="d-inline-block  pe-5 py-3 ps-md-0 ps-5 text-center">
          <img src="/images/mobile.avif" className="pb-2" alt="Mobile Recharge" />
          <br />
          <span>Prepaid/PostPaid</span>
        </a>
        <a href="/" className="d-inline-block pe-5 py-3 ps-md-0 ps-5 text-center">
          <img src="/images/dth.avif" alt="DTH Recharge" className="pb-2" />
          <br />
          <span>DTH</span>
        </a>
        <a href="/" className="d-inline-block pe-5 py-3 ps-md-0 ps-5 text-center">
          <img src="/images/electricity.avif" className="pb-2" alt="Electricity Bill" />
          <br />
          <span>Electricity Bill</span>
        </a>
        <a href="/" className="d-inline-block py-3 pe-5 ps-md-0 ps-5 text-center">
          <img src="/images/gas.png" className="pb-2" alt="Book Gas" />
          <br />
          <span>Book Gas</span>
        </a>

        {/* More Services with hover */}
        <div
          className="d-inline-block py-3 pe-5 ps-md-0 ps-5 text-center more-service-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-three-dots fs-2"></i>
          <br />
          <span>More</span>
          {hovered && <MoreServices />}
          {/* <MoreServices></MoreServices> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
