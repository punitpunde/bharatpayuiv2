import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { makeRecharge, resetRechargeStatus } from "../../features/recharge";
import { useNavigate } from "react-router-dom";
import { addPaymentDetails, resetState } from "../../features/payment";
import { MOBILE_RECHARGE } from "../../constants";

function RechargeForm() {
  const dispatch = useDispatch();
  const { paymentFailed, paymentSuccess } = useSelector(
    (state) => state.payment
  );
  const { rechargeData, rechargeSuccess } = useSelector(
    (state) => state.rechargePlans
  );
  const nav = useNavigate();
  const [operatorsVisible, setOperatorsVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");
  const [planType, setPlanType] = useState("Prepaid");
  const [showPaymentPage, setShowPaymentPage] = useState(false);


  
  // Handle recharge success and reset states
  useEffect(() => {
    if (rechargeSuccess) {
      Swal.fire("Success", "Recharge completed successfully!", "success");
      dispatch(resetState());
      dispatch(resetRechargeStatus());
    }
  }, [rechargeSuccess, dispatch]);

  // Handle payment success and trigger recharge
  useEffect(() => {
    if (paymentSuccess) {
      dispatch(makeRecharge({ rechargeData }));
    }
  }, [paymentSuccess, paymentFailed, dispatch, rechargeData]);

  // Redirect to payment page if `showPaymentPage` is true
  useEffect(() => {
    if (showPaymentPage) {
      nav("/payment");
    }
  }, [showPaymentPage, nav]);

  const handleRechargeClick = () => {
    if (mobileNumber.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid mobile number!",
      });
      return;
    }

    if (!rechargeData) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a plan!",
      });
      return;
    }

    dispatch(
      addPaymentDetails({
        amount: rechargeData.amount,
        paymentReason: MOBILE_RECHARGE,
      })
    );
    setShowPaymentPage(true);
  };



  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="recharge-form-container col-10 col-md-4 text-center mx-auto">
      <h4 className="fs-5 pt-2 pb-2">Recharge or Pay Mobile Bills</h4>
      <form className="text-center">
        <div className="form-check form-check-inline pe-4 pb-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Prepaid"
            checked={planType === "Prepaid"}
            onChange={() => setPlanType("Prepaid")}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Prepaid
          </label>
        </div>
        <div className="form-check  form-check-inline pb-2">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Postpaid"
            checked={planType === "Postpaid"}
            onChange={() => setPlanType("Postpaid")}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Postpaid
          </label>
        </div>
        <div className="input-box mx-auto mb-3">
          <input
            type="tel"
            maxLength={10}
            required
            pattern="[0-9]{10}"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <label className="form-label">Mobile Number</label>
          <div className="input-line"></div>
        </div>
        <div
          className="input-box mx-auto mb-3"
          // ref={operatorRef}
          onClick={() => setOperatorsVisible(true)} // Opens the operator list
        >
          <input
            type="text"
            value={operator} // Bind input value to operator state
            onChange={(e) => setOperator(e.target.value)}
            required
            readOnly // Keep it read-only to prevent manual edits
          />
          <label className="form-label">Operator</label>
          <div className="input-line"></div>
        </div>

        {operatorsVisible && (
          <ul className="operators rounded">
            <li
             
              onClick={() => {
                setOperator("Jio"); 
                setOperatorsVisible(false);
              }}
            >
              <img
                src={`/images/jio.webp`}
                alt={`jio logo`}
              />
              Jio
            </li>
            <li
             
              onClick={() => {
                setOperator("VI"); 
                setOperatorsVisible(false);
              }}
            >
              <img
                src={`/images/vi.avif`}
                alt={`jio logo`}
              />
             VI
            </li>
            <li
             
             onClick={() => {
               setOperator("MTNL"); 
               setOperatorsVisible(false);
             }}
           >
             <img
               src={`/images/mtnl.webp`}
               alt={`mtnl logo`}
             />
            MTNL
           </li>
           <li
             
             onClick={() => {
               setOperator("Airtel"); 
               setOperatorsVisible(false);
             }}
           >
             <img
               src={`/images/airtel.avif`}
               alt={`mtnl logo`}
             />
           Airtel
           </li>
          </ul>
        )}
        {!operatorsVisible && (
          <>
            <div className="input-box mx-auto mb-3">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <label className="form-label">Amount</label>
              <div className="input-line"></div>
            </div>
            <button
              type="button"
              className="text-white rounded btn-recharge px-5 py-2 mb-5"
              onClick={handleRechargeClick}
            >
              Proceed to Recharge
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default RechargeForm;
