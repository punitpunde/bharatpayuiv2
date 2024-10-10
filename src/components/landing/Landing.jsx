import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
    const nav = useNavigate()
  return (
    <div className="app d-flex flex-column min-vh-100">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Bank Section */}
        <section className="text-center p-4 bg-white rounded shadow-sm mb-4">
          <h2 className="text-primary">Start with your bank</h2>
          <p className="text-muted">Send and receive money securely</p>
          <button className="btn btn-primary">Add bank account</button>
        </section>

        {/* Action Grid */}
        <section className="actions bg-white rounded shadow-sm p-4 mb-4">
          <div className="row text-center" >
            <div className="col-3 mb-3 pt-3" onClick={()=>nav("/error")}>
              <i className="bi bi-qr-code-scan fs-2 text-primary"></i>
              <p className="mt-2">Scan any QR code</p>
            </div>
            <div className="col-3 mb-3 pt-3">
              <i className="bi bi-telephone-fill fs-2 text-primary"></i>
              <p className="mt-2">Pay phone number</p>
            </div>

            <div className="col-3 mb-3 pt-3">
              <i className="bi bi-bank fs-2 text-primary"></i>
              <p className="mt-2">Bank transfer</p>
            </div>
            <div className="col-3 pt-3">
              <i className="bi bi-upc-scan fs-2 text-primary"></i>
              <p className="mt-2">Pay UPI ID</p>
            </div>
            <div className="col-3 pt-3">
              <i className="bi bi-arrow-left-right fs-2 text-primary"></i>
              <p className="mt-2">Self transfer</p>
            </div>
            <div className="col-3 pt-3">
              <i className="bi bi-file-earmark-text fs-2 text-primary"></i>
              <p className="mt-2">Pay bills</p>
            </div>
            <div className="col-3 pt-3">
              <i className="bi bi-phone fs-2 text-primary"></i>
              <p className="mt-2">Mobile recharge</p>
            </div>
            <div className="col-3 mb-3 pt-3">
              <i className="bi bi-tv fs-2 text-primary"></i>
              <p className="mt-2">DTH Recharge</p>
            </div>
          </div>
        </section>

        {/* People Section */}
        <section className="bg-white rounded shadow-sm p-4 mb-4">
          <h5 className="text-primary">People</h5>
          <p className="text-muted">
            People you’ve recently paid will show up here.{" "}
            <a href="#" className="text-primary">
              Find Transaction History
            </a>
          </p>
        </section>

        {/* Businesses Section */}
        <section className="bg-white rounded shadow-sm p-4 mb-4">
          <h5 className="text-primary">Businesses</h5>
          <div className="row text-center">
            <div className="col-3">
              <i className="bi bi-circle-fill text-primary fs-2"></i>
              <p className="mt-2">Jio Prepaid</p>
            </div>
            <div className="col-3">
              <i className="bi bi-circle-fill text-primary fs-2"></i>
              <p className="mt-2">Jio Postpaid</p>
            </div>
            <div className="col-3">
              <i className="bi bi-circle-fill text-danger fs-2"></i>
              <p className="mt-2">RedBus IN</p>
            </div>
            <div className="col-3">
              <i className="bi bi-circle-fill text-success fs-2"></i>
              <p className="mt-2">Prefr Loans</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-light p-3 mt-auto text-center">
        <p className="text-muted">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Landing;
