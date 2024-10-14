import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Font Awesome icons
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,resetAuthError } from '../../features/security';
import './login.css';

const LoginForm = () => {
  const [name, setName] = useState(''); // Add state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch loginUser with email and password
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3>Sign In</h3>
        
        {/* Floating Label for Name */}
        {/* <div className="floating-label">
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            required 
            placeholder=" " 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
        </div> */}

        {/* Floating Label for Email */}
        <div className="floating-label">
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            required 
            placeholder=" " 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        <button className="btn-primary" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>

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
