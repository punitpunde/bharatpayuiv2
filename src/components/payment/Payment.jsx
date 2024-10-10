import React, { useState, useEffect } from "react";
import "./payment.css"; // Ensure you link to the correct CSS file for styling
import PaymentInfo from "./PaymentInfo"; // Import the PaymentInfo component
import { useDispatch, useSelector } from "react-redux";
import { makePayment, resetState } from "../../features/payment";
import Loader from "../extra/Loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { makeRecharge } from "../../features/recharge";
import { MOBILE_RECHARGE } from "../../constants";


const Payment = () => {
  const { paymentDetails, loading, paymentSuccess, paymentFailed } =
    useSelector((state) => state.payment);
  const { rechargeSuccess, rechargeData, error } = useSelector(
    (state) => state.rechargePlans
  );

  const nav = useNavigate();
  const dispatch = useDispatch();

  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility

  // Redirect if paymentDetails is null
  useEffect(() => {
    if (!paymentDetails) {
      nav("/");
    }
  }, [paymentDetails, nav]);

  // Handle success and failure alerts
  useEffect(() => {
    if (paymentSuccess) {
      const transactionId = paymentDetails.transactionId; // Ensure you have transaction ID
      const transactionDate = new Date().toLocaleString(); // Format date and time

      Swal.fire({
        title: "Payment Done!",
        text: `Transaction ID: ${transactionId}\nDate: ${transactionDate}\nThank you for using Bharat Pay.`,
        icon: "success",
      }).then(() => {
        setShowSuccessPopup(true); // Show the payment success popup
        dispatch(resetState()); // Reset state after showing success alert
        if (paymentDetails.paymentReason === MOBILE_RECHARGE) {
          dispatch(makeRecharge(rechargeData));
        }
        nav("/"); // Navigate away if necessary
      });
    }

    if (paymentFailed) {
      alert("Payment Failed! We are sorry! Please try again."); // Handle payment failure
      dispatch(resetState()); // Reset state after showing error alert
    }
  }, [paymentSuccess, paymentFailed, dispatch, nav, paymentDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upiId.length === 0) {
      alert("Please enter UPI ID");
      return;
    } else if (password.length === 0) {
      alert("Please enter your password");
      return;
    }

    // Dispatch the payment action
    dispatch(
      makePayment({
        ...paymentDetails,
        senderUpiId: upiId,
        senderPassword: password,
      })
    );
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false); // Close the popup
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="payment-container mt-5 text-center bg-white">
      <h4 className="p-0 m-0">Enter your credentials to pay</h4>
      <div className="fs-3 fw-medium">
        <span className="text-danger">Bharat</span>Pay
        <img
          style={{ height: "120px" }}
          className="pe-4"
          src="/images/upi.png"
          alt="UPI"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="upi-details">
          <div className="floating-input-container">
            <input
              className="border border-primary"
              type="text"
              placeholder=" "
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
            <label>Enter UPI ID</label>
          </div>
          <div className="floating-input-container">
            <input
              className="border border-primary"
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter Password</label>
          </div>
        </div>

        <button type="submit" className="btn-proceed mt-4">
          Proceed to Confirm Payment
        </button>
      </form>

      <PaymentInfo
        paymentMethod={selectedPayment}
        upiId={upiId}
        amount={paymentDetails.amount}
      />

      {showSuccessPopup && (
        <PaymentSuccess
          amount={paymentDetails.amount}
          onClose={handleClosePopup} // Close the popup when clicked
        />
      )}
    </div>
  );
};

export default Payment;
