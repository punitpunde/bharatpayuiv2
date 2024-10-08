import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRechargePlans } from "../../features/recharge";
import Loader from "../extra/Loader";
import Swal from 'sweetalert2';
import { addRechargeData } from "../../features/recharge";

function BrowsePlans() {
  const { rechargePlans: planData, loading, error} = useSelector((state) => state.rechargePlans);
  const dispatch = useDispatch();
  // Handle plan click
  const handlePlanClick = (plan) => {
    Swal.fire({
      title: `You selected ${plan.operator} - ${plan.circle}`,
      text: `Details: ${plan.benefit}\nPrice: ${plan.amount}`,
      icon: 'info',
      confirmButtonText: 'OK'
    }).then((result)=>{
      if(result.isConfirmed){
          dispatch(addRechargeData(plan))
      }
    })
  };

  useEffect(() => {
    dispatch(fetchRechargePlans());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Errroe occured",
    });
    return;
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
            <li>Validity</li>
            <li>Price</li>
          </ul>
        </div>
        <hr className="m-0 mt-1" />

        <div className="mx-auto mt-0 plan-desc-container">
          <div className="plan-data">
            {planData.map(({ id, circle,validity, operator, category, benefit, amount }) => (
              <ul key={id} className="plan grid-layout mt-3" onClick={() => handlePlanClick({ circle, operator, category, benefit, amount,validity })}>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Circle</li>
                <li>{circle}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Operator</li>
                <li>{operator}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Category</li>
                <li>{category}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Description</li>
                <li>{benefit}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Validity</li>
                <li>{validity}</li>
                <li className="plan-desc-sm d-inline d-lg-none text-black">Amount</li>
                <li className="badge-info">{amount}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowsePlans;
