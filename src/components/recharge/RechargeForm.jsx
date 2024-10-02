import React from "react";
function RechargeForm() {
  return (
    <div className="recharge-form-container col-10 col-md-4 text-center mx-auto">
      <h4 className="fs-5 pt-3">Recharge or Pay Mobile Bills</h4>
      <form action="" className="text-center">
        <div className="input-box mx-auto mb-3">
          <input type="text" required className="form-control" />
          <label className="form-label">Mobile Number</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto mb-3">
          <input type="text" required className="form-control" />
          <label className="form-label">Operator</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto mb-3">
          <input type="text" required className="form-control" />
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
