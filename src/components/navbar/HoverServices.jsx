import React from "react";
import "./hoverServices.css"; 
import { useNavigate } from "react-router-dom";

function HoverServices() {
  const nav = useNavigate();

  return (
    <div className="hover-services-container">
      <ul className="text-center">
        <li onClick={() => nav("/upi-payment")}>
          <i className="bi bi-upc-scan"></i>
          <span className="ps-2">UPI Transaction</span>
        </li>
        <li onClick={() => nav("/netbanking")}>
          <i className="bi bi-bank"></i>
          <span className="ps-2">Netbanking</span>
        </li>
        <li onClick={() => nav("/wallet")}>
          <i className="bi bi-wallet2"></i>
          <span className="ps-2">Wallet</span>
        </li>
        <li onClick={() => nav("/transaction-history")}>
          <i className="bi bi-clock-history"></i>
          <span className="ps-2">Transaction History</span>
        </li>
        <li onClick={() => nav("/dth-recharge")}>
          <i className="bi bi-tv"></i>
          <span className="ps-2">DTH Recharge</span>
        </li>
        <li onClick={() => nav("/bill-payment")}>
          <i className="bi bi-receipt"></i>
          <span className="ps-2">Bill Pay</span>
        </li>
        <li onClick={() => nav("/gas-cylinder")}>
        {/* <i class="bi bi-fuel-pump-fill"></i> */}
          <span className="ps-2">Gas Cylinder</span>
        </li>
      </ul>
    </div>
  );
}

export default HoverServices;
