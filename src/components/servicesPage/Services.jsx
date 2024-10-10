import React from "react";
import { useNavigate } from "react-router-dom";
import "./services.css"; // Assuming you have some custom styles

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card service-card" onClick={() => navigate("/mobile-recharge")}>
            <div className="card-body text-center">
              <i className="bi bi-phone fs-1"></i>
              <h5 className="card-title mt-3">Mobile Recharge</h5>
              <p className="card-text">Quick and easy mobile recharges.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card service-card" onClick={() => navigate("/dth-bill-pay")}>
            <div className="card-body text-center">
              <i className="bi bi-tv fs-1"></i>
              <h5 className="card-title mt-3">DTH Bill Pay</h5>
              <p className="card-text">Pay your DTH bills instantly.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card service-card" onClick={() => navigate("/upi-transaction")}>
            <div className="card-body text-center">
              <i className="bi bi-upc-scan fs-1"></i>
              <h5 className="card-title mt-3">UPI Transaction</h5>
              <p className="card-text">Fast and secure UPI payments.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card service-card" onClick={() => navigate("/gas-cylinder")}>
            <div className="card-body text-center">
              <i className="bi bi-gas-pump fs-1"></i>
              <h5 className="card-title mt-3">Gas Cylinder</h5>
              <p className="card-text">Book your gas cylinder online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
