import React from "react";
import "./moreServices.css"; // Ensure the correct path to your CSS
import { Navigate, useNavigate } from "react-router-dom";
function MoreServices() {
    const nav = useNavigate();

  return (
    <div className="more-services-container">
      <ul className="text-center">
        <li onClick={()=>nav("/upi-payment")}>
          <i className="bi bi-upc-scan"></i>
          <span className="ps-2">UPI Transaction</span>
        </li>
        <li>
          <i className="bi bi-bank"></i>
          <span className="ps-2">Netbanking</span>
        </li>
        <li>
          <i className="bi bi-wallet2"></i>
          <span className="ps-2">Wallet</span>
        </li>
        <li onClick={()=>nav("/transaction-history")}>
          <i className="bi bi-clock-history"></i>
          <span className="ps-2">Transaction History</span>
        </li>
      </ul>
    </div>
  );
}

export default MoreServices;
