import React from "react";
import "./services.css";
function Services() {
  return (
    <div className="services-container text-center ">
      <h4 className="pt-3">
        Services that <span className="text-danger fs-4 ">Bharat</span>Pay
        Provides
      </h4>
      <div className="pt-3 service-container ">
        <a
          href=""
          className="d-inline-block  pe-5 py-3 ps-md-0 ps-5 text-center"
        >
          <img src="/images/mobile.avif" className="pb-2" alt="" />
          <br />
          <span className="">Prepaid/PostPaid</span>
        </a>
        <a href="" className="d-inline-block pe-5 py-3 ps-md-0 ps-5  text-center">
          <img src="/images/dth.avif" alt="" className="pb-2" />
          <br />
          <span>DTH</span>
        </a>
        <a href="" className="d-inline-block pe-5 py-3 ps-md-0 ps-5  text-center">
          <img src="/images/electricity.avif" className="pb-2" alt="" />
          <br />
          <span>Electricity Bill</span>
        </a>
        <a href="" className="d-inline-block py-3  pe-5 ps-md-0 ps-5  text-center">
          <img src="/images/gas.png" className="pb-2" alt="" />
          <br />
          <span>Book Gas</span>
        </a>
        <a href="" className="d-inline-block py-3 pe-5 ps-md-0 ps-5  text-center">
          <i class="bi bi-three-dots fs-2"></i>
          <br />
          <span>More</span>
        </a>
      </div>
    </div>
  );
}

export default Services;
