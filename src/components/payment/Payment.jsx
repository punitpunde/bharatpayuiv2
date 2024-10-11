import React, { useState, useEffect } from "react";
import "./payment.css";
import PaymentInfo from "./PaymentInfo";
import { useDispatch, useSelector } from "react-redux";
import { makePayment, resetState } from "../../features/payment";
import Loader from "../extra/Loader";
import { useNavigate } from "react-router-dom";
import { MOBILE_RECHARGE } from "../../constants";
import PaymentSuccess from "../extra/PaymentSuccess";
import { makeRecharge,resetRechargeState} from "../../features/recharge";
import Swal from "sweetalert2";
const Payment = () => {
  const { paymentDetails, loading, paymentSuccess, paymentFailed } = useSelector(
    (state) => state.payment
  );
  const { rechargeSuccess, rechargeData, error } = useSelector(
    (state) => state.rechargePlans
  );
  

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!paymentDetails) {
      nav("/");
    }
  }, [paymentDetails, nav]);

  useEffect(() => {
    if (paymentSuccess && paymentDetails && paymentDetails.transactionId) {
      const transactionId = paymentDetails.transactionId;
      const transactionDate = new Date().toLocaleString();
      if (paymentDetails.paymentReason === MOBILE_RECHARGE) {
         dispatch(makeRecharge(rechargeData));
         dispatch(resetState());
      }
      
    }

    if (paymentFailed) {
      alert("Payment Failed! We are sorry! Please try again.");
      dispatch(resetState());
    }
  }, [paymentSuccess, paymentFailed, dispatch, paymentDetails, rechargeData]);
  useEffect(()=>{
    if(rechargeSuccess){
      Swal.fire({
        title: "Recharge Done!",
        text: `Thank you for using Bharat Pay.`,
        icon: "success",
      })
      setShowSuccessPopup(true);
    }
    if(error){
      Swal.fire({
        title: "Recharge failed!",
        text: `We are sorry for this and trying to figure out the issue.`,
        icon: "error",
      })
    }
    dispatch(resetRechargeState())
    
  },[rechargeSuccess,error]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (upiId.length === 0) {
      alert("Please enter UPI ID");
      return;
    } else if (password.length === 0) {
      alert("Please enter your password");
      return;
    }

    dispatch(
      makePayment({
        ...paymentDetails,
        senderUpiId: upiId,
        senderPassword: password,
      })
    );

    // Force success popup for testing
    // setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
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

      {paymentDetails && (
        <PaymentInfo
          paymentMethod={selectedPayment}
          upiId={upiId}
          amount={paymentDetails.amount}
        />
      )}

      {showSuccessPopup && paymentDetails && (
        <PaymentSuccess
          amount={paymentDetails.amount}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Payment;
