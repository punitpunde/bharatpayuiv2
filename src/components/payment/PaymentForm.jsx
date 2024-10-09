import React, { useState } from "react";
import "./paymentform.css"; // Import custom CSS for styling
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPaymentDetails } from "../../features/payment";
import Payment from "./Payment";

const PaymentForm = () => {
  const { paymentDetails } = useSelector((state) => state.payment);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
    if(paymentDetails != null){
        return <Payment></Payment>
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentOption === "upi") {
      dispatch(addPaymentDetails({ receiverUpiId: upiId, amount: amount }));
    } else {
      console.log("Amount:", amount);
      console.log("Mobile Number:", mobileNumber);
    }
  };

  return (
    <div className="gpay-form-container">
      <form className="gpay-form" onSubmit={handleSubmit}>
        <h3 className="gpay-title mb-0">Enter Payment Details </h3>
        <div className="fs-3 mb-2 heading">
          <span className="text-danger">Bharat</span>Pay
          <img className="w-25" src="/images/upi.png" alt="" />
        </div>
        <div className="amount-input-section floating-label">
          <input
            type="number"
            className="amount-input"
            placeholder=" "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <label>Amount (₹)</label>
        </div>

        <div className="payment-option-section">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="upi"
              checked={paymentOption === "upi"}
              onChange={() => setPaymentOption("upi")}
            />
            <span> UPI ID</span>
          </label>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="mobile"
              checked={paymentOption === "mobile"}
              onChange={() => setPaymentOption("mobile")}
            />
            <span className="ps-1">Mobile Number</span>
          </label>
        </div>

        {paymentOption === "upi" ? (
          <div className="floating-label upi-input-section">
            <input
              type="text"
              className="upi-input"
              placeholder=" "
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
            <label>UPI ID</label>
          </div>
        ) : (
          <div className="floating-label mobile-input-section">
            <input
              type="tel"
              className="mobile-input"
              placeholder=" "
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <label>Mobile Number</label>
          </div>
        )}

        <button className="gpay-button" type="submit" onClick={handleSubmit}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
