import React from 'react';
import './ServiceUnavailable.css'; // Import the CSS for animation

const ServiceUnavailable = () => {
  return (
    <div className="service-unavailable-container">
      <div className="animation-wrapper">
        <div className="animated-text">
          <h1>Service Unavailable</h1>
          <p>We're sorry, this service is currently unavailable. Please try again later.</p>
        </div>
      </div>
      <div className="loading-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ServiceUnavailable;
