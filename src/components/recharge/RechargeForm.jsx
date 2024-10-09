import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { makeRecharge, resetRechargeStatus } from "../../features/recharge";
import { useNavigate } from "react-router-dom";
import { addPaymentDetails, makePayment } from "../../features/payment";
import { MOBILE_RECHARGE } from "../../constants";
function RechargeForm() {
  const dispatch = useDispatch();
  const { rechargeSuccess, rechargeData } = useSelector(
    (state) => state.rechargePlans
  );
  const {paymentFailed, paymentSuccess } = useSelector((state) => state.payment);
  const nav = useNavigate();
  const [operatorsVisible, setOperatorsVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");
  const [planType, setPlanType] = useState("Prepaid");
  const [proceedToRecharge, setProceedToRecharge] = useState(false); // State to trigger recharge action
  const operatorRef = useRef(null);

  const handleRechargeClick = () => {
    if (mobileNumber.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid mobile number!",
      });
      return; // Exit early
    }

    if (!rechargeData) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a plan!",
      });
      return; // Exit early
    }
    dispatch(addPaymentDetails({amount:rechargeData.amount,operator:rechargeData.operator,paymentReason:MOBILE_RECHARGE}));
    nav("/payment")
  };


  const handleClickOutside = (event) => {
    if (operatorRef.current && !operatorRef.current.contains(event.target)) {
      setOperatorsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="form-check form-check-inline pb-2">
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
          ref={operatorRef}
          onClick={() => setOperatorsVisible(true)}
        >
          <input
            type="text"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            required
            readOnly
          />
          <label className="form-label">Operator</label>
          <div className="input-line"></div>
        </div>
        {operatorsVisible && (
          <ul className="operators rounded">
            {["Jio", "BSNL", "VI", "Airtel", "MTNL"].map((op) => (
              <li
                key={op}
                onClick={() => {
                  setOperator(op);
                  setOperatorsVisible(false);
                }}
              >
                <img
                  src={`/images/${op.toLowerCase()}.webp`}
                  alt={`${op} logo`}
                />
                {op}
              </li>
            ))}
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
