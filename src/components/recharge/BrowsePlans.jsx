import React from "react";
const planData = [
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  {
    circle: "Andhra Pradesh",
    type: "Recharge",
    data: "1 GB",
    validity: "Existing Active Plan",
    description:
      "For users with an active validity plan | Note - You can recharge with above plan to avail the same benefits of earlier Rs.15 Data Pack",
    price: "Rs. 19",
  },
  // More plans can be added here...
];
function BrowsePlans() {
  return (
    <div className="col-lg-7  plan-container col-12  mt-5 mt-lg-0 me-lg-4">
      <div className="plan-nav sticky-top w-100 rounded p-0 pb-0">
        <h3 className="text-center text-black   pb-2 fs-4  position-relative">
          Browse Plans of <span className="text-danger">Jio</span>
        </h3>
        <div className="plan-desc-nav pb-1 d-none d-lg-block">
          <ul className="plan-desc grid-layout">
            <li>Circle</li>
            <li>Plan Type</li>
            <li>Data</li>
            <li>Validity</li>
            <li>Description</li>
            <li>Price</li>
          </ul>
        </div>
        <hr className="m-0 mt-1" />
      </div>
      <div className=" mx-auto mt-0 plan-desc-container ">
        {/* Navigation Bar */}

        <div className="plan-data">
          {" "}
          {/* Plan Data */}
          {planData.map((plan, index) => (
            <ul key={index} className="plan grid-layout mt-3">
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Circle
              </li>
              <li>{plan.circle}</li>
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Plan Type
              </li>
              <li>{plan.type}</li>
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Data
              </li>
              <li>{plan.data}</li>
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Validity
              </li>
              <li>{plan.validity}</li>
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Description
              </li>
              <li>{plan.description}</li>
              <li className="plan-desc-sm d-inline d-lg-none text-black">
                Price
              </li>
              <li className=" badge-info">{plan.price}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowsePlans;
