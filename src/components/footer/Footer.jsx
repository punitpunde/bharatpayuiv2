import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="paymentAppFooter">
      <div className="footerContent">
        <div className="brand fs-3 fw-bold">
         <span className="text-danger">Bharat</span>Pay
        </div>

        <div className="footerLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help & Support</a>
        </div>

        <div className="footerIcons">
          <a href="#"><i className="fa-brands fa-google-pay"></i></a>
          <a href="#"><i className="fa-brands fa-apple-pay"></i></a>
          <a href="#"><i className="fa-brands fa-paypal"></i></a>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2024 <span className="text-danger fw-bold">Bharat</span><span className="fw-bold">Pay</span>. All rights reserved. Developed by <span className="text-primary fw-bold">Punit Punde</span></p>
      </div>
    </footer>
  );
}

export default Footer;
