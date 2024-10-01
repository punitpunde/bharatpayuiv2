import React from "react";
import { useState } from "react";
import "./navbar.css";
function NavBar() {
  const [over,setOver] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  shadow p-3 mb-3 bg-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <img src="/images/logo.svg" alt="logo" />

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0  fs-5 fw-bold">
          <li className="nav-item ms-5">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </div>

      <div className="image-container-parent text-white user" onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)}>
        <span >Sign in </span>
        <img src={over ? "/images/logoutImg.svg":"/images/login.svg"} alt="" />
      </div>
    </nav>
  );
}

export default NavBar;