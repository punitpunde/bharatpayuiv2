import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDTHRechargePlans } from "../../features/dth";
import Loader from "../extra/Loader";
import Swal from "sweetalert2";
import { addDTHRechargeData } from "../../features/dth";

function DTHBrowsePlans() {
  const { dthRechargePlans: planData, loading, error } = useSelector((state) => state.dthRecharge);
  const dispatch = useDispatch();

  const handlePlanClick = (plan) => {
    Swal.fire({
      title: `You selected ${plan.operator} - ${plan.circle}`,
      text: `Details: ${plan.benefit}\nPrice: ${plan.amount}`,
      icon: "info",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addRechargeData(plan));
      }
    });
  };

  useEffect(() => {
    dispatch(fetchDTHRechargePlans());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error occurred while fetching DTH plans",
    });
    return null; // You can also add a fallback UI
  }

  return (
    <div className="col-lg-7 plan-container col-12 mt-5 mt-lg-0 me-lg-4">
      <div className="plan-nav sticky-top w-100 rounded p-0 pb-0">
        <h3 className="text-center text-black pb-2 fs-4 position-relative">
          Browse DTH Plans of <span className="text-danger">Jio</span> {/* You can make the operator dynamic */}
        </h3>
        <div className="plan-desc-nav pb-1 d-none d-lg-block">
          <ul className="plan-desc grid-layout">
            <li>Plan Id</li>
            <li>Operator</li>
            <li>Plan Name</li>
            <li>Validity</li>
            <li>Channels</li>
            <li>Price</li>
          </ul>
        </div>
        <hr className="m-0 mt-1" />

        <div className="mx-auto mt-0 plan-desc-container">
          <div className="plan-data">
            {planData.map(({ planId, channels, validityDays, operator,planName, amount }) => (
              <ul
                key={planId}
                className="plan grid-layout mt-3"
                onClick={() =>
                  handlePlanClick({operator})
                }
              >
                <li className="plan-desc-sm d-inline d-lg-none text-black">Plan Id</li>
                <li>{planId}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Operator</li>
                <li>{operator}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Plan Name</li>
                <li>{planName}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Validity days</li>
                <li>{validityDays}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Channels</li>
                <li>{channels}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Price</li>
                <li className="badge-info">{amount}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DTHBrowsePlans;
