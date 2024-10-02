import React from "react";
function RechargeForm() {
  return (
    <div className="recharge-form-container col-10 col-md-4 text-center mx-auto">
      <h4 className="fs-5 pt-2 pb-2">Recharge or Pay Mobile Bills</h4>
      <form action="" className="text-center">
        <div class="form-check form-check-inline pe-4 pb-2">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label" for="inlineRadio1">
            Prepaid
          </label>
        </div>
        <div class="form-check form-check-inline pb-2">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">
            Postpaid
          </label>
        </div>
        <div className="input-box mx-auto mb-3">
          <input type="text" required />
          <label className="form-label">Mobile Number</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto mb-3">
          <input type="text" required />
          <label className="form-label">Operator</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto mb-3">
          <input type="text" required />
          <label className="form-label">Amount</label>
          <div className="input-line"></div>
        </div>
        <button
          type="button"
          className="text-white rounded btn-recharge px-5 py-2 mb-5"
        >
          Proceed to Recharge
        </button>
      </form>
    </div>
  );
}

export default RechargeForm;
