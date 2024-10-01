import React, { useState } from 'react';
import './loginRegistraionForm.css'; // Make sure your CSS file is properly linked

const LoginRegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', email, password, confirmPassword);
  };

  return (
    <div className="container-form">
      <input type="checkbox" id="check" checked={!isLogin} onChange={() => setIsLogin(!isLogin)} />
      
      <div className={`login form ${isLogin ? '' : 'hidden'}`}>
        <header>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            type="text"
            id="login-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forgot password?</a>
          <input type="submit" className="button" value="Login" />
        </form>
        <div className="signup">
          <span>Don't have an account? <label htmlFor="check">Signup</label></span>
        </div>
      </div>

      <div className={`registration form ${isLogin ? 'hidden' : ''}`}>
        <header>Signup</header>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="signup-email">Email</label>
          <input
            type="text"
            id="signup-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Create a password</label>
          <input
            type="password"
            id="signup-password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm your password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <input type="submit" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span>Already have an account? <label htmlFor="check">Login</label></span>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
