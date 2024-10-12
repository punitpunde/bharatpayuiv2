// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./PaymentSuccess.css"; // Make sure to create a CSS file for styles
// import { FaCheckCircle } from "react-icons/fa"; // Using Font Awesome for the check icon
// import { useDispatch } from "react-redux";
// import { resetState } from "../../features/payment";

// function formatDateTime(isoString) {
//   const date = new Date(isoString);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const day = date.getDate();
//   const month = monthNames[date.getMonth()];
//   const year = date.getFullYear();

//   let hours = date.getHours();
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12; // Convert to 12-hour format
//   hours = hours ? String(hours).padStart(2, "0") : "12"; // the hour '0' should be '12'

//   return `${month} ${day}, ${year} - ${hours}:${minutes}${ampm}`;
// }

// const PaymentSuccess = (props) => {
//   const navigate = useNavigate();
//   const handleGoHome = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="payment-success-container">
//       <div className="popup">
//         <FaCheckCircle className="success-icon" />
//         <h1 className="success-title">Payment Successful</h1>
//         <p className="success-message">
//           Your payment was processed successfully!
//         </p>
//         <div className="transaction-details">
//           <p>
//             <strong>Transaction ID:</strong> 123456789
//           </p>
//           <p>
//             <strong>Amount:</strong> ₹{props.amount}
//           </p>
//           <p>
//             <strong>Date: </strong> {formatDateTime(new Date().toISOString())}
//           </p>
//         </div>
//         <button className="home-button" onClick={handleGoHome}>
//           Go to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;

import React from "react";
import "./PaymentSuccess.css"; // External CSS file for custom styling
import { FaCheckCircle } from "react-icons/fa"; // Success icon from FontAwesome
import { useNavigate } from "react-router-dom";
const PaymentSuccess = () => {
  const nav = useNavigate()
  const handleBack = ()=>{
    nav(-1)
  }
  return (
    <div className="payment-success-container">
      {/* Header */}
      <div className="header fs-3 fw-bold">
        <span className="text-danger">Bharat</span>Pay
        <img src="/images/upi.png" alt="UPI" className="w-25" />
      </div>

      {/* Payment Info */}
      <div className="payment-info">
        <FaCheckCircle className="success-icon" />
        <h2>Payment Successful</h2>
        <h1>₹20</h1>
        <p>Rupees Twenty Only</p>
        <p>"Pay to BharatPe Merchant"</p>
      </div>
      <div className="hr"></div>
      {/* Recipient Details */}
      <div className="details-box">
        <p>
          <strong>To:</strong> Rajeev
        </p>
        <p>UPI ID: BHARATPE9S0T7W2Z9K197724@yesbankltd</p>
      </div>

      {/* Sender Details */}
      <div className="details-box">
        <p>
          <strong>From:</strong> Gulshan Kumar Punde
        </p>
        <p>Bank of India - 1393</p>
        <p>UPI Ref. No: 4264944 02626</p>
        <p>20 Sep 2024, 04:05 PM</p>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default PaymentSuccess;
