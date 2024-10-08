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
  const { rechargeSuccess, rechargeData,error } = useSelector(
    (state) => state.rechargePlans
  );

  const nav = useNavigate();
  const dispatch = useDispatch();

  // Redirect if paymentDetails is null
  useEffect(() => {
    if (!paymentDetails) {
      nav("/");
    }
  }, [paymentDetails, nav]);
  const { amount } = paymentDetails || {}; // Use optional chaining
  const [selectedPayment, setSelectedPayment] = useState("");
  const [upiId, setUpiId] = useState("");
  const [password, setPassword] = useState("");

  // Prevent back button navigation
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault(); // Prevent the default back action
      Swal.fire({
        title: "Warning!",
        text: "You cannot go back while processing the payment.",
        icon: "warning",
      });
    };

    // Push a new state to history
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton); // Clean up the event listener on unmount
    };
  }, []);

  // Handle success and failure alerts
  useEffect(() => {
    if (paymentSuccess) {
      Swal.fire({
        title: "Payment Done!",
        text: "Thank you for using Bharat Pay.",
        icon: "success",
      }).then(() => {
        dispatch(resetState()); // Reset state after showing success alert
        if (paymentDetails.paymentReason == MOBILE_RECHARGE) {
          dispatch(makeRecharge(rechargeData));
        }
        if (rechargeSuccess) {
          Swal.fire({
            title: "Recharge Done",
            text: "Thank you for using Bharat Pay.",
            icon: "success",
          });
        }
        if(error){
          Swal.fire({
            title: "Recharge Failure",
            text: "Plese stay with us we will resove the issue and get it soon!",
            icon: "error",
          });
        }
        nav("/")
      });
    }

    if (paymentFailed) {
      Swal.fire({
        title: "Payment Failed!",
        text: "We are sorry! Please try again.",
        icon: "error",
      }).then(() => {
        dispatch(resetState()); // Reset state after showing error alert
      });
    }
  }, [paymentSuccess, paymentFailed, dispatch, nav]);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedPayment === "") {
      alert("Please select a payment method");
    } else if (selectedPayment === "upi") {
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
    }
    // Add similar logic for net banking if needed
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="payment-container mt-5 text-center">
      <h4 className="p-0 m-0">
        Select a <span style={{ color: "#6064b6" }}>Payment</span> method
      </h4>
      <img
        style={{ height: "120px" }}
        className="pe-4"
        src="/images/upi.png"
        alt="UPI"
      />
      <img
        style={{ height: "60px" }}
        src="/images/mobile-banking.png"
        alt="Mobile Banking"
      />
      <form onSubmit={handleSubmit}>
        <div className="payment-options">
          <label
            className={`payment-option ${
              selectedPayment === "upi" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              value="upi"
              name="payment"
              onChange={handlePaymentChange}
            />
            <span className="option-name">UPI Payment</span>
          </label>
          <label
            className={`payment-option ${
              selectedPayment === "netbanking" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              value="netbanking"
              name="payment"
              onChange={handlePaymentChange}
            />
            <span className="option-name">Net Banking</span>
          </label>
        </div>

        {selectedPayment === "upi" && (
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
        )}

        {selectedPayment === "netbanking" && (
          <div className="netbanking-details">
            <p className="text-secondary">Select your bank from the dropdown</p>
            <select>
              <option value="Bank of Bharat">Bank of Bharat</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
        )}

        <button type="submit" className="btn-proceed mt-4">
          Proceed to Confirm Payment
        </button>
      </form>

      <PaymentInfo
        paymentMethod={selectedPayment}
        upiId={upiId}
        amount={amount}
      />
    </div>
  );
};

export default Payment;
