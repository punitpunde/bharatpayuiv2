import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Font Awesome icons
import './loginRegistraionForm.css';

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3>Sign Up</h3>
        
        {/* Floating Label for Name */}
        <div className="floating-label">
          <input type="text" id="name" className="form-control" required placeholder=" " />
          <label htmlFor="name">Name</label>
        </div>

        {/* Floating Label for Email */}
        <div className="floating-label">
          <input type="email" id="email" className="form-control" required placeholder=" " />
          <label htmlFor="email">Email</label>
        </div>

        {/* Floating Label for Password with Icon */}
        <div className="floating-label">
          <input 
            type={passwordShown ? "text" : "password"}  // Toggle between text/password
            id="password" 
            className="form-control" 
            required 
            placeholder=" " 
          />
          <label htmlFor="password">Password</label>

          {/* Password Visibility Icon */}
          <span 
            className="password-icon" 
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="btn-primary">Sign Up</button>

        <div className="divider">or</div>

        <button className="btn-google">
          <span className="google-icon">G</span> Sign up with Google
        </button>

        <div className="text-center mt-3">
          Already have an account? <a href="#">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
