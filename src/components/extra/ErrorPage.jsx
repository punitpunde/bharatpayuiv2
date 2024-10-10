// ErrorPage.js
import React from "react";
import "./ErrorPage.css"; // Import the CSS file for styling

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops!</h1>
        <p className="error-message">404 - Page Not Found</p>
        <p className="error-description">
          Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage.
        </p>
        <a href="/" className="back-home">Go to Home</a>
      </div>
      <div className="error-illustration">
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
