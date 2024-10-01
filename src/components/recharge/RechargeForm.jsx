import React from "react";
function RechargeForm() {
  return (
    <div className="recharge-form-container col-md-4 col-6 ps-4 pt-4 pb-5 d-flex flex-column text-center">
      <h4 className="fs-5 pt-3">Recharge or Pay Mobile Bills</h4>
      <form action="">
        <div className="input-box mx-auto">
          <input type="text" required />
          <label>Mobile Number</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto">
          <input type="text" required />
          <label>Operatorr</label>
          <div className="input-line"></div>
        </div>
        <div className="input-box mx-auto">
          <input type="text" required />
          <label>Amount</label>
          <div className="input-line"></div>
        </div>
        <button type="button" className="text-white rounded btn-recharge px-5 py-2 ">
          Proceed to recharge
        </button>
      </form>
    </div>
  );
}

export default RechargeForm;
