// SignUpForm.js
import React from 'react';
import './Signup.css'

const SignUpForm = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="auth-container">
      <h2 className='signH2'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="signup-email" className="auth-label">
            Email:
          </label>
          <input
            type="email"
            id="signup-email"
            className="auth-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-fullname" className="auth-label">
            Full Name:
          </label>
          <input
            type="text"
            id="signup-fullname"
            className="auth-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-businessname" className="auth-label">
            Business Name:
          </label>
          <input
            type="text"
            id="signup-businessname"
            className="auth-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password" className="auth-label">
            Password:
          </label>
          <input
            type="password"
            id="signup-password"
            className="auth-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-reenterpassword" className="auth-label">
            Re-enter Password:
          </label>
          <input
            type="password"
            id="signup-reenterpassword"
            className="auth-input"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="auth-button">
            Sign Up
          </button>
          <p>
            Already have an account?{' '}
            <span className="auth-link" onClick={() => onSwitch('login')}>
              Log In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
