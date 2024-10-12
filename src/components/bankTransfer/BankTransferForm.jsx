import React, { useState } from "react";
import "./BankTransferForm.css";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetState,addPaymentDetails } from "../../features/payment";
import { BANK_MONEY_TRANSFER } from "../../constants";
const BankTransferForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { paymentSuccess,paymentFailed } = useSelector((state) => state.payment);
  useEffect(() => {
    if (paymentSuccess || paymentFailed) {
      dispatch(resetState());
      // Optionally navigate or show a success message
      // nav("/success"); // Uncomment to navigate on success
    }
  }, [paymentSuccess, dispatch,paymentFailed]);

  const [formData, setFormData] = useState({
    bankAccount: "",
  
    ifscCode: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    let {amount,ifscCode,bankAccount} = formData;
    // Validate inputs
    if (amount <= 0) {
      alert("Please enter a valid amount greater than zero.");
      return;
    }
    if(ifscCode.length === 0){
      alert("Please enter a valid ifsc code.");
      return;
    }
    if(bankAccount.length === 0){
      alert("Please enter a valid account number code.");
      return;
    }
    dispatch(addPaymentDetails({
      receiverAccountNumber: bankAccount,
      receiverIfscCode: ifscCode,
      amount: amount,
      paymentReason: BANK_MONEY_TRANSFER
    }));

    // Navigate to payment page
    nav("/payment");
  };
  return (
    <div className="bank-transfer-container">
    
      <form onSubmit={handleSubmit} className="bank-transfer-form text-center">
      <div><img src="/images/symbols.png" className="w-25 mb-4 mt-0 p-0 " alt="" /></div>
        {/* Bank Account Input */}
        <div className="form-group">
          <input
            type="text"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleChange}
            required
            placeholder=" "
            maxLength="15"
          />
          <label>Bank Account </label>
        </div>

        {/* IFSC Code */}
        <div className="form-group">
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>IFSC Code</label>
        </div>

        {/* Amount */}
        <div className="form-group">
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Amount (₹)</label>
        </div>

        <button type="submit" className="submit-button">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default BankTransferForm;
