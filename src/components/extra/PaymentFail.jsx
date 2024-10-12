import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentFail.css"; // Make sure to create a CSS file for styles
import { FaTimesCircle } from "react-icons/fa"; // Using Font Awesome for the failure icon

const PaymentFail = (props) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(-1); // Go back to the previous page or home
  };

  return (
    <div className="payment-fail-container">
      <div className="popup">
        <FaTimesCircle className="fail-icon" />
        <h1 className="fail-title">Payment Failed</h1>
        <p className="fail-message">
          Unfortunately, your payment could not be processed.
        </p>
        <div className="transaction-details">
          <p>
            <strong>Transaction ID:</strong> 987654321
          </p>
          <p>
            <strong>Amount:</strong> ₹{props.amount}
          </p>
          <p>
            <strong>Date: </strong> {new Date().toLocaleString()}
          </p>
        </div>
        <button className="retry-button" onClick={handleGoHome}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
