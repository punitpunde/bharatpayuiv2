import React, { useState, useEffect } from "react";
import "./payment.css";
import PaymentInfo from "./PaymentInfo";
import { useDispatch, useSelector } from "react-redux";
import { makePayment, resetState } from "../../features/payment";
import Loader from "../extra/Loader";
import { useNavigate } from "react-router-dom";
import PaymentSuccess from "../extra/PaymentSuccess";
import Swal from "sweetalert2";
import { MOBILE_RECHARGE } from "../../constants";
import PaymentFail from "../extra/PaymentFail";

const Payment = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [processPayment, setProcessPayment] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [password, setPassword] = useState("");
  const { loading, paymentFailed, paymentSuccess, paymentDetails } =
    useSelector((state) => state.payment);
  useEffect(() => {
    if (!paymentDetails) {
      alert("You can not visit this page");
      nav(-1);
    }
  });
  useEffect(() => {
    if (processPayment) {
      console.log(paymentDetails);
      
      dispatch(makePayment({ ...paymentDetails, upiId, password }));
      setProcessPayment(false); // Reset flag to avoid multiple submissions
    }
  }, [processPayment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upiId.length === 0) {
      alert("Please enter a valid UPI ID");
      return;
    }
    if (password.length === 0) {
      alert("Please enter a password");
      return; // Ensure form submission stops if password is missing
    }
    setProcessPayment(true);
  };

  if (loading) {
    return <Loader />;
  }
  if(paymentSuccess){
    return <PaymentSuccess></PaymentSuccess>
  }
  console.log(paymentFailed)
  if(paymentFailed){
    return <PaymentFail></PaymentFail>
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

      {paymentDetails && (
        <PaymentInfo
          paymentMethod={"UPI"}
          upiId={upiId}
          amount={paymentDetails.amount}
        />
      )}

      
      {paymentFailed && <PaymentFail></PaymentFail>}
    </div>
  );
};

export default Payment;
