import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRechargePlans } from "../../features/recharge";
import Loader from "../extra/Loader";

function BrowsePlans() {
  const rechargePlans = useSelector((state) => state.rechargePlans);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRechargePlans());
  }, [dispatch]);

  const { rechargePlans: planData, loading } = rechargePlans;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="col-lg-7 plan-container col-12 mt-5 mt-lg-0 me-lg-4">
      <div className="plan-nav sticky-top w-100 rounded p-0 pb-0">
        <h3 className="text-center text-black pb-2 fs-4 position-relative">
          Browse Plans of <span className="text-danger">Jio</span>
        </h3>
        <div className="plan-desc-nav pb-1 d-none d-lg-block">
          <ul className="plan-desc grid-layout">
            <li>Circle</li>
            <li>Operator</li>
            <li>Category</li>
            <li>Description</li>
            <li>Price</li>
          </ul>
        </div>
        <hr className="m-0 mt-1" />

        <div className="mx-auto mt-0 plan-desc-container">
          <div className="plan-data">
            {planData.map((plan, index) => (
              <ul key={index} className="plan grid-layout mt-3">
                <li className="plan-desc-sm d-inline d-lg-none text-black">Circle</li>
                <li>{plan.circle}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Operator</li>
                <li>{plan.operator}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Category</li>
                <li>{plan.category}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Description</li>
                <li>{plan.benefit}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Amount</li>
                <li className="badge-info">{plan.amount}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowsePlans;
