import React, { useState, useEffect } from "react";
import "./paymentform.css"; // Import custom CSS for styling
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPaymentDetails, resetState } from "../../features/payment";
import { MONEY_TRANSFER } from "../../constants";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { paymentSuccess } = useSelector((state) => state.payment);
  
  const [amount, setAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // Reset state when payment is successful
  useEffect(() => {
    if (paymentSuccess) {
      dispatch(resetState());
      // Optionally navigate or show a success message
      // nav("/success"); // Uncomment to navigate on success
    }
  }, [paymentSuccess, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (amount <= 0) {
      alert("Please enter a valid amount greater than zero.");
      return;
    }

    if (paymentOption === "upi" && !upiId) {
      alert("Please enter a valid UPI ID.");
      return;
    }

    if (paymentOption === "mobile" && !/^\d{10}$/.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Dispatch payment details
    dispatch(addPaymentDetails({
      receiverUpiId: paymentOption === "upi" ? upiId : mobileNumber,
      amount: amount,
      paymentReason: MONEY_TRANSFER
    }));

    // Navigate to payment page
    nav("/payment");
  };

  return (
    <div className="gpay-form-container">
      <form className="gpay-form" onSubmit={handleSubmit}>
        <h3 className="gpay-title mb-0">Enter Payment Details</h3>
        <div className="fs-3 mb-2 heading">
          <span className="text-danger">Bharat</span>Pay
          <img className="w-25" src="/images/upi.png" alt="UPI" />
        </div>

        <div className="amount-input-section floating-label">
          <input
            type="number"
            className="amount-input bg-white"
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
              className="upi-input bg-white"
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
              className="mobile-input bg-white"
              placeholder=" "
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <label>Mobile Number</label>
          </div>
        )}

        <button className="gpay-button" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
