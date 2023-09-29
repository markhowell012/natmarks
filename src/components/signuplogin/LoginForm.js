// LoginForm.js
import React from 'react';
import './Signup.css'

const LoginForm = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email" className="auth-label">
            Email:
          </label>
          <input type="email" id="login-email" className="auth-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password" className="auth-label">
            Password:
          </label>
          <input
            type="password"
            id="login-password"
            className="auth-input"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="auth-button">
            Log In
          </button>
          <p>
            Don't have an account?{' '}
            <span className="auth-link" onClick={() => onSwitch('signup')}>
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
