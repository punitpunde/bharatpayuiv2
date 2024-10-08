import React from 'react';

const PaymentInfo = ({ paymentMethod, upiId, amount }) => {
  return (
    <div className="payment-info-container text-success mt-4 text-center">
      <h3>Payment Information</h3>
      <div className="payment-info">
        <p>
          <span className='text-primary '>Selected Payment Method:</span> {paymentMethod || "None selected"}
        </p>
        {paymentMethod === "upi" && (
          <p>
            <strong>UPI ID:</strong> {upiId || "Not provided"}
          </p>
        )}
        <p>
          <span className='text-primary'>Amount:</span> ₹{amount || "0.00"}
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;
